const about = document.querySelector('#about')
const aboutContent = document.querySelector('#about-content')

const contact = document.querySelector('#contact')
const contactContent = document.querySelector('#contact-content')


const skills = document.querySelector('#skills')
const skillsContent = document.querySelector('#skills-content')



about.addEventListener('click', () =>{
   const aboutBox =  new WinBox("About me", {

      background: 'red',
      mount : aboutContent,
          
    });
})

contact.addEventListener('click', () =>{
    const aboutBox =  new WinBox("About me", {
 
       background: 'Green',
       mount :  contactContent,
           
     });
 })


 skills.addEventListener('click', () =>{
    const aboutBox =  new WinBox("About me", {
 
       background: 'grey',
       mount :  skillsContent,
           
     });
 })