
  

// CHANGE 1: Switched to DOMContentLoaded so the slider starts immediately 
// without waiting for heavy wedding images to finish downloading.
document.addEventListener("DOMContentLoaded", () => {
  
  const sliders = document.querySelector('.home-quote').children;
  const slideTime = 2500;
  let firstIndex = 0;

  function slideShow(){
    // CHANGE 2: Added a safety check. If the HTML hasn't loaded yet,
    // stop the function to prevent browser console errors.
    if (!sliders || sliders.length === 0) return;

    for (let i = 0; i < sliders.length; i++){
      sliders[i].classList.remove('home-item-active');
    }
    
    sliders[firstIndex].classList.add('home-item-active');
    
    if (firstIndex == sliders.length - 1){
      firstIndex = 0;
    } else {
      firstIndex++;
    }
    
    setTimeout(() => {
      slideShow();
    }, slideTime);
  }

  // CHANGE 3: Run the function immediately now that the DOM is ready.
  slideShow();
});

  
// const Newsliders = document.querySelector(".cat-slideshow-left").children;
// const NewslideTime = 4300;
// let NewfirstIndex = 0;

// function NewslideShow(){
//   for (let i = 0; i <Newsliders.length; i++){
//     Newsliders[i].classList.remove("cat-item-active")

//   }

//   Newsliders[NewfirstIndex].classList.add("cat-item-active")
//   if(NewfirstIndex == Newsliders.length -1){
//     NewfirstIndex = 0
//   }else{
//     NewfirstIndex++
//   }

//   setTimeout(() =>{
//     NewslideShow();
//   }, NewslideTime)
// }

// window.onload = () => {
//   slideShow()
//   NewslideShow()
// }

  
// const Newsssliders = document.querySelector(".home-quote").children;
// const NewssslideTime = 4500;
// let NewfffirstIndex = 0;

// function NewssslideShow(){
//   for (let i = 0; i <Newsssliders.length; i++){
//     Newsssliders[i].classList.remove("home-item-active")

//   }

//   Newsssliders[NewfffirstIndex].classList.add("home-item-active")
//   if(NewfffirstIndex == Newsssliders.length -1){
//     NewfffirstIndex = 0
//   }else{
//     NewfffirstIndex++
//   }

//   setTimeout(() =>{
//     NewssslideShow();
//   }, NewssslideTime)
// }

// window.onload = () => {
//   slideShow()
//   NewssslideShow()
// }

