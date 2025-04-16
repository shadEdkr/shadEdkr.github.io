document.addEventListener('DOMContentLoaded', function() {
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
  
  // Function to render listings
  function renderListings(listings) {
    const resultsContainer = document.getElementById('results-container');
    const resultsCount = document.querySelector('.results-count');
    
    // Update results count
    if (resultsCount) {
      resultsCount.textContent = `${listings.length}개 임대 목록`;
    }
    
    // Update results container
    if (resultsContainer) {
      if (listings.length === 0) {
        resultsContainer.innerHTML = '<div class="no-results">검색 결과가 없습니다. 다른 필터를 사용해 보세요.</div>';
      } else {
        resultsContainer.innerHTML = listings.map(listing => `
          <div class="listing-card">
            <div class="listing-img" style="background-image: url('${listing.imageUrl}')"></div>
            <div class="listing-details">
              <div class="distance-badge">${listing.distanceText}</div>
              <div class="listing-price">$${listing.price}/월</div>
              <div class="listing-location">
                <span>${listing.location}</span>
              </div>
              <div>${listing.period}</div>
              <div class="listing-amenities">
                ${listing.amenities.map(amenity => `
                  <div class="amenity">
                    <span>${amenity}</span>
                  </div>
                `).join('')}
              </div>
              <a href="listing-detail-page.html?id=${listing.id}" class="view-details">자세히 보기</a>
            </div>
          </div>
        `).join('');
      }
    }
  }
  
  // Parse URL parameters to get search filters
  const urlParams = new URLSearchParams(window.location.search);
  const distanceFilter = urlParams.get('distance');
  const priceFilter = urlParams.get('price');
  const dateFilter = urlParams.get('date');
  const amenitiesFilter = urlParams.get('amenities');
  
  // Apply filters
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
  
  // Render the initial filtered listings
  renderListings(filteredListings);
  
  // Handle sort options
  const sortSelect = document.getElementById('sort');
  if (sortSelect) {
    sortSelect.addEventListener('change', function() {
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
          // Simple sort by distance category
          const distancePriority = { '5-15': 1, '15-30': 2, 'car': 3 };
          sortedListings.sort((a, b) => distancePriority[a.distance] - distancePriority[b.distance]);
          break;
        default: // date-desc or any other
          // In a real app, you'd sort by listing date
          // For this demo, we'll just keep the original order
          sortedListings = [...filteredListings];
          break;
      }
      
      // Re-render listings with new sort
      renderListings(sortedListings);
    });
  }
  
  // Handle form submission
  const searchForm = document.getElementById('search-form');
  if (searchForm) {
    searchForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission
      
      // Create a new URL with form values
      const formData = new FormData(this);
      const searchParams = new URLSearchParams();
      
      for (const [key, value] of formData.entries()) {
        if (value) { // Only add parameters with values
          searchParams.append(key, value);
        }
      }
      
      // Redirect to search page with new params
      window.location.href = `search-page.html?${searchParams.toString()}`;
    });
  }
});