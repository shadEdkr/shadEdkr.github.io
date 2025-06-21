document.addEventListener("DOMContentLoaded", () => {
  const steps = ["step-1", "step-2", "step-3", "step-4"]
  let currentStep = 0

  function completeStep(stepId) {
    const step = document.getElementById(stepId)
    const circle = step.querySelector("div:nth-child(2)")
    const checkmark = step.querySelector("svg")
    const text = step.querySelector("span")

    circle.className =
      "w-8 h-8 rounded-full border-2 border-blue-500 bg-blue-500 flex items-center justify-center transition-all duration-500"
    checkmark.classList.remove("hidden")
    text.className = "opacity-100 transition-opacity duration-500"
  }

  function processNextStep() {
    if (currentStep < steps.length) {
      completeStep(steps[currentStep])
      currentStep++
      setTimeout(processNextStep, 1000)
    } else {
      setTimeout(() => {
        window.location.href = "hospital-selection.html"
      }, 500)
    }
  }

  processNextStep()
})
