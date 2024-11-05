import './exp_stu.css'
import moment from 'moment'
import { entry } from './entry/entry'

export const expStu = (id, title, expData, stuData) => {
  return `<article id="${id}" class="exp-stu blue2"><h2 class="oculto">${title}</h2><div class="flex exp"><nav><ul class="flex"><li class="active"><a href="#">Experiencia</a></li><li class="not-active"><a href="#">Estudios</a></li></ul></nav>${createEntries(
    expData
  )}</div><div class="flex stu"><nav><ul class="flex"><li class="not-active"><a href="#">Experiencia</a></li><li class="active"><a href="#">Estudios</a></li></ul></nav>${createEntries(
    stuData
  )}</div></article>`
}

// Función que crea las entradas de la experiencia y los estudios
function createEntries(data) {
  let entries = ''

  // Se ordenan las entradas por fecha descendente
  data.sort(
    (data1, data2) =>
      moment(data2.initDate, 'dd/MM/yyyy').toDate() -
      moment(data1.initDate, 'dd/MM/yyyy').toDate()
  )

  data.forEach((elem) => {
    // Almacena el objeto fecha en formato dd/mm/yyyy
    const initDateElem = moment(elem.initDate, 'dd/MM/yyyy').toDate()
    // Almacena la cadena: literal_mes/año_numérico
    const _initDate = `${new Intl.DateTimeFormat('es-ES', {
      month: 'long'
    }).format(initDateElem)}/${initDateElem.getFullYear()}`

    // Almacena el objeto fecha en formato dd/mm/yyyy
    const endDateElem =
      elem.endDate == null ? null : moment(elem.endDate, 'dd/MM/yyyy').toDate()
    // Almacena la cadena: literal_mes/año_numérico
    const _endDate =
      endDateElem == null
        ? null
        : `${new Intl.DateTimeFormat('es-ES', { month: 'long' }).format(
            endDateElem
          )}/${endDateElem.getFullYear()}`

    entries += `${entry(elem.title, elem.desc, _initDate, _endDate)}`
  })

  return entries
}

// Función que añade el evento al alternar entre la experiencia y los estudios
export function addExpStuEvent() {
  const divStu = document.querySelector('.stu')
  divStu.classList.add('oculto')

  document.querySelectorAll('#exp-stu .not-active').forEach((elem) => {
    elem.addEventListener('click', function () {
      divStu.classList.toggle('oculto')
      document.querySelector('.exp').classList.toggle('oculto')
    })
  })
}
