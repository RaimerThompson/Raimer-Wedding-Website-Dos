const faqs = document.querySelectorAll('.faq-div');

faqs.forEach(faq =>{
  faq.addEventListener("click", ()=>{
    faq.classList.toggle("faq-active")
  })
})

document.addEventListener('scroll', () =>{
  const header = document.querySelector('header');

if (window.scrollY > 592) {
  header.classList.add('scrolled');
} else{
  header.classList.remove('scrolled')
}
})

const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')

const sendEmail = (e) =>{
  e.preventDefault()

   // serviceID - templateID - #form - publicKey 
  emailjs.sendForm('service_kmv559q', 'template_xnu3zqy', '#contact-form', 'Vs4d0AsUtYr3Zbvh_')
    .then(() =>{
  //show sent message 
    contactMessage.textContent = 'Thanks for submitting!✅'

  //remove message after 2 seconds
  setTimeout(() => {
    contactMessage.textContent = ''
  }, 2000);

  //clear input fields
  contactForm.reset()
  }, () =>{
    //show error message
    contactMessage.textContent = 'Sorry, message was not recieved ❌'
  })
}



