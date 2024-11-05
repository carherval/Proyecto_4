import './style.css'
import {
  header,
  initHeaderStyles,
  initHiddenStyles,
  addHeaderEvent,
  addMobileMenuEvent
} from './src/components/header/header'
import { home } from './src/components/sections/home/home'
import { about } from './src/components/sections/about/about'
import { skills } from './src/components/sections/skills/skills'
import {
  expStu,
  addExpStuEvent
} from './src/components/sections/exp_stu/exp_stu'
import { projects } from './src/components/sections/projects/projects'
import { contact } from './src/components/sections/contact/contact'
import { footer, initFooterStyles } from './src/components/footer/footer'

const name = 'Carlos'
const nameSurname = `${name} Hernández`
const nameSurnames = `${nameSurname} Valero`

const homePage = 'index.html'

// Altura de la cabecera para la transición del scroll vertical
const heightHeader = 8.2
// Altura del pie para la transición del scroll vertical
const heightFooter = 12.8

// Para los estilos responsive
const mediaQuery = window.matchMedia('(max-width: 768px)')

// Navegación de la cabecera
const headerNav = {
  home: { id: 'home', title: 'Inicio' },
  about: { id: 'about', title: 'Sobre mí' },
  skills: { id: 'skills', title: 'Habilidades' },
  expStu: { id: 'exp-stu', title: 'Experiencia&nbsp;/&nbsp;Studios' },
  projects: { id: 'projects', title: 'Proyectos' },
  contact: { id: 'contact', title: 'Contacto' }
}

// Datos de la sección Inicio
const homeData = {
  greeting: 'Hola',
  about: 'Soy Full Stack Developer',
  motto: 'El trabajo en equipo potencia el crecimiento personal',
  img: 'assets/images/perfil.png'
}

// Datos de la sección Sobre mí
// Cada elemento del array es un párrafo
const aboutData = [
  `Me llamo <span class="negrita">${nameSurnames}</span>. Soy <span class="negrita">Analista Programador</span> y <span class="negrita">Full Stack Developer</span>.`,
  'Siempre he creído que para poder crecer de forma individual es muy importante saber trabajar en equipo.'
]

// Datos de la sección Habilidades
const skillsData = {
  html5: { id: 'html5', title: 'HTML 5', icon: 'assets/images/html5.png' },
  css3: { id: 'css3', title: 'CSS 3', icon: 'assets/images/css3.png' },
  js: { id: 'js', title: 'JavaScript', icon: 'assets/images/js.png' },
  java: { id: 'java', title: 'Java', icon: 'assets/images/java.png' },
  vscode: {
    id: 'vscode',
    title: 'Visual Studio Code',
    icon: 'assets/images/vscode.png'
  },
  eclipse: {
    id: 'eclipse',
    title: 'Eclipse',
    icon: 'assets/images/eclipse.png'
  }
}

// Datos de la sección Experiencia
// Formato de las fechas: dd/mm/yyyy
// Una fecha final a null indica que la experiencia sigue en curso
const expData = [
  {
    title:
      'Programador / Analista Programador / Consultor gestor de contenidos',
    desc: 'Creación, actualización, mejora de la funcionalidad y mantenimiento de la Plataforma Web del Imserso bajo Oracle UCM / Oracle Web Center Content',
    initDate: '08/04/2009',
    endDate: '31/01/2023'
  },
  {
    title: 'Analista Programador',
    desc: 'Desarrollo, migración y mantenimiento de la antigua aplicación ASTREA a PLATEA para el Tribunal Económico Administrativo Central en Madrid de la Agencia Tributaria',
    initDate: '05/10/2023',
    endDate: null
  }
]

// Datos de la sección Estudios
// Formato de las fechas: dd/mm/yyyy
// Una fecha final a null indica que el curso sigue en curso
const stuData = [
  {
    title: 'Ingeniería Técnica en Informática de Gestión',
    desc: 'Universidad de Alcalá de Henares / Escuela Técnica Superior de Ingeniería Informática',
    initDate: '01/09/2004',
    endDate: '31/07/2007'
  },
  {
    title: 'Diseño Web y Multimedia',
    desc: 'Fundación Leonardo Murialdo, Azuqueca de Henares (Guadalajara) - SEPECAM',
    initDate: '01/10/2007',
    endDate: '31/03/2008'
  },
  {
    title: 'Máster Java - J2EE - XML',
    desc: 'Academia EXES (Formación Outsourcing), Madrid',
    initDate: '01/03/2008',
    endDate: '31/05/2008'
  },
  {
    title: 'Accesibilidad Web para Programadores y Diseñadores',
    desc: 'Fundación Instituto Ciencias del Hombre (FICH), Madrid',
    initDate: '27/10/2014',
    endDate: '27/11/2014'
  },
  {
    title: 'Rock{TheCode} Desarrollo Web',
    desc: 'ThePowerMBA',
    initDate: '27/09/2023',
    endDate: null
  }
]

