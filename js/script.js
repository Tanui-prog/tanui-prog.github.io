//menu
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle("active")
};

// control selection active link
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');


// sticky bar

window.onscroll = () => {
  sections.forEach(sec =>{
    let top = window.scrollY;
    let offset  = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');
    if( top >= offset && top < offset + height){
    navLinks.forEach(links =>{
      links.classList.remove('active');
      document.querySelector('header nav a[href*=' + id + ']').classList.add('active')

});
};
  })

    let header = document.querySelector('.header');
    
    header.classList.toggle('sticky',window.scrollY > 100);

  menuIcon.classList.remove('bx-x');
  navbar.classList.remove("active")
    };


    
    
    
    
    const nextBtn = document.querySelector('.swiper-button-next');
    const prevBtn = document.querySelector('.swiper-button-prev');
     nextBtn.addEventListener('click', () => {
      swiper.slideNext();
    });
     prevBtn.addEventListener('click', () => {
      swiper.slidePrev();
    });
    
    //swiper slider
       
    const pagination = document.querySelector('.swiper-pagination');
     pagination.addEventListener('click', (event) => {
      if (event.target.classList.contains('swiper-pagination-bullet')) {
        const index = event.target.getAttribute('data-swiper-slide-index');
        swiper.slideTo(index);
       }
    });

    
    // swiper
    var swiper = new Swiper(".mySwiper",{
      slidesPerView: 1,
      spaceBetween: 50,
      loop:true,
      grabCursor:true,
      pagination: {
        el:".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextE1: ".swiper-button-next",
        prev1: ".swiper-button-prev",
      }
    });


// darkmode  light mode
let darkModeIcon = document.querySelector('#darkMode-icon');

darkModeIcon.onclick = ()=> {
  darkModeIcon.classList.toggle('bx-sun');
  document.body.classList.toggle('dark-mode');
};


// scroll reveal
ScrollReveal({ 
  reset: true,
  distance:'80px',
  duration:2000,
  delay:200
 });


 ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });

  ScrollReveal().reveal('.home-img img, .services-container .portfolio-box , .testimonial-wrapper , .contact form',{ origin: 'bottom' });

  