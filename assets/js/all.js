"use strict";

$(function () {
  console.log('Hello Bootstrap5');
}); // swiper

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 30
    }
  }
}); // vanillajs-datepicker

var elem = document.querySelector('input[name="datepicker"]');
var datepicker = new Datepicker(elem, {
  nextArrow: '>',
  prevArrow: '<',
  buttonClass: 'btn primary'
});
//# sourceMappingURL=all.js.map
