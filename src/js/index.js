
let anime = require('./anime.min.js');

// Anime.js Commons Values for SVG Morph
let commonContent = {
  targets: '.content',
  easing: 'cubicBezier(.5, .05, .1, .3)',
  duration: 800,
  loop: false,
};

let contentBoxAnimation = function () {
  anime({
    ...commonContent,
    borderRadius: ['0', '90'],
  });

  if (window.matchMedia('(max-width: 1199px)').matches) {
    anime({
      ...commonContent,
      borderRadius: ['0', '0'],
    })
  };
};


//////////////////////// Morph SVG ////////////////////////////////

let commonPolymorph = {
  targets: '.polymorph',
  easing: 'cubicBezier(.5, .05, .1, .3)',
  duration: 800,
  loop: false,
}

let svgAnimationOpen = function () {
  anime({
    ...commonPolymorph,
    y: [{
      value: '80'
    }],
    x: [{
      value: '10%'
    }],
    rx: [{
      value: '25'
    }],
    ry: [{
      value: '25'
    }],
    width: [{
      value: '80%'
    }],
    fill: '#b66c8d',
  });
}

let svgAnimationClose = function () {
  anime({
    ...commonPolymorph,
    y: [{
      value: '0'
    }],
    x: [{
      value: '0'
    }],
    rx: [{
      value: '0'
    }],
    ry: [{
      value: '0'
    }],
    width: [{
      value: '100%'
    }],
    fill: '#4e0a5c',
  });
}


let btn = [
  document.querySelector('.cta-about'),
  document.querySelector('.cta-skills'),
  document.querySelector('.cta-exp'),
  document.querySelector('.cta-edu'),
  document.querySelector('.cta-portfolio')
];

let btnBack = [
  document.querySelector('.cta-back-about'),
  document.querySelector('.cta-back-skills'),
  document.querySelector('.cta-back-exp'),
  document.querySelector('.cta-back-edu'),
  document.querySelector('.cta-back-portfolio')
];

let btnContent = [
  document.querySelector('.content-about'),
  document.querySelector('.content-skills'),
  document.querySelector('.content-exp'),
  document.querySelector('.content-edu'),
  document.querySelector('.content-portfolio')
];

let wrapCtaRemoveActive = function () {
  document.querySelector('#wrap-cta').classList.remove('active');
}

let wrapCtaAddActive = function () {
  document.querySelector('#wrap-cta').classList.add('active');
}

////////////////////////////// Show content //////////////////////////////

function showContent() {

  for (let i = 0; i < btn.length; i++) {

    btn[i].addEventListener('click', () => {
      
      wrapCtaRemoveActive();
      btnContent[i].classList.remove('remove');
      btnContent[i].classList.add('active');

      document.querySelector('.menu-section').classList.add('remove');
      document.querySelector('.header-section').classList.add('remove');

      svgAnimationOpen();
      contentBoxAnimation();
    });
  }
};

showContent();

////////////////////////////////// Hide content//////////////////////////////////////////

function hideContent() {

  for (let i = 0; i < btnBack.length; i++) {

    btnBack[i].addEventListener('click', () => {

      btnContent[i].classList.remove('active');
      btnContent[i].classList.add('remove');

      wrapCtaAddActive();

      document.querySelector('.menu-section').classList.remove('remove');
      document.querySelector('.header-section').classList.remove('remove');
      
      svgAnimationClose();
    });
  }
};

hideContent();

/////////////////////// SLIDER /////////////////////////////////////////////

/* Индекс слайда по умолчанию */
var slideIndex = 1;
var textIndex = 1;

showSlides(slideIndex);
showText(textIndex);

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
next.onclick = function plusSlide() {
  showSlides(slideIndex += 1);
  showText(textIndex += 1);
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
prev.onclick = function minusSlide() {
  showSlides(slideIndex -= 1);
  showText(textIndex -= 1);
}

/* Основная функция слайдера */
function showSlides(n) {
  var i;
  var slides = document.querySelectorAll(".slider-item");

  if (n > slides.length) {
    slideIndex = 1
  }

  if (n < 1) {
    slideIndex = slides.length
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "flex";
}

function showText(m) {
  var j;
  var text = document.querySelectorAll(".slider-item-text");

  if (m > text.length) {
    textIndex = 1
  }

  if (m < 1) {
    textIndex = text.length
  }

  for (j = 0; j < text.length; j++) {
    text[j].style.display = "none";
  }

  text[textIndex - 1].style.display = "flex";
}