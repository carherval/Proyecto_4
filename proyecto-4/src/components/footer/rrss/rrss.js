import './rrss.css'

export const rrss = (rrss, icon, link) => {
  return `<a class="flex rrss" href="${link}" title="${rrss}. Abre nueva ventana" target="_blank"><img src="${icon}" alt="${rrss}" /></a>`
}
