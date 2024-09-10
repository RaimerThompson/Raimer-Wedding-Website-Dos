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