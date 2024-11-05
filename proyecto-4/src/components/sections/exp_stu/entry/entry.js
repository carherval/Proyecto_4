import './entry.css'

export const entry = (title, desc, initDate, endDate) => {
  return `<div class="flex entry"><p class="negrita">${title} <span class="fecha">(${initDate} - ${
    endDate != null ? endDate : '<span class="act">actualmente</span>'
  })</span></p><p>${desc}</p></div>`
}
