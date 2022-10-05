$(document).ready(function(){

    //Hero Slider/

    $('#hero-slider').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        items: 1,
        autoplay:true,
        autoplayTimeout:5000,
        dots:false,
        smartSpeed:1000,
        navText: ['<', '>'],
        responsive:{
            0:{
                nav:false,
            },
            768:{
                nav:true,
            },
            1000:{
                
            }
        }
    })

  //Project Slider//
    $('#project-slider').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        dots:false,
        smartSpeed:1000,
        margin:24,
        responsive:{
            0:{
                items:1,
                nav:false,
                margin:0,
            },
            768:{
                items:2,
            },
            1140:{
                items:2,
                center: true,
            }
        }
    })

    $('#reviews-slider').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots:true,
        items:1,
        smartSpeed: 800,
       
    })
})


