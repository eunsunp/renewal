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

const spleft = document.querySelector(".spleft");
const spright = document.querySelector(".spright");
const container = document.querySelector(".container");

spleft.addEventListener("mouseenter", () => {
  container.classList.add("hover-left");
});

spleft.addEventListener("mouseleave", () => {
  container.classList.remove("hover-left");
});

spright.addEventListener("mouseenter", () => {
  container.classList.add("hover-right");
});

spright.addEventListener("mouseleave", () => {
  container.classList.remove("hover-right");
});
