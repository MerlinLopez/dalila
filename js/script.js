let navbar = document.querySelector(".navbar");

document.querySelector("#menu-btn").onclick = () =>{
    navbar.classList.toggle("active");
}

document.querySelector("#close-navbar").onclick = () =>{
    navbar.classList.remove("active");
}
let searchFrom= document.querySelector(".search-form");

document.querySelector("#search-btn").onclick = () =>{
    searchFrom.classList.toggle("active");
};


window.onscroll = () =>{
navbar.classList.remove("active");
searchFrom.classList.remove("active");
};

let slides = document.querySelectorAll(".home .slide");
let index = 0;

function next(){
    slides[index].classList.remove("active");
    index =(index + 1 ) % slides.length;
    slides[index].classList.add("active");
}

function prev(){
    slides[index].classList.remove("active");
    index =(index -1 + slides.length ) % slides.length;
    slides[index].classList.add("active");
};

var swiper = new swiper(". products-slider", {
    loop: true,
    grabecursor : true,
    spaceBetween: 20,
    navigation: {
        nextE1:  ".swiper-button-next",
        prevE1:  ".swiper-button-prev",
     },
     breakpoints: {
     0:{
        slidesPerView: 1,
     },

     550:{
        slidesPerView: 2,
      
     },
     850: {
        slidesPerView: 3,
     },
     1200: {
        slidesPerView: 4,
        },
     },
   });


 var swiper = new swiper(". arrivals-slider", {
    loop: true,
    grabecursor : true,
    spaceBetween: 20,
    navigation: {
        nextE1:  ".swiper-button-next",
        prevE1:  ".swiper-button-prev",
     },
     breakpoints: {
     0:{
        slidesPerView: 1,
      },
     550:{
        slidesPerView: 2,
      
     },
     850: {
        slidesPerView: 3,
     },
     1200: {
        slidesPerView: 4,
        },
      },
     });

 var swiper = new swiper(".reviews-slider", {
    loop: true,
    grabecursor : true,
    spaceBetween: 20,
   breakpoints: {
     0:{
        slidesPerView: 1,
     },
     768:{
        slidesPerView: 2,
      
      },
     991: {
        slidesPerView: 3,
        },
       },
     });

     var swiper = new swiper(".blogs-slider", {
      loop: true,
      grabecursor : true,
      spaceBetween: 20,
      navigation: {
         nextE1:  ".swiper-button-next",
         prevE1:  ".swiper-button-prev",
      },
      breakpoints: {
         0:{
            slidesPerView: 1,
         },
        650: {
            slidesPerView: 2,
         },
         1200: {
            slidesPerView: 3,
            },
         },
       });



    

