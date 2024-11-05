import './footer.css'
import { rrss } from './rrss/rrss'

export const footer = (name, rrssNav) => {
  return `<p>&#169; Diseñado y creado por <span class="negrita">${name}</span></p><nav>${createRrssNav(
    rrssNav
  )}</nav>`
}

// Función que crea la navegación de las redes sociales del pie
function createRrssNav(rrssNav) {
  let _rrssNav = '<ul class="flex">'

  rrssNav.forEach((elem) => {
    _rrssNav += `<li>${rrss(elem.rrss, elem.icon, elem.link)}</li>`
  })

  _rrssNav += '</ul>'

  return _rrssNav
}

// Función que inicializa los estilos del pie
export function initFooterStyles(heightFooter) {
  const footer = document.querySelector('footer')

  footer.classList.add('flex', 'pie')
  footer.style = `height: ${heightFooter}rem;`
}
