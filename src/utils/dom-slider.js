import Slider from './slider';
import elements from './elementsSlider';
const textContent = document.querySelector('#slider-text-content');
const sliderText = document.querySelector('#slider-text');
const sliderTitle = document.querySelector('#slider-title');
const sliderSubtitle = document.querySelector('#slider-subtitles');
const sliderImage = document.querySelector('#slider-image');

const rightArrow = document.querySelector('.right-arrow');
const leftArrow = document.querySelector('.left-arrow ');




let slider = new Slider({
   elements,
   animationFunc: (e) => {
      textContent.classList.add('hide');
      sliderImage.classList.add('hide');
      setTimeout(() => {
         sliderText.innerHTML = e.text;
         sliderTitle.innerHTML = e.title;
         sliderSubtitle.innerHTML = e.subTitle;
         sliderImage.src = e.image;

         textContent.classList.remove('hide');
         sliderImage.classList.remove('hide');
      }, 1000);
   },
   speed: 2000,
});

slider.play();

rightArrow.addEventListener('click',slider.next)
leftArrow.addEventListener('click',slider.prev)