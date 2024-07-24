// document.querySelectorAll('.portraits-gallery img').forEach(box =>{
//   box.onclick = () =>{
//     document.querySelector('.popup-image').style.display = 'flex';
//     document.querySelector('.popup-image img').src = box.getAttribute('src');
    
//   }
// })

// document.querySelector('.popup-image span').onclick = () => {
//   document.querySelector('.popup-image').style.display = 'none';
// }
   
const gallery = document.querySelectorAll('.portraits-gallery .row'),
popupBox = document.querySelector(".popup-image"),
previewImg = popupBox.querySelector('img'),
closeImg = popupBox.querySelector('span')

window.onload = () => {
  for (let i = 0; i < gallery.length; i++){
    let newIndex = i;
    let clickImgIndex
    gallery[i].onclick = ()=> {
      clickImgIndex = newIndex;
      console.log(i);
      function preview(){
        let selectedImgUrl = gallery[newIndex].querySelector("img").src;
        console.log(selectedImgUrl);
        previewImg.src = selectedImgUrl;
      }

      const prevBtn = document.querySelector('.prev')
      const nextBtn = document.querySelector('.next')
      if (newIndex == 0){
        prevBtn.style.display = 'none'

      }
      if (newIndex >= gallery.length - 1){
        nextBtn.style.display = 'none'

      }
      prevBtn.onclick =()=> {
        newIndex--;
        if (newIndex == 0){
          preview();
        prevBtn.style.display = 'none'
          
        } else{
          preview();
          nextBtn.style.display = 'block'

        };
      }
      nextBtn.onclick =()=> {
        newIndex++;
        if (newIndex >= gallery.length - 1){
          preview();
          nextBtn.style.display = 'none'
        } else{
          preview();
          prevBtn.style.display = 'block'
          
        };
      }

      preview()
      popupBox.style.display = 'flex'

      closeImg.onclick = ()=>{
        newIndex = clickImgIndex;
        prevBtn.style.display = 'block'
        nextBtn.style.display = 'block'
        popupBox.style.display = 'none'
      }
    }  
  }
}