document.addEventListener('DOMContentLoaded', function() {
  // Error boundary for search functionality
  const searchErrorBoundary = document.createElement('div');
  searchErrorBoundary.className = 'error-boundary';
  searchErrorBoundary.style.display = 'none';
  document.querySelector('.listing-section').prepend(searchErrorBoundary);

  // Debounce function for performance
  function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  // Sample data for demonstration
  const sampleListings = [
    {
      id: 1,
      title: "챈시 힐 1베드룸 아파트",
      price: 800,
      location: "챈시 힐",
      distance: "5-15",
      distanceText: "캠퍼스에서 5-15분 도보",
      period: "2023년 5월 - 8월 (3개월)",
      amenities: ["와이파이", "수도", "전기"],
      imageUrl: "/api/placeholder/300/200"
    },
    {
      id: 2,
      title: "캠퍼스 서쪽 2베드룸 아파트",
      price: 950,
      location: "캠퍼스 서쪽",
      distance: "5-15",
      distanceText: "캠퍼스에서 5-15분 도보",
      period: "2023년 6월 - 8월 (2개월)",
      amenities: ["와이파이", "가구 포함", "헬스장"],
      imageUrl: "/api/placeholder/300/200"
    },
    {
      id: 3,
      title: "다운타운 스튜디오",
      price: 700,
      location: "다운타운",
      distance: "15-30",
      distanceText: "캠퍼스에서 15-30분 도보",
      period: "2023년 5월 - 7월 (3개월)",
      amenities: ["모든 유틸리티 포함", "주차장"],
      imageUrl: "/api/placeholder/300/200"
    },
    {
      id: 4,
      title: "힐사이드 1베드룸",
      price: 850,
      location: "힐사이드",
      distance: "5-15",
      distanceText: "캠퍼스에서 5-15분 도보",
      period: "2023년 5월 - 8월 (3개월)",
      amenities: ["와이파이", "세탁시설", "헬스장"],
      imageUrl: "/api/placeholder/300/200"
    },
    {
      id: 5,
      title: "퍼듀 빌리지 2베드룸",
      price: 1100,
      location: "퍼듀 빌리지",
      distance: "15-30",
      distanceText: "캠퍼스에서 15-30분 도보",
      period: "2023년 6월 - 8월 (2개월)",
      amenities: ["가구 포함", "주차장", "수영장"],
      imageUrl: "/api/placeholder/300/200"
    },
    {
      id: 6,
      title: "웨스트 라파예트 스튜디오",
      price: 650,
      location: "웨스트 라파예트",
      distance: "car",
      distanceText: "차량 필요",
      period: "2023년 7월 - 8월 (1개월)",
      amenities: ["와이파이", "전기", "수도"],
      imageUrl: "/api/placeholder/300/200"
    }
  ];
  
  // Function to render listings with error handling
  function renderListings(listings) {
    try {
      const resultsContainer = document.getElementById('results-container');
      const resultsCount = document.querySelector('.results-count');
      
      if (!resultsContainer) {
        throw new Error('Results container not found');
      }
      
      // Update results count
      if (resultsCount) {
        resultsCount.textContent = `${listings.length}개 임대 목록`;
      }
      
      // Show loading state
      showLoading(resultsContainer);
      
      // Simulate API delay
      setTimeout(() => {
        if (listings.length === 0) {
          resultsContainer.innerHTML = '<div class="no-results">검색 결과가 없습니다. 다른 필터를 사용해 보세요.</div>';
        } else {
          resultsContainer.innerHTML = listings.map(listing => `
            <div class="listing-card" role="article">
              <div class="listing-img" style="background-image: url('${listing.imageUrl}')" role="img" aria-label="${listing.title}"></div>
              <div class="listing-details">
                <div class="distance-badge">${listing.distanceText}</div>
                <div class="listing-price">$${listing.price}/월</div>
                <div class="listing-location">
                  <span>${listing.location}</span>
                </div>
                <div>${listing.period}</div>
                <div class="listing-amenities" role="list">
                  ${listing.amenities.map(amenity => `
                    <div class="amenity" role="listitem">
                      <span>${amenity}</span>
                    </div>
                  `).join('')}
                </div>
                <a href="listing-detail-page.html?id=${listing.id}" class="view-details" aria-label="${listing.title} 자세히 보기">자세히 보기</a>
              </div>
            </div>
          `).join('');
        }
        
        // Hide loading state
        hideLoading(resultsContainer);
        
        // Initialize lazy loading for images
        initLazyLoading();
      }, 500);
    } catch (error) {
      console.error('Error rendering listings:', error);
      searchErrorBoundary.style.display = 'block';
      searchErrorBoundary.innerHTML = `
        <h2>죄송합니다. 검색 결과를 불러오는 중 문제가 발생했습니다.</h2>
        <p>페이지를 새로고침하거나 나중에 다시 시도해주세요.</p>
        <button class="btn btn-primary" onclick="window.location.reload()">새로고침</button>
      `;
    }
  }
  
  // Initialize lazy loading for images
  function initLazyLoading() {
    const images = document.querySelectorAll('.listing-img');
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.style.backgroundImage = img.getAttribute('data-src');
          observer.unobserve(img);
        }
      });
    });
    
    images.forEach(img => {
      img.setAttribute('data-src', img.style.backgroundImage);
      img.style.backgroundImage = 'none';
      imageObserver.observe(img);
    });
  }
  
  // Parse URL parameters to get search filters
  const urlParams = new URLSearchParams(window.location.search);
  const distanceFilter = urlParams.get('distance');
  const priceFilter = urlParams.get('price');
  const dateFilter = urlParams.get('date');
  const amenitiesFilter = urlParams.get('amenities');
  
  // Apply filters with error handling
  function applyFilters() {
    try {
      let filteredListings = [...sampleListings];
      
      // Apply distance filter
      if (distanceFilter) {
        filteredListings = filteredListings.filter(listing => listing.distance === distanceFilter);
      }
      
      // Apply price filter
      if (priceFilter) {
        switch(priceFilter) {
          case '500':
            filteredListings = filteredListings.filter(listing => listing.price <= 500);
            break;
          case '1000':
            filteredListings = filteredListings.filter(listing => listing.price > 500 && listing.price <= 1000);
            break;
          case '1500':
            filteredListings = filteredListings.filter(listing => listing.price > 1000 && listing.price <= 1500);
            break;
          case '2000':
            filteredListings = filteredListings.filter(listing => listing.price > 1500);
            break;
        }
      }
      
      // Apply amenities filter
      if (amenitiesFilter) {
        filteredListings = filteredListings.filter(listing => 
          listing.amenities.some(amenity => 
            amenity.toLowerCase().includes(amenitiesFilter.toLowerCase())
          )
        );
      }
      
      return filteredListings;
    } catch (error) {
      console.error('Error applying filters:', error);
      return [];
    }
  }
  
  // Render the initial filtered listings
  const filteredListings = applyFilters();
  renderListings(filteredListings);
  
  // Handle sort options with debounce
  const sortSelect = document.getElementById('sort');
  if (sortSelect) {
    sortSelect.addEventListener('change', debounce(function() {
      try {
        const sortOption = this.value;
        let sortedListings = [...filteredListings];
        
        switch(sortOption) {
          case 'price-asc':
            sortedListings.sort((a, b) => a.price - b.price);
            break;
          case 'price-desc':
            sortedListings.sort((a, b) => b.price - a.price);
            break;
          case 'distance':
            const distancePriority = { '5-15': 1, '15-30': 2, 'car': 3 };
            sortedListings.sort((a, b) => distancePriority[a.distance] - distancePriority[b.distance]);
            break;
          default:
            sortedListings = [...filteredListings];
            break;
        }
        
        renderListings(sortedListings);
      } catch (error) {
        console.error('Error sorting listings:', error);
        searchErrorBoundary.style.display = 'block';
      }
    }, 300));
  }
  
  // Handle form submission with validation
  const searchForm = document.getElementById('search-form');
  if (searchForm) {
    searchForm.addEventListener('submit', function(event) {
      event.preventDefault();
      
      try {
        const formData = new FormData(this);
        const searchParams = new URLSearchParams();
        
        for (const [key, value] of formData.entries()) {
          if (value) {
            searchParams.append(key, value);
          }
        }
        
        window.location.href = `search-page.html?${searchParams.toString()}`;
      } catch (error) {
        console.error('Error submitting search form:', error);
        searchErrorBoundary.style.display = 'block';
      }
    });
  }
  
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