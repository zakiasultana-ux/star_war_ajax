import { 
    initPageAnimations, 
    animateCharacterCards, 
    animateLightbox,
    addCardHoverEffects,
    setupScrollAnimations,
    animateStarfield
} from './animations.js';

function initAnimations() {
    // I'm initializing all animations after a short delay
    initPageAnimations();
    setupScrollAnimations();
    animateStarfield();
}

function observeCharacterCards() {
    // I'm watching for character cards to be added to the DOM
    const charactersGrid = document.querySelector('#charactersGrid');
    
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.addedNodes.length > 0) {
                const hasCards = Array.from(mutation.addedNodes).some(function(node) {
                    return node.classList && node.classList.contains('character-card');
                });
                
                if (hasCards) {
                    setTimeout(function() {
                        animateCharacterCards();
                        addCardHoverEffects();
                    }, 50);
                    observer.disconnect();
                }
            }
        });
    });
    
    if (charactersGrid) {
        observer.observe(charactersGrid, { childList: true });
    }
}

function observeLightbox() {
    // I'm watching for lightbox to open
    const lightboxOverlay = document.querySelector('#lightboxOverlay');
    
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            const target = mutation.target;
            if (target.style.display === 'flex') {
                animateLightbox();
            }
        });
    });
    
    if (lightboxOverlay) {
        observer.observe(lightboxOverlay, { 
            attributes: true, 
            attributeFilter: ['style'] 
        });
    }
}

// I'm starting all animation initialization
setTimeout(initAnimations, 100);
observeCharacterCards();
observeLightbox();