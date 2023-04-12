var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 1,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});




const accordion = document.getElementsByClassName('content-container');
for (i=0; i<accordion.length; i++){
  accordion[i].addEventListener('click', function () {
    this.classList.toggle('active')
  })
}



const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".nav-menu")

hamburger.addEventListener("click", ()=>{
  hamburger.classList.toggle("active")
  navMenu.classList.toggle("active")
})