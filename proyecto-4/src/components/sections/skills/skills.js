import './skills.css'
import { skill } from './skill/skill'

export const skills = (id, title, skillsData) => {
  return `<article id="${id}" class="flex skills"><h2>${title}</h2>${createSkillsData(
    skillsData
  )}</article>`
}

// Función que crea los datos de la sección
function createSkillsData(skillsData) {
  let _skillsData = '<ul class="flex">'

  for (const elem of Object.keys(skillsData)) {
    _skillsData += `<li>${skill(
      skillsData[elem].icon,
      skillsData[elem].title
    )}</li>`
  }

  _skillsData += '</ul>'

  return _skillsData
}
