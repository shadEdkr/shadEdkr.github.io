document.addEventListener("DOMContentLoaded", () => {
  const items = [
    document.getElementById("item1"),
    document.getElementById("item2"),
    document.getElementById("item3"),
    document.getElementById("item4"),
  ]

  let currentItem = 0

  const processNextItem = () => {
    if (currentItem < items.length) {
      items[currentItem].classList.add("completed")
      currentItem++
      setTimeout(processNextItem, 1000)
    } else {
      setTimeout(() => {
        window.location.href = "hospital-selection.html"
      }, 500)
    }
  }

  // Start the animation as soon as the page loads
  processNextItem()
})
