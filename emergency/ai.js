document.addEventListener("DOMContentLoaded", () => {
  const confirmBtn = document.getElementById("confirm-btn")
  const editIcon = document.getElementById("edit-icon")
  const editModal = document.getElementById("edit-modal")
  const closeModal = document.getElementById("close-modal")
  const cancelBtn = document.getElementById("cancel-btn")
  const saveBtn = document.getElementById("save-btn")
  const recommendationText = document.getElementById("recommendation-text")
  const recommendationInput = document.getElementById("recommendation-input")

  // Generate AI recommendation based on patient data
  const generateAIRecommendation = () => {
    const patientDataPt1 = JSON.parse(localStorage.getItem("patientDataPt1"))
    const patientDataPt2 = JSON.parse(localStorage.getItem("patientDataPt2"))

    if (patientDataPt1 && patientDataPt2) {
      // Simple AI logic based on symptoms and vital signs
      const symptoms = patientDataPt1.symptoms ? patientDataPt1.symptoms.toLowerCase() : ""
      const heartRate = patientDataPt2.heartRate ? Number.parseInt(patientDataPt2.heartRate) : 0
      const consciousness = patientDataPt1.consciousness ? Number.parseInt(patientDataPt1.consciousness) : 5

      let recommendation = "MRI" // Default to MRI

      if (symptoms.includes("cardiac") || symptoms.includes("heart") || heartRate > 100) {
        recommendation = "ECG \n Blood Test"
      } else if (symptoms.includes("trauma") || symptoms.includes("fall") || consciousness <= 2) {
        recommendation = "CT Scan \n X-Ray"
      } else if (symptoms.includes("respiratory") || symptoms.includes("dyspnea")) {
        recommendation = "Chest X-Ray /-\n ABG"
      } else if (symptoms.includes("stroke") || symptoms.includes("cva")) {
        recommendation = "CT Scan \n MRI"
      } else if (symptoms.includes("seizure") || symptoms.includes("unconscious")) {
        recommendation = "EEG \n CT Scan"
      }

      return recommendation
    }

    return "MRI" // Default fallback
  }

  // Set initial AI recommendation
  const aiRecommendation = generateAIRecommendation()
  recommendationText.textContent = aiRecommendation
  recommendationInput.value = aiRecommendation

  // Store AI recommendation
  localStorage.setItem("aiRecommendation", aiRecommendation)

  // Confirm button click
  confirmBtn.addEventListener("click", () => {
    // Store the final recommendation
    localStorage.setItem("finalRecommendation", recommendationText.textContent)

    // Navigate to loading page
    window.location.href = "loading.html"
  })

  // Edit icon click
  editIcon.addEventListener("click", () => {
    recommendationInput.value = recommendationText.textContent
    editModal.style.display = "flex"
  })

  // Close modal
  const closeModalHandler = () => {
    editModal.style.display = "none"
  }

  closeModal.addEventListener("click", closeModalHandler)
  cancelBtn.addEventListener("click", closeModalHandler)

  // Click outside modal to close
  editModal.addEventListener("click", (e) => {
    if (e.target === editModal) {
      closeModalHandler()
    }
  })

  // Save recommendation
  saveBtn.addEventListener("click", () => {
    const newRecommendation = recommendationInput.value.trim()
    if (newRecommendation) {
      recommendationText.textContent = newRecommendation
      localStorage.setItem("aiRecommendation", newRecommendation)
    }
    closeModalHandler()
  })
})
