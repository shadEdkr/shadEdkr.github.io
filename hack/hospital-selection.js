document.addEventListener("DOMContentLoaded", () => {
  const hospitalItems = document.querySelectorAll(".hospital-item")
  const confirmBtn = document.getElementById("confirm-btn")
  let selectedHospital = null

  hospitalItems.forEach((item) => {
    item.addEventListener("click", function () {
      const isSelected = this.classList.contains("selected")

      // Deselect all items
      hospitalItems.forEach((i) => {
        i.classList.remove("selected")
        i.className = "hospital-item p-4 rounded-xl cursor-pointer transition-colors bg-gray-100 hover:bg-gray-200"
        const details = i.querySelector(".hospital-details")
        const arrow = i.querySelector("svg")
        details.classList.add("hidden")
        arrow.style.transform = "rotate(0deg)"
      })

      // If the clicked item wasn't already selected, select it
      if (!isSelected) {
        this.classList.add("selected")
        this.className = "hospital-item selected p-4 rounded-xl cursor-pointer transition-colors bg-blue-500 text-white"
        const details = this.querySelector(".hospital-details")
        const arrow = this.querySelector("svg")
        details.classList.remove("hidden")
        arrow.style.transform = "rotate(180deg)"

        selectedHospital = {
          id: this.dataset.id,
          name: this.dataset.name,
          time: this.dataset.time,
          location: this.dataset.location,
          capability: this.dataset.capability,
          availability: this.dataset.availability,
        }
      } else {
        selectedHospital = null
      }

      confirmBtn.disabled = !selectedHospital
    })
  })

  confirmBtn.addEventListener("click", () => {
    if (selectedHospital) {
      localStorage.setItem("selectedHospital", JSON.stringify(selectedHospital))
      window.location.href = "transport-info.html"
    }
  })
})
