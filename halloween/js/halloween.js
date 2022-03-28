
//function for search button to appear and disappear when icon is click
let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
}


//function for when menu icon is click to make the nav links appear
let navbar = document.querySelector('.navbar');
 
document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');    
}

//scroll spy
let section = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('.header .navbar a');


window.onscroll = () =>{
    searchForm.classList.remove('active');
    navbar.classList.remove('active');

    if(window.scrollY > 0 ){
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');
    }
    section.forEach(sec =>{
        let top =window.scrollY;
        let offset =sec.offsetTop -200;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navlinks.forEach(link =>{
                link.classList.remove('active');
                document.querySelector('.header .navbar a[href*='+id+']').classList.add('active');
            });
        };
    });
}

window.onload = () =>{
    if(window.scrollY > 0 ){
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');
    }
}

//for slider
var swiper = new Swiper(".home-slider",{
    spaceBetween: 20,
    effect:"fade",
    loop:true,
    navigation: {
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev",
    },
    centeredSlides: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction:false,
    },
});

//for product slider
var swiper = new Swiper(".products-slider", {
    spaceBetween: 20,
    loop:true,
    centeredSlides: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction:false,
    },
    grabCursor:true,
    breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 3,
        },
    },
});


