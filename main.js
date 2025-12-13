const items = document.querySelectorAll('.fade-up')

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible')
    }
  })
})

items.forEach(item => observer.observe(item))


const darkBtn = document.getElementById('darkModeBtn')
const prefersDark = localStorage.getItem('theme')

if (prefersDark === 'dark') {
  document.body.classList.add('dark')
}

darkBtn.addEventListener('click', e => {
  e.preventDefault()
  document.body.classList.toggle('dark')

  if (document.body.classList.contains('dark')) {
    localStorage.setItem('theme', 'dark')
  } else {
    localStorage.setItem('theme', 'light')
  }
})
