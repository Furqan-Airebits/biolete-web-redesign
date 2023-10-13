$(document).ready(function(){
    $('.home-testimonials-slider').slick({
      slidesToShow: 1,
      fade: true,
      draggable: true,
        autoplay: true,
        autoplaySpeed: 7000,
        arrows: false,
        dots: false,
        speed: 500,
        infinite: true,
        cssEase: 'ease-in-out',
        touchThreshold: 100
    });
  });