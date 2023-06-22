'use strict';

//создаем класс Slider
class Slider {
 constructor(sliderEl) {
  this.sliderEl = sliderEl; //  элемент слайдера
  this.slides = Array.from(sliderEl.querySelectorAll('.carousel-item')); //  все слайды, сохраняем их в массив
  this.activeIndex = 0; // индекс активного слаяда принимаем 0
 }
 //функция переключения на новій слайд
 nextSlide() {


}
}