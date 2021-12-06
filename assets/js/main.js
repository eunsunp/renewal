/* navbar scroll animate */
  $(window).scroll(function() {
  if ($(document).scrollTop() > 100) {
    $('nav').addClass('animate');
  } else {
    $('nav').removeClass('animate');
  }
});


/* main-bg swiper */
var swiper = new Swiper(".mySwiper", {
    // autoplay: {
    // delay: 2500,
    // disableOnInteraction: false,
    // },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    grabCursor: true,
    effect: 'fade',
  });

  var swiper = new Swiper(".mySwiper-02", {
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: true,
    },
  });

  AOS.init();
