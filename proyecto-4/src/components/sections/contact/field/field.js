import './field.css'

// Check buttons
export const chckBtn = (label, id) => {
  return `<input class="chck-btn" type="checkbox" id="${id}" name="${id}" value="1" /><label for="${id}">${label}</label>`
}

// Campos de texto
// Por defecto, se muestra el label del campo y éste no tiene placeholder
export const txtFld = (label, id, visible = true) => {
  return `<label${
    visible ? '' : ' class="oculto"'
  } for="${id}">${label}</label><input class="txt-fld" type="text" id="${id}" name="${id}"${
    visible ? '' : ' placeholder="' + label + '"'
  } />`
}

// Áreas de texto
// Por defecto, se muestra el label del campo y éste no tiene placeholder
export const txtAreaFld = (label, id, visible = true) => {
  return `<label${
    visible ? '' : ' class="oculto"'
  } for="${id}">${label}</label><textarea class="txt-area-fld" id="${id}" name="${id}"${
    visible ? '' : ' placeholder="' + label + '"'
  }></textarea>`
}

// Botones
// Por defecto, el botón no tiene imagen asociada
export const btn = (type, label, img = null) => {
  return `<button class="flex btn" type="${type}">${
    img == null ? '' : '<img src="' + img + '" alt="' + label + '" />'
  }${label}</button>`
}
