// Common JavaScript functions for all pages
document.addEventListener('DOMContentLoaded', function() {
    // Error boundary handling
    window.onerror = function(msg, url, lineNo, columnNo, error) {
        const errorBoundary = document.querySelector('.error-boundary');
        if (errorBoundary) {
            errorBoundary.style.display = 'block';
        }
        console.error('Error: ' + msg + '\nURL: ' + url + '\nLine: ' + lineNo + '\nColumn: ' + columnNo + '\nError object: ' + JSON.stringify(error));
        return false;
    };

    // CSRF token generation
    function generateCSRFToken() {
        const token = Math.random().toString(36).substring(2);
        localStorage.setItem('csrfToken', token);
        return token;
    }

    // Form validation
    function validateForm(form) {
        const inputs = form.querySelectorAll('input[required], select[required], textarea[required]');
        let isValid = true;
        
        inputs.forEach(input => {
            if (!input.value.trim()) {
                isValid = false;
                input.classList.add('error');
                const errorMessage = document.createElement('div');
                errorMessage.className = 'error-message';
                errorMessage.textContent = '이 필드는 필수입니다.';
                input.parentNode.appendChild(errorMessage);
            } else {
                input.classList.remove('error');
                const errorMessage = input.parentNode.querySelector('.error-message');
                if (errorMessage) {
                    errorMessage.remove();
                }
            }
        });
        
        return isValid;
    }

    // Loading state management
    function showLoading(element) {
        const loadingTemplate = document.getElementById('loading-template');
        if (loadingTemplate) {
            const loadingElement = loadingTemplate.content.cloneNode(true);
            element.appendChild(loadingElement);
        }
    }

    function hideLoading(element) {
        const loadingElement = element.querySelector('.loading');
        if (loadingElement) {
            loadingElement.remove();
        }
    }

    // Check if user is logged in as a seller
    function isSellerLoggedIn() {
        return localStorage.getItem('sellerLoggedIn') === 'true';
    }
    
    // Update UI based on login status
    function updateAuthUI() {
        const loginBtn = document.querySelector('.login-btn');
        const registerBtn = document.querySelector('.register-btn');
        const sellerOnlyLinks = document.querySelectorAll('.seller-only-link');
        const registerLinks = document.querySelectorAll('a[href="post-listing-page.html"]');
        const ctaButton = document.querySelector('.cta-btn');
        
        if (isSellerLoggedIn()) {
            document.body.classList.add('authenticated');
            
            if (loginBtn) {
                loginBtn.textContent = '로그아웃';
            }
            
            if (registerBtn) {
                registerBtn.textContent = '내 계정';
                registerBtn.href = '#'; // Would link to a user profile page in a real app
            }
            
            sellerOnlyLinks.forEach(link => {
                link.style.display = 'block';
                link.classList.add('enabled-link');
            });
            
            if (ctaButton) {
                ctaButton.href = 'post-listing-page.html';
                ctaButton.textContent = '임대 등록하기';
            }
            
            registerLinks.forEach(link => {
                const newLink = link.cloneNode(true);
                link.parentNode.replaceChild(newLink, link);
            });
        } else {
            document.body.classList.remove('authenticated');
            
            if (loginBtn) {
                loginBtn.textContent = '판매자 로그인';
            }
            
            if (registerBtn) {
                registerBtn.textContent = '판매자 등록';
                registerBtn.href = 'register-page.html';
            }
            
            sellerOnlyLinks.forEach(link => {
                link.style.display = 'none';
            });
            
            if (ctaButton) {
                ctaButton.href = 'login-page.html';
                ctaButton.textContent = '판매자 등록하기';
            }
            
            registerLinks.forEach(link => {
                link.addEventListener('click', function(e) {
                    if (!isSellerLoggedIn()) {
                        e.preventDefault();
                        alert('판매자 로그인이 필요합니다.');
                        window.location.href = 'login-page.html';
                    }
                });
            });
        }
    }
    
    // Handle login/logout button click
    const loginBtn = document.querySelector('.login-btn');
    if (loginBtn) {
        loginBtn.addEventListener('click', function(e) {
            if (isSellerLoggedIn()) {
                e.preventDefault();
                localStorage.removeItem('sellerLoggedIn');
                updateAuthUI();
                alert('로그아웃 되었습니다.');
                const currentPath = window.location.pathname;
                if (currentPath.includes('post-listing-page')) {
                    window.location.href = 'complete-main-html.html';
                } else {
                    window.location.reload();
                }
            }
        });
    }
    
    // Add login form submission handling
    const loginForm = document.querySelector('form#login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            if (!validateForm(this)) {
                return;
            }
            
            const csrfToken = generateCSRFToken();
            const formData = new FormData(this);
            formData.append('csrfToken', csrfToken);
            
            showLoading(this);
            
            // Simulate API call
            setTimeout(() => {
                localStorage.setItem('sellerLoggedIn', 'true');
                hideLoading(this);
                alert('로그인 성공! 이제 등록하기 기능을 사용할 수 있습니다.');
                
                const referrer = document.referrer;
                if (referrer && referrer.includes('post-listing-page')) {
                    window.location.href = 'post-listing-page.html';
                } else {
                    window.location.href = 'complete-main-html.html';
                }
            }, 1000);
        });
    }
    
    // Handle registration form
    const registerForm = document.querySelector('form:not(#login-form):not(#search-form)');
    if (registerForm && window.location.pathname.includes('register-page.html')) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            if (!validateForm(this)) {
                return;
            }
            
            const csrfToken = generateCSRFToken();
            const formData = new FormData(this);
            formData.append('csrfToken', csrfToken);
            
            showLoading(this);
            
            // Simulate API call
            setTimeout(() => {
                localStorage.setItem('sellerLoggedIn', 'true');
                hideLoading(this);
                alert('회원가입 성공! 이제 등록하기 기능을 사용할 수 있습니다.');
                window.location.href = 'post-listing-page.html';
            }, 1000);
        });
    }
    
    // Add listing form submission handling
    const listingForm = document.querySelector('form#listing-form');
    if (listingForm) {
        listingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            if (!validateForm(this)) {
                return;
            }
            
            const csrfToken = generateCSRFToken();
            const formData = new FormData(this);
            formData.append('csrfToken', csrfToken);
            
            showLoading(this);
            
            // Simulate API call
            setTimeout(() => {
                hideLoading(this);
                alert('임대 등록이 성공적으로 완료되었습니다!');
                window.location.href = 'complete-main-html.html';
            }, 1000);
        });
    }
    
    // Protect seller-only pages
    function protectSellerOnlyPages() {
        const currentPath = window.location.pathname;
        
        if (currentPath.includes('post-listing-page') && !isSellerLoggedIn()) {
            alert('판매자 로그인이 필요한 페이지입니다.');
            window.location.href = 'login-page.html?redirect=' + encodeURIComponent(currentPath);
        }
    }
    
    // Check page access
    protectSellerOnlyPages();
    
    // Handle home link clicks
    const homeLinks = document.querySelectorAll('a[href="complete-main-html.html"]');
    homeLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            if (window.location.pathname === '/' || 
                window.location.pathname === '/complete-main-html.html' || 
                window.location.pathname.endsWith('/complete-main-html.html')) {
                event.preventDefault();
                window.location.reload();
            }
        });
    });
    
    // Initial UI update
    updateAuthUI();
    
    // Add keyboard navigation support
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-navigation');
        }
    });
    
    document.addEventListener('mousedown', function() {
        document.body.classList.remove('keyboard-navigation');
    });
});