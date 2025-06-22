document.addEventListener("DOMContentLoaded", () => {
  const hospitalItems = document.querySelectorAll(".hospital-item")
  const confirmButton = document.querySelector(".btn-confirm")

  hospitalItems.forEach((item) => {
    item.addEventListener("click", () => {
      const isSelected = item.classList.contains("selected")

      // Deselect all items
      hospitalItems.forEach((i) => i.classList.remove("selected"))

      // If the clicked item wasn't already selected, select it
      if (!isSelected) {
        item.classList.add("selected")
      }

      // Enable or disable the confirm button
      const anySelected = document.querySelector(".hospital-item.selected") !== null
      confirmButton.disabled = !anySelected
    })
  })

  confirmButton.addEventListener("click", () => {
    const selectedItem = document.querySelector(".hospital-item.selected")
    if (selectedItem) {
      const selectedHospital = {
        name: selectedItem.dataset.name,
        time: selectedItem.dataset.time,
        location: selectedItem.dataset.location,
        capability: selectedItem.dataset.capability,
        availability: selectedItem.dataset.availability,
      }

      localStorage.setItem("selectedHospital", JSON.stringify(selectedHospital))

      // Navigate to different transport information pages based on selected hospital
      const hospitalName = selectedItem.dataset.name

      if (hospitalName === "Seoul National University Hospital") {
        window.location.href = "snu-transport-information.html"
      } else if (hospitalName === "Severance Hospital") {
        window.location.href = "severance-transport-information.html"
      } else if (hospitalName === "The Dream Hospital") {
        window.location.href = "dreamhospital-transport-information.html"
      } else {
        // Fallback to original transport information page
        window.location.href = "transport-information.html"
      }
    }
  })
})
