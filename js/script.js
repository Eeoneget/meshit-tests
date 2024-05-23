const modal = document.querySelector('.modal');
const closeModalBtn = document.querySelector('.close-modal');
const openModalBtn = document.querySelector('.hero_blue-last');
const overlay = document.querySelector('.overlay');

const openModal = () => {
      modal.classList.remove('none');
      overlay.classList.remove('none');
}

const closeModal = () => {
      modal.classList.add('none');
      overlay.classList.add('none');
}

openModalBtn.addEventListener('click', openModal);

closeModalBtn.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && !modal.classList.contains('none')) {
            closeModal();
      }
})
let currentIndex = 0;
const slides = document.querySelectorAll('.slider-card');
const totalSlides = slides.length;
const autoSlideInterval = 1500; 


document.querySelector('.prev-btn').addEventListener('click', function() {
    changeSlide(currentIndex - 1);
    resetInterval();
});

document.querySelector('.next-btn').addEventListener('click', function() {
    changeSlide(currentIndex + 1);
    resetInterval();
});

function updateSlidePosition() {
    const sliderWrapper = document.querySelector('.slider-wrapper');
    sliderWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function changeSlide(newIndex) {
    currentIndex = newIndex;
    if (currentIndex < 0) {
        currentIndex = totalSlides - 1;
    } else if (currentIndex >= totalSlides) {
        currentIndex = 0;
    }
    updateSlidePosition();
}

function autoSlide() {
    changeSlide(currentIndex + 1);
}

let slideInterval = setInterval(autoSlide, autoSlideInterval);

function resetInterval() {
    clearInterval(slideInterval);
    slideInterval = setInterval(autoSlide, autoSlideInterval);
}