import './contact.css'
import { chckBtn, txtFld, txtAreaFld, btn } from './field/field'

export const contact = (id, title, skillsData) => {
  return `<article id="${id}" class="flex contact blue4"><h2 class="oculto">${title}</h2><div class="flex"><p class="negrita">¿Te interesa alguno de estos temas?</p><p class="negrita">Házmelo saber y... <span>hablemos sobre ello</span> ;)</p></div><form class="flex form-contacto" action="#" method="post" onsubmit="javascript:return false"><fieldset class="flex temas"><legend class="oculto">Temas</legend>${createCheckButtons(
    skillsData
  )}</fieldset><fieldset class="flex campos"><legend class="oculto">Formulario de contacto</legend>${txtFld(
    'Introduzca el nombre',
    'nombre',
    false
  )}${txtFld('Introduzca el correo electrónico', 'correo', false)}${txtAreaFld(
    'Introduzca el mensaje',
    'mensaje',
    false
  )}${btn(
    'submit',
    'Enviar',
    'assets/images/submit.png'
  )}</fieldset></form></article>`
}

// Función que crea los check buttons del formulario en base a las habilidades
function createCheckButtons(skillsData) {
  let checkButtons = ''

  for (const elem of Object.keys(skillsData)) {
    checkButtons += `${chckBtn(skillsData[elem].title, skillsData[elem].id)}`
  }

  return checkButtons
}
