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
const savedTheme = localStorage.getItem('theme')

if (savedTheme === 'dark') {
  document.body.classList.add('dark')
}

darkBtn.addEventListener('click', e => {
  e.preventDefault()
  document.body.classList.toggle('dark')

  localStorage.setItem(
    'theme',
    document.body.classList.contains('dark') ? 'dark' : 'light'
  )
})


const langBtn = document.getElementById('langToggle')
let currentLang = localStorage.getItem('lang') || 'es'

function setLanguage(lang) {
  document.querySelectorAll('[data-es]').forEach(el => {
    el.textContent = el.dataset[lang]
  })

  langBtn.textContent = lang === 'es' ? 'EN' : 'ES'
  document.documentElement.lang = lang
  localStorage.setItem('lang', lang)
}

setLanguage(currentLang)

langBtn.addEventListener('click', e => {
  e.preventDefault()
  currentLang = currentLang === 'es' ? 'en' : 'es'
  setLanguage(currentLang)
})
