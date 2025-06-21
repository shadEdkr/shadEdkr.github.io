document.addEventListener("DOMContentLoaded", () => {
  // Load data from localStorage
  const patientData = JSON.parse(localStorage.getItem("patientData") || "{}")
  const patientData2 = JSON.parse(localStorage.getItem("patientData2") || "{}")
  const hospitalData = JSON.parse(localStorage.getItem("selectedHospital") || "{}")

  // Populate destination info
  if (hospitalData.name) {
    document.getElementById("destination-name").textContent = hospitalData.name
    document.getElementById("destination-eta").textContent = hospitalData.time || "15 min"
  }

  // Populate patient overview
  if (patientData.gender && patientData.age) {
    document.getElementById("patient-gender-age").textContent = `${patientData.gender}, ${patientData.age}`
  }
  if (patientData.consciousness) {
    document.getElementById("patient-consciousness").textContent = patientData.consciousness
  }
  if (patientData.pupils) {
    document.getElementById("patient-pupils").textContent = patientData.pupils
  }
  if (patientData.skinCondition) {
    document.getElementById("patient-skin").textContent = patientData.skinCondition
  }

  // Populate vital signs
  if (patientData2.heartRate) {
    document.getElementById("vital-heart-rate").textContent = `${patientData2.heartRate} bpm`
  }
  if (patientData2.bloodPressure) {
    document.getElementById("vital-blood-pressure").textContent = `${patientData2.bloodPressure} mmHg`
  }
  if (patientData2.oxygenSaturation) {
    document.getElementById("vital-oxygen").textContent = `${patientData2.oxygenSaturation}%`
  }
  if (patientData.symptoms && patientData.symptoms.length > 0) {
    document.getElementById("vital-symptoms").textContent = patientData.symptoms.join(", ")
  }

  // Populate treatment
  if (patientData2.comments) {
    const treatmentItems = patientData2.comments.split("\n").filter((item) => item.trim() !== "")
    if (treatmentItems.length > 0) {
      const treatmentList = document.getElementById("treatment-list")
      treatmentList.innerHTML = ""
      const ul = document.createElement("ul")
      ul.className = "space-y-2"

      treatmentItems.forEach((item) => {
        const li = document.createElement("li")
        li.className = "flex items-start space-x-2"
        li.innerHTML = `
                    <div class="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span class="text-sm">${item}</span>
                `
        ul.appendChild(li)
      })

      treatmentList.appendChild(ul)
    }
  }

  // Navigate button
  document.getElementById("navigate-btn").addEventListener("click", () => {
    if (hospitalData.location) {
      const encodedAddress = encodeURIComponent(hospitalData.location)
      const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`
      window.open(googleMapsUrl, "_blank")
    }
  })

  // Back to home modal
  const modal = document.getElementById("confirmation-modal")
  const backHomeBtn = document.getElementById("back-home-btn")
  const cancelBtn = document.getElementById("cancel-btn")

  backHomeBtn.addEventListener("click", () => {
    modal.classList.add("active")
  })

  cancelBtn.addEventListener("click", () => {
    modal.classList.remove("active")
  })

  // Close modal when clicking outside
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("active")
    }
  })
})
