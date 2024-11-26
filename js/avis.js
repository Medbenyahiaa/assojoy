var swiper = new Swiper(`.swiper`, {
    direction: 'horizontal',
    loop: true,
    navigation: {
      nextEl: `.swiper-button-next`,
      prevEl: `.swiper-button-prev`,
    },
    breakpoints: {
  
      768: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      1500: {
        slidesPerView: 1,
        spaceBetween: 30,
  
      },
      500: {
        slidesPerView: 1,
        spaceBetween: 30,
  
      },
  
    }
  
  });