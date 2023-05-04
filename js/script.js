//--Show Menu
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

if(navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu')
  })
}

if(navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu')
  })
}

//--Remove Menu Mobile 
const navLink = document.querySelectorAll('.nav-link');

const linkAction = () => {
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

//--Change Background Header
const blurHeader = () => {
  const header = document.getElementById('header')
  this.scrollY >= 50 ? header.classList.add('blur-header')
                    : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)

//--Email JS
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
  e.preventDefault()

  //serviceID - templateID - #form - publicKey
  emailjs.sendForm('service_4hhm2p8', 'template_11i2q1b', '#contact-form', 'fB3-Ojglgg4yoKDV_')
    .then(() => {
       //Show sent message
        contactMessage.textContent = 'Message sent successfuly ✅' 

      //Remove message after five seconds
        setTimeout(() => {
          contactMessage.textContent = ''
        }, 5000)

      //Clear input fields
        contactForm.reset()
    }, () => {
      //Show error message
      contactMessage.textContent = 'Message not sent (service error) ❌'
    })
}
contactForm.addEventListener('submit', sendEmail)

//--Show Scroll Up
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')

    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

//--Scroll Section Active Link
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('.nav-menu a[href*=' + sectionId + ']')

      if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active-link')

      }else{
            sectionsClass.classList.remove('active-link')

      }
    })
}
window.addEventListener('scroll', scrollActive)

//--ScrollReveal Animation
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
  reset: true //повторение анимации
})

sr.reveal('.home-data, .home-social, .contact-container')
sr.reveal('.home-image', {origin: 'bottom'})
sr.reveal('.about-data, .skills-data', {origin: 'left'})
sr.reveal('.about-image, .skills-content', {origin: 'right'})
sr.reveal('.services-card, .projects-card, .footer-container', {interval: 100})