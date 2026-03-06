// script.js

// Smooth Scroll Navigation
const links = document.querySelectorAll('a[href^="#"]');

links.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

// Scroll Animations
const animatedElements = document.querySelectorAll('.animate');

const scrollAnimation = () => {
    const triggerBottom = window.innerHeight * 0.8;

    animatedElements.forEach(element => {
        const boxTop = element.getBoundingClientRect().top;
        if (boxTop < triggerBottom) {
            element.classList.add('show');
        } else {
            element.classList.remove('show');
        }
    });
};

window.addEventListener('scroll', scrollAnimation);

// Active Link Highlighting
const sections = document.querySelectorAll('section');

const highlightLinks = () => {
    let scrollPosition = window.scrollY;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            document.querySelector(`a[href^='#${sectionId}']`).classList.add('active');
        } else {
            document.querySelector(`a[href^='#${sectionId}']`).classList.remove('active');
        }
    });
};

window.addEventListener('scroll', highlightLinks);

// Intersection Observer Functionality
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible');
        }
    });
};

const observer = new IntersectionObserver(observerCallback, observerOptions);

animatedElements.forEach(el => observer.observe(el));