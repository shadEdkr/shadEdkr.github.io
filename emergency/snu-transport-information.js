document.addEventListener("DOMContentLoaded", () => {
  const patientDataPt1 = JSON.parse(localStorage.getItem("patientDataPt1"))
  const patientDataPt2 = JSON.parse(localStorage.getItem("patientDataPt2"))

  // Set hospital-specific information
  const hospitalInfo = {
    name: "Seoul National University Hospital",
    time: "12 min",
    address: "101 Daehak-ro, Jongno-gu, Seoul",
  }

  if (patientDataPt1) {
    const gender = patientDataPt1.gender.charAt(0).toUpperCase() + patientDataPt1.gender.slice(1)
    const genderAgeElement = document.getElementById("overview-gender-age")
    const consciousnessElement = document.getElementById("overview-consciousness")
    const pupilsElement = document.getElementById("overview-pupils")
    const skinElement = document.getElementById("overview-skin")
    const symptomsElement = document.getElementById("vitals-symptoms")

    if (genderAgeElement) genderAgeElement.textContent = `${gender}, ${patientDataPt1.age}`
    if (consciousnessElement) consciousnessElement.textContent = patientDataPt1.consciousness
    if (pupilsElement) pupilsElement.textContent = patientDataPt1.pupils
    if (skinElement) skinElement.textContent = patientDataPt1.skinCondition
    if (symptomsElement) symptomsElement.textContent = patientDataPt1.symptoms
  }

  if (patientDataPt2) {
    const hrElement = document.getElementById("vitals-hr")
    const bpElement = document.getElementById("vitals-bp")
    const o2Element = document.getElementById("vitals-o2")

    if (hrElement) hrElement.textContent = `${patientDataPt2.heartRate} bpm`
    if (bpElement) bpElement.textContent = `${patientDataPt2.bloodPressure} mmHg`
    if (o2Element) o2Element.textContent = `${patientDataPt2.oxygenSaturation}%`

    const treatmentList = document.getElementById("treatment-list")
    if (treatmentList) {
      treatmentList.innerHTML = ""
      const treatments = patientDataPt2.comments.split("\\n")
      treatments.forEach((treatment) => {
        if (treatment.trim() !== "") {
          const li = document.createElement("li")
          li.textContent = treatment.trim()
          treatmentList.appendChild(li)
        }
      })
    }
  }

  const backToHomeTrigger = document.getElementById("back-to-home-trigger")
  const confirmationModal = document.getElementById("confirmation-modal")
  const cancelButton = document.querySelector(".btn-cancel")
  const navigateButton = document.querySelector(".btn-navigate")

  if (backToHomeTrigger) {
    backToHomeTrigger.addEventListener("click", () => {
      confirmationModal.style.display = "flex"
    })
  }

  if (cancelButton) {
    cancelButton.addEventListener("click", () => {
      confirmationModal.style.display = "none"
    })
  }

  if (confirmationModal) {
    confirmationModal.addEventListener("click", (e) => {
      if (e.target === confirmationModal) {
        confirmationModal.style.display = "none"
      }
    })
  }

  if (navigateButton) {
    navigateButton.addEventListener("click", (e) => {
      e.preventDefault()
      const encodedAddress = encodeURIComponent(hospitalInfo.address)
      const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`
      window.open(googleMapsUrl, "_blank")
    })
  }
})
