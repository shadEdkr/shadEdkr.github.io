// Global variables
let profileData = {
  name: "",
  dob: "",
  ssn: "",
  emergency: "",
}

let emergencyTimeout
let isEmergencyActive = false
let isMapVisible = false

// Navigation functions
function goToProfile() {
  window.location.href = "profile.html"
}

function goToSOS() {
  window.location.href = "sos.html"
}

function goToSettings() {
  window.location.href = "settings.html"
}

function goToEmergency() {
  window.location.href = "emergency.html"
}

function goToIncoming() {
  window.location.href = "incoming.html"
}

function goToMap() {
  console.log("Navigating to map...")
  window.location.href = "map.html"
}

function goBack() {
  window.history.back()
}

// Map toggle function - Updated to go to full screen map
function toggleMap() {
  console.log("Toggle map called - redirecting to full map")
  goToMap()
}

// Show map when ambulance is found
function showMapOnAmbulanceFound() {
  const mapContainer = document.getElementById("mapContainer")
  const emergencySection = document.getElementById("emergencySection")

  if (mapContainer && emergencySection) {
    isMapVisible = true
    mapContainer.classList.remove("hidden")
    mapContainer.classList.add("visible")
    emergencySection.classList.remove("map-hidden")
  }
}

// Profile form handling
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM loaded, current page:", window.location.pathname)

  // Profile form validation
  const profileForm = document.getElementById("profileForm")
  if (profileForm) {
    const inputs = profileForm.querySelectorAll("input")
    const submitBtn = document.getElementById("submitBtn")

    inputs.forEach((input) => {
      input.addEventListener("input", validateForm)
    })

    function validateForm() {
      let allFilled = true
      inputs.forEach((input) => {
        if (!input.value.trim()) {
          allFilled = false
        }
      })

      if (allFilled) {
        submitBtn.classList.add("active")
      } else {
        submitBtn.classList.remove("active")
      }
    }

    profileForm.addEventListener("submit", (e) => {
      e.preventDefault()

      // Save profile data
      profileData.name = document.getElementById("name").value
      profileData.dob = document.getElementById("dob").value
      profileData.ssn = document.getElementById("ssn").value
      profileData.emergency = document.getElementById("emergency").value

      // Store in localStorage
      localStorage.setItem("profileData", JSON.stringify(profileData))

      // Navigate to SOS screen
      setTimeout(() => {
        goToSOS()
      }, 500)
    })
  }

  // Load profile data in settings
  if (window.location.pathname.includes("settings.html")) {
    loadProfileData()
  }

  // Auto-redirect from emergency to incoming after 5 seconds
  if (window.location.pathname.includes("emergency.html")) {
    emergencyTimeout = setTimeout(() => {
      if (isEmergencyActive) {
        // Show map when ambulance is found
        localStorage.setItem("showMapOnReturn", "true")
        goToIncoming()
      }
    }, 5000)
    isEmergencyActive = true
  }

  // Add proper event listeners for SOS screen
  if (window.location.pathname.includes("sos.html")) {
    console.log("Setting up SOS screen event listeners")

    // Location info click handler - FIXED
    const locationInfo = document.getElementById("locationInfo")
    if (locationInfo) {
      console.log("Location info element found, adding click listener")
      locationInfo.addEventListener("click", (e) => {
        e.preventDefault()
        e.stopPropagation()
        console.log("Location info clicked!")
        goToMap()
      })

      // Also add touch event for mobile
      locationInfo.addEventListener("touchend", (e) => {
        e.preventDefault()
        e.stopPropagation()
        console.log("Location info touched!")
        goToMap()
      })
    } else {
      console.log("Location info element NOT found")
    }

    // Map container click handler
    const mapContainer = document.getElementById("mapContainer")
    if (mapContainer) {
      console.log("Map container found, adding click listener")
      mapContainer.addEventListener("click", (e) => {
        e.preventDefault()
        console.log("Map container clicked!")
        goToMap()
      })
    }

    // Settings button click handler
    const settingsBtn = document.getElementById("settingsBtn")
    if (settingsBtn) {
      console.log("Settings button found, adding click listener")
      settingsBtn.addEventListener("click", (e) => {
        e.preventDefault()
        e.stopPropagation()
        console.log("Settings button clicked!")
        goToSettings()
      })
    } else {
      console.log("Settings button NOT found")
    }

    // SOS button click handler
    const sosButton = document.getElementById("sosButton")
    if (sosButton) {
      console.log("SOS button found, adding click listener")
      sosButton.addEventListener("click", (e) => {
        e.preventDefault()
        console.log("SOS button clicked!")
        startEmergency()
      })
    }

    // Check if we should show map on SOS screen return
    const shouldShowMap = localStorage.getItem("showMapOnReturn")
    if (shouldShowMap === "true") {
      setTimeout(() => {
        showMapOnAmbulanceFound()
        localStorage.removeItem("showMapOnReturn")
      }, 500)
    }
  }
})

