import './proj.css'

export const project = (title, desc, img, gitHub) => {
  return `<article class="flex project"><img src="${img}" alt="${title}" /><h3>${title}</h3><p>${desc}</p><a href="${gitHub}" title="Abre nueva ventana" target="_blank">Ver ${title}</a></article>`
}
