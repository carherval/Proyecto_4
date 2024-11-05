import './home.css'

export const home = (id, title, greeting, about, motto, img, name) => {
  return `<article id="${id}" class="flex home blue2"><h2 class="oculto">${title}</h2><div class="flex saludo"><p>${greeting}</p><p class="negrita">${about}</p><p>${motto}</p></div><img src="${img}" alt="Foto de perfil de ${name}" /></article>`
}
