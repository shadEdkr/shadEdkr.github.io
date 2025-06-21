document.addEventListener("DOMContentLoaded", () => {
  const heartRateInput = document.getElementById("heart-rate")
  const bloodPressureInput = document.getElementById("blood-pressure")
  const oxygenSaturationInput = document.getElementById("oxygen-saturation")
  const commentsInput = document.getElementById("comments")
  const submitBtn = document.getElementById("submit-btn")

  const fields = [heartRateInput, bloodPressureInput, oxygenSaturationInput, commentsInput]

  function checkFormCompletion() {
    const allFilled = fields.every((field) => field.value.trim() !== "")
    submitBtn.disabled = !allFilled
  }

  fields.forEach((field) => {
    field.addEventListener("input", checkFormCompletion)
  })

  submitBtn.addEventListener("click", function () {
    if (!this.disabled) {
      const patientData2 = {
        heartRate: heartRateInput.value,
        bloodPressure: bloodPressureInput.value,
        oxygenSaturation: oxygenSaturationInput.value,
        comments: commentsInput.value,
      }
      localStorage.setItem("patientData2", JSON.stringify(patientData2))
      window.location.href = "loading.html"
    }
  })

  checkFormCompletion()
})