// Emergency functions
function startEmergency() {
  console.log("Starting emergency...")
  isEmergencyActive = true
  goToEmergency()
}

function cancelEmergency() {
  isEmergencyActive = false
  if (emergencyTimeout) {
    clearTimeout(emergencyTimeout)
  }
  goToSOS()
}

// Settings functions
function loadProfileData() {
  const saved = localStorage.getItem("profileData")
  if (saved) {
    profileData = JSON.parse(saved)

    const displayName = document.getElementById("displayName")
    const displayDOB = document.getElementById("displayDOB")
    const displaySSN = document.getElementById("displaySSN")
    const displayEmergency = document.getElementById("displayEmergency")

    if (displayName) displayName.textContent = profileData.name || "James Parker"
    if (displayDOB) displayDOB.textContent = formatDate(profileData.dob) || "03/29/2002"
    if (displaySSN) displaySSN.textContent = profileData.ssn || "020329-9845343"
    if (displayEmergency) displayEmergency.textContent = profileData.emergency || "(201)-956-3658"
  }
}

function formatDate(dateString) {
  if (!dateString) return ""
  const date = new Date(dateString)
  return date.toLocaleDateString("en-US", {
    month: "2-digit",
    day: "2-digit",
    year: "numeric",
  })
}

function editProfile() {
  // Create inline edit form
  const profileDisplay = document.getElementById("profileDisplay")
  const currentData = {
    name: document.getElementById("displayName").textContent,
    dob: document.getElementById("displayDOB").textContent,
    ssn: document.getElementById("displaySSN").textContent,
    emergency: document.getElementById("displayEmergency").textContent,
  }

  profileDisplay.innerHTML = `
        <div class="form-group">
            <input type="text" id="editName" value="${currentData.name}" placeholder="Full Name">
        </div>
        <div class="form-group">
            <input type="date" id="editDOB" placeholder="Date of Birth">
        </div>
        <div class="form-group">
            <input type="text" id="editSSN" value="${currentData.ssn}" placeholder="Social Security Number">
        </div>
        <div class="form-group">
            <input type="tel" id="editEmergency" value="${currentData.emergency}" placeholder="Emergency Contact">
        </div>
        <div style="display: flex; gap: 10px; margin-top: 15px;">
            <button onclick="saveProfile()" class="btn-primary" style="flex: 1; padding: 12px; font-size: 14px;">Save</button>
            <button onclick="cancelEdit()" class="btn-secondary" style="flex: 1; padding: 12px; font-size: 14px; border: 1px solid #ddd;">Cancel</button>
        </div>
    `
}

function saveProfile() {
  profileData.name = document.getElementById("editName").value
  profileData.dob = document.getElementById("editDOB").value
  profileData.ssn = document.getElementById("editSSN").value
  profileData.emergency = document.getElementById("editEmergency").value

  localStorage.setItem("profileData", JSON.stringify(profileData))

  // Restore display view
  restoreProfileDisplay()
}

function cancelEdit() {
  restoreProfileDisplay()
}

function restoreProfileDisplay() {
  const profileDisplay = document.getElementById("profileDisplay")
  profileDisplay.innerHTML = `
        <div class="profile-item">
            <span class="profile-label">Name:</span>
            <span class="profile-value" id="displayName">${profileData.name}</span>
        </div>
        <div class="profile-item">
            <span class="profile-label">Date of Birth:</span>
            <span class="profile-value" id="displayDOB">${formatDate(profileData.dob)}</span>
        </div>
        <div class="profile-item">
            <span class="profile-label">SSN:</span>
            <span class="profile-value" id="displaySSN">${profileData.ssn}</span>
        </div>
        <div class="profile-item">
            <span class="profile-label">Emergency Contact:</span>
            <span class="profile-value" id="displayEmergency">${profileData.emergency}</span>
        </div>
    `
}

function toggleNotification(toggle) {
  toggle.classList.toggle("active")

  // Here you could save the notification preferences
  const isActive = toggle.classList.contains("active")
  console.log("Notification toggled:", isActive)
}

// Add some mobile-specific touch handling
document.addEventListener("touchstart", (e) => {
  // Prevent zoom on double tap for buttons
  if (e.target.tagName === "BUTTON") {
    e.preventDefault()
  }
})

// Handle device orientation changes
window.addEventListener("orientationchange", () => {
  setTimeout(() => {
    window.scrollTo(0, 0)
  }, 100)
})

// Global functions for debugging
window.testMapNavigation = () => {
  console.log("Testing map navigation...")
  goToMap()
}

window.testSettingsNavigation = () => {
  console.log("Testing settings navigation...")
  goToSettings()
}
