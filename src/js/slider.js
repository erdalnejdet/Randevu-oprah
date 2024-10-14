const services = new Swiper(".services-slider", {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  navigation: {
    nextEl: '',
    prevEl: '',
  },
  pagination: {
    el: ".services-slider-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1280: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
  },
});

const psikolog = new Swiper(".psikolog-slider", {
  slidesPerView: 1,
  spaceBetween: 32,
  loop: true,
  navigation: {
    nextEl: '',
    prevEl: '',
  },
  pagination: {
    el: ".psikolog-slider-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1280: {
      slidesPerView: 3,
      spaceBetween: 32,
    },
  },
});

const blog = new Swiper(".blog-slider", {
  slidesPerView: 1,
  spaceBetween: 32,
  loop: true,
  navigation: {
    nextEl: '.next',
    prevEl: '.prev',
  },
  pagination: {
    el: ".blog-slider-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1280: {
      slidesPerView: 3,
      spaceBetween: 32,
    },
  },
});