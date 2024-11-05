import './header.css'

export const header = (name, headerNav, homePage) => {
  return `<h1>${name}</h1><nav>${createHeaderNav(
    headerNav,
    homePage
  )}</nav><a class="flex abrir" href="#" title="Abrir menú"><img src="assets/images/menu.png" alt="Abrir menú" /></a><a class="flex cerrar" href="#" title="Cerrar menú"><img src="assets/images/cerrar.png" alt="Cerrar menú" /></a>`
}

// Función que crea la navegación de la cabecera
function createHeaderNav(headerNav, homePage) {
  let _headerNav = '<ul class="flex">'

  for (const elem of Object.keys(headerNav)) {
    _headerNav += `<li class="flex"><a href="${homePage}#${headerNav[elem].id}">${headerNav[elem].title}</a></li>`
  }

  _headerNav += '</ul>'

  return _headerNav
}

// Función que inicializa los estilos de la cabecera
export function initHeaderStyles(heightHeader) {
  const header = document.querySelector('header')

  header.classList.add('flex', 'cabecera')
  header.style = `height: ${heightHeader}rem;`
}

// Función que inicializa los elementos ocultos
export function initHiddenStyles(mediaQuery) {
  mediaQuery.matches
    ? document.querySelector('.cabecera > nav').classList.add('movil', 'oculto')
    : document.querySelector('.abrir').classList.add('oculto')

  document.querySelector('.cerrar').classList.add('oculto')
}

// Función que añade el evento al cambiar el tamaño de la pantalla
export function addHeaderEvent(mediaQuery) {
  mediaQuery.addEventListener('change', function () {
    initHiddenStyles(mediaQuery)

    mediaQuery.matches
      ? document.querySelector('.abrir').classList.remove('oculto')
      : document.querySelector('.cabecera > nav').removeAttribute('class')

    const h1 = document.querySelector('h1')
    if (h1.hasAttribute('class')) {
      h1.removeAttribute('class')
    }
  })
}

// Función que añade el evento al abrir o cerrar el menú desplegable de la cabecera
export function addMobileMenuEvent() {
  document.querySelectorAll('.abrir, .cerrar').forEach((elem) => {
    elem.addEventListener('click', function () {
      document.querySelector('.abrir').classList.toggle('oculto')
      document.querySelector('.cerrar').classList.toggle('oculto')
      document.querySelector('.movil').classList.toggle('oculto')

      const h1 = document.querySelector('h1')
      h1.hasAttribute('class')
        ? h1.removeAttribute('class')
        : h1.classList.add('oculto')
    })
  })
}
