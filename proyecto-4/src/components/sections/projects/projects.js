import './projects.css'
import { project } from './proj/proj'

export const projects = (id, title, projectsData) => {
  return `<article id="${id}" class="flex projects"><h2>${title}</h2><p>Algunos de mis trabajos...</p><div class="flex">${createProjectsData(
    projectsData
  )}</div></article>`
}

// Función que crea los datos de la sección
function createProjectsData(projectsData) {
  let _projectsData = ''

  projectsData.forEach((elem) => {
    _projectsData += `${project(elem.title, elem.desc, elem.img, elem.gitHub)}`
  })

  return _projectsData
}
