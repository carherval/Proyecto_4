import './about.css'

export const about = (id, title, aboutData) => {
  return `<article id="${id}" class="flex about"><h2>${title}</h2>${createAboutData(
    aboutData
  )}</article>`
}

// Función que crea los datos de la sección
function createAboutData(aboutData) {
  let _aboutData = ''

  aboutData.forEach((elem) => {
    _aboutData += `<p>${elem}</p>`
  })

  return _aboutData
}
