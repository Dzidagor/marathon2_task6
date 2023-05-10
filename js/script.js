const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 3,
  spaceBetween: 15,
  centeredSlides: true,
  on: {
    slideChange: function () {
      var slides = this.slides;
      for (var i = 0; i < slides.length; i++) {
        slides[i].classList.remove('cars__item_active');
      }
      var activeSlide = this.slides[this.activeIndex];
      activeSlide.classList.add('cars__item_active');
    }
  },
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
});