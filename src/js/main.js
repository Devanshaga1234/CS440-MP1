let currentSlide = 0;
let slides = [];
let totalSlides = 0;
let carouselTrack = null;

document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeCarousel();
    initializeModal();
    // initializeScrollEffects();
    // initializeSocialLinks();
    initializeFacilityCards();
    initializeMusicControl();
});

// function initializeSocialLinks() {
//     const socialLinks = document.querySelectorAll('.social-link');
//     socialLinks.forEach(link => {
//         link.addEventListener('click', function(e) {
//             console.log('Social link clicked:', this.href);
//         });
//     });
// }

function initializeFacilityCards() {
    const facilityCards = document.querySelectorAll('.service-card[data-modal]');
    facilityCards.forEach(card => {
        card.addEventListener('click', function() {
            const modalId = this.getAttribute('data-modal');
            openModal(modalId);
        });
    });
}

function initializeNavigation() {
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            
            if (targetId && targetId.startsWith('#')) {
                e.preventDefault();
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    const offsetTop = targetSection.offsetTop - 80;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset;
        
        if (scrollTop > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        updateActiveNavLink();
    });
}

function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    const navbarHeight = document.getElementById('navbar').offsetHeight;
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - navbarHeight - 50;
        const sectionHeight = section.offsetHeight;
        const scrollTop = window.pageYOffset;
        
        if (scrollTop >= sectionTop && scrollTop < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });
    
    const documentHeight = document.documentElement.scrollHeight;
    const windowHeight = window.innerHeight;
    const scrollTop = window.pageYOffset;
    
    if (scrollTop + windowHeight >= documentHeight - 100) {
        currentSection = 'contact';
    }
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

function initializeCarousel() {
    slides = document.querySelectorAll('.carousel-slide');
    totalSlides = slides.length;
    carouselTrack = document.getElementById('carousel-track');
    
    console.log(`Carousel initialized: ${totalSlides} slides found`);
    
    if (slides.length === 0) return;
    
    updateCarousel();
    updateDots();
    
    addCarouselEventListeners();
    
    setInterval(() => {
        changeSlide(1);
    }, 6000);
    
    // addTouchSupport();
}

function addCarouselEventListeners() {
    const prevBtn = document.querySelector('.carousel-btn.prev');
    const nextBtn = document.querySelector('.carousel-btn.next');
    
    if (prevBtn) {
        prevBtn.addEventListener('click', () => changeSlide(-1));
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', () => changeSlide(1));
    }
    
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => goToSlide(index));
    });
}

function changeSlide(direction) {
    const previousSlide = currentSlide;
    currentSlide += direction;
    
    if (currentSlide >= totalSlides) {
        currentSlide = 0;
    } else if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    }
    
    console.log(`Carousel: ${previousSlide} → ${currentSlide} (direction: ${direction}, totalSlides: ${totalSlides})`);
    
    updateCarousel();
    updateDots();
}

function goToSlide(index) {
    currentSlide = index;
    updateCarousel();
    updateDots();
}

function updateCarousel() {
    if (!carouselTrack) return;
    
    const translateX = -currentSlide * 100;
    carouselTrack.setAttribute('data-translate', translateX);
    console.log(`UpdateCarousel: slide ${currentSlide}, translateX: ${translateX}%`);
    
    slides.forEach((slide, index) => {
        slide.classList.remove('active', 'prev-slide', 'next-slide');
        
        if (index === currentSlide) {
            slide.classList.add('active');
        } else {
            const prevIndex = currentSlide === 0 ? totalSlides - 1 : currentSlide - 1;
            const nextIndex = currentSlide === totalSlides - 1 ? 0 : currentSlide + 1;
            
            if (index === prevIndex) {
                slide.classList.add('prev-slide');
            } else if (index === nextIndex) {
                slide.classList.add('next-slide');
            }
        }
    });
}

function updateDots() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        dot.classList.remove('active');
        if (index === currentSlide) {
            dot.classList.add('active');
        }
    });
}

// function addTouchSupport() {
//     let startX = 0;
//     let endX = 0;
//     let isDragging = false;
//     
//     carouselTrack.addEventListener('touchstart', (e) => {
//         startX = e.touches[0].clientX;
//         isDragging = true;
//     });
//     
//     carouselTrack.addEventListener('touchmove', (e) => {
//         if (isDragging) {
//             e.preventDefault();
//         }
//     });
//     
//     carouselTrack.addEventListener('touchend', (e) => {
//         if (isDragging) {
//             endX = e.changedTouches[0].clientX;
//             handleSwipe();
//             isDragging = false;
//         }
//     });
//     
//     carouselTrack.addEventListener('mousedown', (e) => {
//         startX = e.clientX;
//         isDragging = true;
//         e.preventDefault();
//     });
//     
//     carouselTrack.addEventListener('mousemove', (e) => {
//         if (isDragging) {
//             e.preventDefault();
//         }
//     });
//     
//     carouselTrack.addEventListener('mouseup', (e) => {
//         if (isDragging) {
//             endX = e.clientX;
//             handleSwipe();
//             isDragging = false;
//         }
//     });
//     
//     carouselTrack.addEventListener('mouseleave', () => {
//         isDragging = false;
//     });
//     
//     function handleSwipe() {
//         const swipeThreshold = 50;
//         const diff = startX - endX;
//         
//         if (Math.abs(diff) > swipeThreshold) {
//             if (diff > 0) {
//                 changeSlide(1);
//             } else {
//                 changeSlide(-1);
//             }
//         }
//     }
// }

function initializeModal() {
    const closeBtns = document.querySelectorAll('.close');
    closeBtns.forEach(closeBtn => {
        closeBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            const modalId = this.getAttribute('data-modal');
            closeModal(modalId);
        });
    });
    
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('modal')) {
            const modalId = e.target.getAttribute('id');
            closeModal(modalId);
        }
    });
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            const openModal = document.querySelector('.modal.show');
            if (openModal) {
                const modalId = openModal.getAttribute('id');
                closeModal(modalId);
            }
        }
    });
}

function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        document.body.classList.add('body-no-scroll');
        modal.classList.add('show');
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('show');
        document.body.classList.remove('body-no-scroll');
    }
}

// function initializeScrollEffects() {
//     const observerOptions = {
//         threshold: 0.1,
//         rootMargin: '0px 0px -50px 0px'
//     };
//     
//     const observer = new IntersectionObserver(function(entries) {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 entry.target.classList.remove('animate-out');
//                 entry.target.classList.add('animate-in');
//             }
//         });
//     }, observerOptions);
//     
//     const animatedElements = document.querySelectorAll('.service-card, .about-content, .contact-content');
//     animatedElements.forEach(el => {
//         el.classList.add('animate-out');
//         observer.observe(el);
//     });
// }

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

const debouncedScrollHandler = debounce(function() {
    updateActiveNavLink();
}, 10);

window.addEventListener('scroll', debouncedScrollHandler);


function initializeMusicControl() {
    const musicToggle = document.getElementById('music-toggle');
    const backgroundMusic = document.getElementById('background-music');
    
    if (!musicToggle || !backgroundMusic) return;
    
    backgroundMusic.volume = 0.01;
    
    musicToggle.addEventListener('click', function() {
        if (backgroundMusic.paused) {
            backgroundMusic.play();
            musicToggle.classList.add('playing');
        } else {
            backgroundMusic.pause();
            musicToggle.classList.remove('playing');
        }
    });
}
