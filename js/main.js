
  //image slider
  const slides = document.querySelector(".home-banner-slide").children;
  const prev = document.querySelector(".home-prev");
  const next= document.querySelector(".home-next");
  let index = 0;
  
  prev.addEventListener("click", function(){
    prevSlide();
    resetTimer();
  })
  
  next.addEventListener("click", function(){
    nextSlide();
    resetTimer();
  })
  
  function prevSlide(){
    if(index==0){
      index=slides.length-1;
    }
    else{
      index--;
    }
    changeSlide()
  }
  
  function nextSlide(){
    if(index == slides.length -1){
      index = 0;
    }
    else {
      index++
    }
    changeSlide();
  }
  
  function changeSlide(){
      for (let i = 0; i < slides.length; i++){
        slides[i].classList.remove("slide-active");
      }
    slides[index].classList.add("slide-active");
  }
  
  function resetTimer(){
    clearInterval(timer);
    timer = setInterval(autoPlay, 4000);
  }
  
  function autoPlay(){
    nextSlide();
  }
  
  let timer = setInterval(autoPlay, 4000);
  ;
  
const sliders = document.querySelector(".home-cat-slideshow").children;
const slideTime = 2000;
let firstIndex = 0;

function slideShow(){
  for (let i = 0; i <sliders.length; i++){
  sliders[i].classList.remove("item-active")

  }

  sliders[firstIndex].classList.add("item-active")
  if(firstIndex == sliders.length -1){
    firstIndex = 0
  }else{
    firstIndex++
  }

  setTimeout(() =>{
    slideShow();
  }, slideTime)
}

window.onload = () => {
  slideShow()
}