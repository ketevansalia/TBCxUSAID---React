// SCROLL NAVBAR
document.addEventListener('scroll', () => {
  const header = document.querySelector('.header');
  if (window.scrollY > 0) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// PARTNERS SLIDER

const slides = document.querySelectorAll('.slide');
let slideIndex = 0;
let intervalId = null;

document.addEventListener('DOMContentLoaded', initializeSlider);
function initializeSlider() {
  if (slides.length > 0) {
    slides[slideIndex].classList.add('displaySlide');
    intervalId = setInterval(nextSlide, 5000);
  }
}
function showSlide(index) {
  if (index >= slides.length) {
    slideIndex = 0;
  } else if (index < 0) {
    slideIndex = slides.length - 1;
  }

  slides.forEach(slide => {
    slide.classList.remove('displaySlide');
  });
  slides[slideIndex].classList.add('displaySlide');
}

function prevSlide() {
  clearInterval(intervalId);
  slideIndex--;
  showSlide(slideIndex);
}

function nextSlide() {
  slideIndex++;
  showSlide(slideIndex);
}
// slide for dots
function dotSlide(index) {
  clearInterval(intervalId);
  slideIndex = index;
  showSlide(slideIndex);
}

// FAQ
const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
  faq.addEventListener('click', () => {
    faq.classList.toggle('active');
  });
});

// CURRENT YEAR
const yearEl = document.querySelector('.year');
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

//MOBILE NAVIGATION

const btnNavEl = document.querySelector('.btn-mobile-nav');
const headerEl = document.querySelector('.header');

btnNavEl.addEventListener('click', function () {
  headerEl.classList.toggle('nav-open');
});

// RULES

const rules = document.querySelector('.section-rules');
const overlay = document.querySelector('.overlay');
const btnCloseRules = document.querySelectorAll('.close');
const btnsOpenRules = document.querySelectorAll('.rules');

const closeRules = function () {
  rules.classList.add('hidden');
  overlay.classList.add('hidden');
};
const openRules = function () {
  rules.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let i = 0; i < btnsOpenRules.length; i++)
  btnsOpenRules[i].addEventListener('click', openRules);

for (let i = 0; i < btnCloseRules.length; i++) {
  btnCloseRules[i].addEventListener('click', closeRules);
}

overlay.addEventListener('click', closeRules);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !rules.classList.contains('hidden')) {
    closeRules();
  }
});
