document.addEventListener("DOMContentLoaded", () => {
  const symptoms = [
    "Airway Obstruction",
    "Allergic Reaction",
    "Altered Level of Consciousness",
    "Behavioral/Violent",
    "Bleeding/Hemorrhage",
    "Burns",
    "Cardiac Arrest",
    "Cardiac (MI, Angina, CHF)",
    "CVA/TIA",
    "Diabetic",
    "Dizziness/Vertigo",
    "Dyspnea",
    "Electrocution",
    "Environmental Exposure",
    "Eye Problem",
    "Fall",
    "GI Problem",
    "GU Problem",
    "Headache",
    "Major Trauma",
    "Medical Device Problem",
    "MVC/MVA",
    "OB/GYN",
    "OD/Poisoning/Drug Abuse",
    "Pain (Non-specified)",
    "Respiratory Arrest",
    "Seizure",
    "Syncope/Near Syncope",
    "Unconscious/Unresponsive",
    "Other",
    "Obvious Death",
  ]

  let selectedSymptoms = []
  let selectedConsciousness = ""

  // Elements
  const ageSelect = document.getElementById("age")
  const genderSelect = document.getElementById("gender")
  const symptomsTrigger = document.getElementById("symptoms-trigger")
  const symptomsModal = document.getElementById("symptoms-modal")
  const closeModal = document.getElementById("close-modal")
  const clearSymptoms = document.getElementById("clear-symptoms")
  const symptomSearch = document.getElementById("symptom-search")
  const symptomsList = document.getElementById("symptoms-list")
  const pupilsSelect = document.getElementById("pupils")
  const skinConditionSelect = document.getElementById("skin-condition")
  const nextBtn = document.getElementById("next-btn")
  const consciousnessButtons = document.querySelectorAll(".consciousness-btn")

  // Initialize symptoms list
  function initSymptomsList() {
    symptomsList.innerHTML = ""
    symptoms.forEach((symptom) => {
      const div = document.createElement("div")
      div.className = "flex items-center space-x-3 py-2"
      div.innerHTML = `
                <input type="checkbox" id="symptom-${symptom}" value="${symptom}" class="w-4 h-4 text-blue-600 rounded">
                <label for="symptom-${symptom}" class="text-sm cursor-pointer flex-1">${symptom}</label>
            `
      symptomsList.appendChild(div)

      const checkbox = div.querySelector("input")
      checkbox.addEventListener("change", function () {
        if (this.checked) {
          selectedSymptoms.push(this.value)
        } else {
          selectedSymptoms = selectedSymptoms.filter((s) => s !== this.value)
        }
        updateSymptomsDisplay()
        checkFormCompletion()
      })
    })
  }

  // Update symptoms display
  function updateSymptomsDisplay() {
    const trigger = symptomsTrigger.querySelector("span")
    if (selectedSymptoms.length > 0) {
      trigger.textContent = selectedSymptoms.join(", ")
      trigger.className = "text-black"
    } else {
      trigger.textContent = "Primary Symptom(s)"
      trigger.className = "text-gray-500"
    }
  }

  // Search symptoms
  symptomSearch.addEventListener("input", function () {
    const searchTerm = this.value.toLowerCase()
    const symptomItems = symptomsList.querySelectorAll("div")

    symptomItems.forEach((item) => {
      const label = item.querySelector("label")
      if (label.textContent.toLowerCase().includes(searchTerm)) {
        item.style.display = "flex"
      } else {
        item.style.display = "none"
      }
    })
  })

  // Modal controls
  symptomsTrigger.addEventListener("click", () => {
    symptomsModal.classList.add("active")
  })

  closeModal.addEventListener("click", () => {
    symptomsModal.classList.remove("active")
  })

  clearSymptoms.addEventListener("click", () => {
    selectedSymptoms = []
    const checkboxes = symptomsList.querySelectorAll('input[type="checkbox"]')
    checkboxes.forEach((cb) => (cb.checked = false))
    updateSymptomsDisplay()
    checkFormCompletion()
  })

  // Consciousness buttons
  consciousnessButtons.forEach((btn) => {
    btn.addEventListener("click", function () {
      consciousnessButtons.forEach((b) => {
        b.className =
          "consciousness-btn w-12 h-12 rounded-xl font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
      })
      this.className = "consciousness-btn w-12 h-12 rounded-xl font-medium bg-blue-500 text-white transition-colors"
      selectedConsciousness = this.dataset.level
      checkFormCompletion()
    })
  })

  // Form validation
  function checkFormCompletion() {
    const isComplete =
      ageSelect.value &&
      genderSelect.value &&
      selectedSymptoms.length > 0 &&
      selectedConsciousness &&
      pupilsSelect.value &&
      skinConditionSelect.value

    nextBtn.disabled = !isComplete
  }
  // Event listeners for form fields
  ;[ageSelect, genderSelect, pupilsSelect, skinConditionSelect].forEach((field) => {
    field.addEventListener("change", checkFormCompletion)
  })

  // Next button
  nextBtn.addEventListener("click", function () {
    if (!this.disabled) {
      const patientData = {
        age: ageSelect.value,
        gender: genderSelect.value,
        symptoms: selectedSymptoms,
        consciousness: selectedConsciousness,
        pupils: pupilsSelect.value,
        skinCondition: skinConditionSelect.value,
      }
      localStorage.setItem("patientData", JSON.stringify(patientData))
      window.location.href = "patient-details-2.html"
    }
  })

  // Initialize
  initSymptomsList()
  checkFormCompletion()
})
