const menuBtn = document.querySelector('.hamburger__btn');
const btnText = menuBtn.querySelector('.btn-text'); // Targets the text element
const mobileNav = document.getElementById('navbar');
let menuOpen = false;

menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
        menuBtn.classList.add('close');
        btnText.innerText = 'CLOSE'; // Changes text to Close
        menuOpen = true;
        mobileNav.style.display = 'flex';
        mobileNav.classList.add('active');

    } else {
        menuBtn.classList.remove('close');
        btnText.innerText = 'Menu';  // Changes text back to Menu
        menuOpen = false;
        mobileNav.style.display = 'flex'; 
        mobileNav.classList.remove('active');
    }
});



// const menuBtn = document.querySelector('.hamburger__btn');
// const mobileNav = document.getElementById('navbar');
// let menuOpen = false;

// menuBtn.addEventListener('click', () => {
//   if (!menuOpen) {
//     menuBtn.classList.add('close');
//     menuOpen = true;
//     mobileNav.style.display = 'flex';
//     mobileNav.classList.add('active');
    
//    }else {
//     menuBtn.classList.remove('close');
//     menuOpen = false;
//     mobileNav.style.display = 'flex';
//     mobileNav.classList.remove('active');
//    }
// })
// ;