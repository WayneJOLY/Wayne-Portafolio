

const skillsTech=document.getElementById('skills-tech')
let html=''
const skills = [
    {
      path: './src/skills/javascript.svg',
      name: 'javascript',
    },
    {
      path: './src/skills/html.svg',
      name: 'HTML',
    },
    {
      path: './src/skills/css.svg',
      name: 'CSS',
    },
    {
      path: './src/skills/react.svg',
      name: 'React',
    },
    {
      path: './src/skills/icons8-bootstrap-96.png',
      name: 'Bootstrap',
    },
    {
      path: './src/skills/icons8-toupet.svg',
      name: 'Sass',
    },
    {
      path: './src/skills/icons8-c.svg',
      name: 'C',
    },
     {
      path: './src/skills/icons8-c++-96.svg',
      name: 'C++',
    },
    {
      path: './src/skills/icons8-c-sharp-logo.svg',
      name: 'C#',
    },
    {
      path: './src/skills/icons8-visual-basic-96.png',
      name: 'Vba Exel',
    },
    {
      path: './src/skills/git.svg',
      name: 'Git',
    },
     {
      path: './src/skills/github.svg',
      name: 'Github',
    },
    {
      path: './src/skills/icons8-visual-studio.svg',
      name: 'Visual Studio',
    },
    {
      path: './src/skills/vsc.svg',
      name: 'VS Code',
    },
  ]

  

for (const skill of skills) {
    
    html+=`
    <div class="skill">         
                    <div class="skill-img"><img src="${skill.path}" alt="${skill.name}"></div>
                    <div class="skill-text"><h3>${skill.name}</h3></div>
    </div>
    `
  }
  
  
skillsTech.innerHTML=html
console.log(skillsTech.innerHTML=html)

const nav=document.querySelector('.nav')
const showMenu=document.getElementById('btn-menu')
showMenu.addEventListener('click',()=>{
  nav.classList.toggle('show_menu') 
})


const btnClose=document.getElementById('btn-close')
btnClose.addEventListener('click',()=>{
  nav.classList.remove('show_menu') 
})