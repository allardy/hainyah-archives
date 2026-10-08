// The mockup's pages are drawings: an order has nowhere to go. Rather than let « Construire » or « Attaquer » do nothing, say so.
;(() => {
  let note
  const tell = () => {
    if (!note) {
      note = document.createElement('div')
      note.className = 'maquette-note'
      note.setAttribute('role', 'status')
      document.body.appendChild(note)
    }
    note.textContent = "Maquette : les ordres ne sont pas envoyés. Utilisez le menu pour visiter les autres écrans."
    note.classList.add('visible')
    clearTimeout(note.timer)
    note.timer = setTimeout(() => note.classList.remove('visible'), 3500)
  }
  document.addEventListener('submit', (e) => {
    e.preventDefault()
    tell()
  })
  document.addEventListener('click', (e) => {
    const target = e.target.closest('button, input[type=submit], input[type=button], input[type=image], a:not([href])')
    if (target && !target.closest('.menu')) {
      e.preventDefault()
      tell()
    }
  })
})()
