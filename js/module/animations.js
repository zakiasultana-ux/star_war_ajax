// GSAP Animation Module

export function initPageAnimations() {
    // I'm initializing all GSAP animations for the page
    
    // Hero section fade in
    gsap.from('.hero-content', {
        opacity: 0,
        y: 50,
        duration: 1.2,
        ease: 'power3.out',
        delay: 0.3
    });
    
    // Logo animation
    gsap.from('.logo', {
        opacity: 0,
        scale: 0.8,
        duration: 1,
        ease: 'back.out(1.7)'
    });
    
    // Navigation links stagger
    gsap.from('nav ul li', {
        opacity: 0,
        x: -30,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power2.out',
        delay: 0.5
    });
}

export function animateCharacterCards() {
    // I'm animating character cards when they appear
    gsap.from('.character-card', {
        opacity: 0,
        scale: 0.8,
        y: 30,
        duration: 0.6,
        stagger: 0.1,
        ease: 'back.out(1.7)',
        clearProps: 'all'
    });
}

export function animateLightbox() {
    // I'm animating the lightbox opening
    const lightbox = document.querySelector('.lightbox-content');
    
    gsap.fromTo(lightbox,
        {
            opacity: 0,
            scale: 0.8,
            y: 50
        },
        {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.5,
            ease: 'back.out(1.7)'
        }
    );
}

export function addCardHoverEffects() {
    // I'm adding hover effects to character cards
    const cards = document.querySelectorAll('.character-card');
    
    function handleMouseEnter(event) {
        gsap.to(event.currentTarget, {
            scale: 1.05,
            y: -10,
            duration: 0.3,
            ease: 'power2.out'
        });
    }
    
    function handleMouseLeave(event) {
        gsap.to(event.currentTarget, {
            scale: 1,
            y: 0,
            duration: 0.3,
            ease: 'power2.out'
        });
    }
    
    cards.forEach(function(card) {
        card.addEventListener('mouseenter', handleMouseEnter);
        card.addEventListener('mouseleave', handleMouseLeave);
    });
}

export function setupScrollAnimations() {
    // I'm setting up scroll-triggered animations
    gsap.registerPlugin(ScrollTrigger);
    
    gsap.from('.gallery-section h2', {
        scrollTrigger: {
            trigger: '.gallery-section',
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power2.out'
    });
    
    gsap.from('.footer-section', {
        scrollTrigger: {
            trigger: 'footer',
            start: 'top 90%',
            toggleActions: 'play none none none'
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out'
    });
}

export function animateStarfield() {
    // I'm creating a subtle starfield parallax effect
    const starfield = document.querySelector('.starfield');
    
    if (starfield) {
        gsap.to(starfield, {
            backgroundPositionY: '100px',
            duration: 60,
            ease: 'none',
            repeat: -1
        });
    }
}