// Datos de la sección Proyectos
const projectsData = [
  {
    title: 'Pc-Componentes',
    desc: 'Emulación de la página inicial de Pc-Componentes basándose solamente en el uso de HTML 5 y CSS 3',
    img: 'assets/images/proyecto1.png',
    gitHub: 'https://github.com/carherval/Proyecto_1'
  },
  {
    title: 'Pc-Componentes (JavaScript)',
    desc: 'Implementación con HTML 5, CSS 3 y JavaScript de una página de Pc-Componentes que permita buscar productos mediante unos filtros de búsqueda',
    img: 'assets/images/proyecto2.png',
    gitHub: 'https://github.com/carherval/Proyecto_2'
  },
  {
    title: 'Pinterest (Unsplash)',
    desc: 'Emulación de una página de Pinterest basándose en el uso de HTML 5, CSS 3 y JavaScript asíncrono mediante el API de Unsplash',
    img: 'assets/images/proyecto3.png',
    gitHub: 'https://github.com/carherval/Proyecto_3'
  }
]

// Redes sociales del pie
const rrssNav = [
  {
    rrss: 'LinkedIn',
    icon: 'assets/images/linkedin.png',
    link: 'https://www.linkedin.com/in/carlos-hernandez-valero'
  },
  {
    rrss: 'GitHub',
    icon: 'assets/images/github.png',
    link: 'https://github.com/carherval'
  }
]

addDataPage()

// Función que crea la página del portfolio
function addDataPage() {
  // Título de la página
  document.querySelector('title').innerHtml = `Portfolio de ${nameSurnames}`

  createHeaderTag()
  createMainTag()
  createFooterTag()
}

// Función que crea la cabecera
function createHeaderTag() {
  document.querySelector('header').innerHTML = `${header(
    nameSurname,
    headerNav,
    homePage
  )}`

  initHeaderStyles(heightHeader)
  initHiddenStyles(mediaQuery)
  addHeaderEvent(mediaQuery)
  addMobileMenuEvent()
}

// Función que crea las secciones principales
function createMainTag() {
  const main = document.querySelector('main')

  // Sección Inicio
  main.innerHTML += `${home(
    headerNav.home.id,
    headerNav.home.title,
    homeData.greeting,
    homeData.about,
    homeData.motto,
    homeData.img,
    nameSurnames
  )}`

  // Sección Sobre mí
  main.innerHTML += `${about(
    headerNav.about.id,
    headerNav.about.title,
    aboutData
  )}`

  // Sección Habilidades
  main.innerHTML += `${skills(
    headerNav.skills.id,
    headerNav.skills.title,
    skillsData
  )}`

  // Sección Experiencia / Estudios
  main.innerHTML += `${expStu(
    headerNav.expStu.id,
    headerNav.expStu.title,
    expData,
    stuData
  )}`

  // Sección Proyectos
  main.innerHTML += `${projects(
    headerNav.projects.id,
    headerNav.projects.title,
    projectsData
  )}`

  // Sección Contacto
  main.innerHTML += `${contact(
    headerNav.contact.id,
    headerNav.contact.title,
    skillsData
  )}`

  initMainStyles(heightHeader + heightFooter)
  addExpStuEvent()
}

// Función que inicializa los estilos para la transición del scroll vertical
function initMainStyles(heightMain) {
  document.querySelector(
    'main'
  ).style = `height: calc(100vh - ${heightMain}rem); overflow-y: auto; scroll-behavior: smooth;`
}

// Función que crea el pie
function createFooterTag() {
  document.querySelector('footer').innerHTML = `${footer(nameSurname, rrssNav)}`

  initFooterStyles(heightFooter)
}
