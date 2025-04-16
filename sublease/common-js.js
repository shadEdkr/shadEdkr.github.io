// Common JavaScript functions for all pages
document.addEventListener('DOMContentLoaded', function() {
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
            // Update UI for logged-in state
            document.body.classList.add('authenticated');
            
            if (loginBtn) {
                loginBtn.textContent = '로그아웃';
            }
            
            if (registerBtn) {
                registerBtn.textContent = '내 계정';
                registerBtn.href = '#'; // Would link to a user profile page in a real app
            }
            
            // Show seller-only links
            sellerOnlyLinks.forEach(link => {
                link.style.display = 'block'; // Make sure the links are visible
                link.classList.add('enabled-link');
            });
            
            // Update CTA button to direct to listing creation
            if (ctaButton) {
                ctaButton.href = 'post-listing-page.html';
                ctaButton.textContent = '임대 등록하기';
            }
            
            // Enable all registration links
            registerLinks.forEach(link => {
                // Remove any previous click handlers that might block navigation
                const newLink = link.cloneNode(true);
                link.parentNode.replaceChild(newLink, link);
            });
        } else {
            // Update UI for logged-out state
            document.body.classList.remove('authenticated');
            
            if (loginBtn) {
                loginBtn.textContent = '판매자 로그인';
            }
            
            if (registerBtn) {
                registerBtn.textContent = '판매자 등록';
                registerBtn.href = 'register-page.html';
            }
            
            // Hide seller-only links
            sellerOnlyLinks.forEach(link => {
                link.style.display = 'none';
            });
            
            // Update CTA button for non-logged-in users
            if (ctaButton) {
                ctaButton.href = 'login-page.html';
                ctaButton.textContent = '판매자 등록하기';
            }
            
            // Add protection to registration links
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
    
    // Initial UI update
    updateAuthUI();
    
    // Handle login/logout button click
    const loginBtn = document.querySelector('.login-btn');
    if (loginBtn) {
        loginBtn.addEventListener('click', function(e) {
            if (isSellerLoggedIn()) {
                // Handle logout
                e.preventDefault();
                localStorage.removeItem('sellerLoggedIn');
                updateAuthUI();
                alert('로그아웃 되었습니다.');
                // Redirect to home if on protected page
                const currentPath = window.location.pathname;
                if (currentPath.includes('post-listing-page')) {
                    window.location.href = 'complete-main-html.html';
                } else {
                    // Refresh current page to update UI
                    window.location.reload();
                }
            }
            // If not logged in, let the default link behavior take them to the login page
        });
    }
    
    // Add login form submission handling
    const loginForm = document.querySelector('form#login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // For demo purposes, consider any login attempt as successful
            localStorage.setItem('sellerLoggedIn', 'true');
            alert('로그인 성공! 이제 등록하기 기능을 사용할 수 있습니다.');
            
            // Get the referring page if available
            const referrer = document.referrer;
            if (referrer && referrer.includes('post-listing-page')) {
                // If they were trying to access the listing page, send them back there
                window.location.href = 'post-listing-page.html';
            } else {
                // Otherwise go to home page
                window.location.href = 'complete-main-html.html';
            }
        });
    }
    
    // Handle registration form
    const registerForm = document.querySelector('form:not(#login-form):not(#search-form)');
    if (registerForm && window.location.pathname.includes('register-page.html')) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // For demo purposes, consider any registration attempt as successful
            localStorage.setItem('sellerLoggedIn', 'true');
            alert('회원가입 성공! 이제 등록하기 기능을 사용할 수 있습니다.');
            window.location.href = 'post-listing-page.html';
        });
    }
    
    // Add listing form submission handling
    const listingForm = document.querySelector('form#listing-form');
    if (listingForm) {
        listingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('임대 등록이 성공적으로 완료되었습니다!');
            window.location.href = 'complete-main-html.html';
        });
    }
    
    // Protect seller-only pages
    function protectSellerOnlyPages() {
        const currentPath = window.location.pathname;
        
        // If this is a seller-only page and user is not logged in
        if (currentPath.includes('post-listing-page') && !isSellerLoggedIn()) {
            alert('판매자 로그인이 필요한 페이지입니다.');
            window.location.href = 'login-page.html?redirect=' + encodeURIComponent(currentPath);
        }
    }
    
    // Check page access
    protectSellerOnlyPages();
    
    // Get the home link in the main navigation
    const homeLink = document.querySelector('.main-nav a[href="complete-main-html.html"]');
    
    // Add event listener to the home link
    if (homeLink) {
        homeLink.addEventListener('click', function(event) {
            // Check if we're already on the home page
            if (window.location.pathname === '/' || 
                window.location.pathname === '/complete-main-html.html' || 
                window.location.pathname.endsWith('/complete-main-html.html')) {
                event.preventDefault();
                window.location.reload();
            }
        });
    }
    
    // Also handle the home link in the quick links section of footer
    const footerHomeLink = document.querySelector('.footer-links a[href="complete-main-html.html"]');
    
    if (footerHomeLink) {
        footerHomeLink.addEventListener('click', function(event) {
            // Check if we're already on the home page
            if (window.location.pathname === '/' || 
                window.location.pathname === '/complete-main-html.html' || 
                window.location.pathname.endsWith('/complete-main-html.html')) {
                event.preventDefault();
                window.location.reload();
            }
        });
    }
    
    // Handle the site title link as well
    const siteTitleLink = document.querySelector('.site-title');
    
    if (siteTitleLink) {
        siteTitleLink.addEventListener('click', function(event) {
            // Check if we're already on the home page
            if (window.location.pathname === '/' || 
                window.location.pathname === '/complete-main-html.html' || 
                window.location.pathname.endsWith('/complete-main-html.html')) {
                event.preventDefault();
                window.location.reload();
            }
        });
    }
});