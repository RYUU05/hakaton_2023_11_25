let slideIndex = 0;

function moveSlide(step) {
    const slides = document.querySelectorAll('.team-member');
    const totalSlides = slides.length;
    slideIndex = (slideIndex + step + totalSlides) % totalSlides;
    const slideWidth = slides[0].getBoundingClientRect().width;
    const slideContainer = document.querySelector('.slide');
    slideContainer.style.transform = 'translateX(' + (-slideIndex * slideWidth) + 'px)';
}

document.querySelector('.prev-arrow').addEventListener('click', () => moveSlide(-1));
document.querySelector('.next-arrow').addEventListener('click', () => moveSlide(1));
