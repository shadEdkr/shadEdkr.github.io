document.addEventListener("DOMContentLoaded", () => {
  const heartRateInput = document.getElementById("heart-rate")
  const bloodPressureInput = document.getElementById("blood-pressure")
  const oxygenSaturationInput = document.getElementById("oxygen-saturation")
  const commentsInput = document.getElementById("comments")
  const submitButton = document.querySelector(".btn-submit")

  const fields = [heartRateInput, bloodPressureInput, oxygenSaturationInput, commentsInput]

  const checkFormCompletion = () => {
    const allFilled = fields.every((field) => field.value.trim() !== "")
    submitButton.disabled = !allFilled
  }

  fields.forEach((field) => {
    field.addEventListener("input", checkFormCompletion)
  })

  submitButton.addEventListener("click", () => {
    if (!submitButton.disabled) {
      const patientData = {
        heartRate: heartRateInput.value,
        bloodPressure: bloodPressureInput.value,
        oxygenSaturation: oxygenSaturationInput.value,
        comments: commentsInput.value,
      }
      localStorage.setItem("patientDataPt2", JSON.stringify(patientData))

      // Navigate to AI recommendation page
      window.location.href = "ai.html"
    }
  })

  checkFormCompletion()
})
