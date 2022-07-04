const scrollSpy = new bootstrap.ScrollSpy(document.section, {
  target: '#navbar-example'
})

const firstScrollSpyEl = document.querySelector('[data-bs-spy="scroll"]')
firstScrollSpyEl.addEventListener('activate.bs.scrollspy', () => {
})
const dataSpyList = document.querySelectorAll('[data-bs-spy="scroll"]')
dataSpyList.forEach(dataSpyEl => {
  bootstrap.ScrollSpy.getInstance(dataSpyEl).refresh()
})