let body = document.querySelector('body');

const swiper = new Swiper('.swiper', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // обработчик смены слайда
  on: {
    slideChange: function () {
      let index = swiper.activeIndex; // получаем текущий слайд (от 0 и выше)

      // Сравниваем индекс и задаём фон в зависимости от него
      if (index === 0) {
        body.style.background = 'linear-gradient(105.54deg, #F4A764 -2.93%, #FFDEC2 72.14%)';
      } else if (index === 1) {
        body.style.background = 'linear-gradient(105.54deg, #ADB0B0 -2.93%, #E1E1E1 72.14%)';
      } else if (index === 2) {
        body.style.background = 'linear-gradient(105.54deg, #30A357 -2.93%, #75E39A 72.14%)';
      } else {
        // если слайдов больше — можно задать фон по умолчанию
        body.style.background = 'linear-gradient(to right, #000, #333)';
      }
    }
  }
});
