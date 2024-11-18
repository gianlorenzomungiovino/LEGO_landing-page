

// Script header and Navbar
document.addEventListener('DOMContentLoaded', function() {
    const lente = document.querySelector('.lente');
    const inputContenitoreCerca = document.querySelector('.input-contenitore-cerca');
    const iconaX = document.querySelector('.icona-x');
    const overlay = document.querySelector('.overlay');
   
  
    // Nasconde inizialmente l'input
    inputContenitoreCerca.style.display = 'none';
    overlay.style.display = 'none';
  
    // Quando si clicca sulla lente
    lente.addEventListener('click', function() {
      lente.style.display = 'none';
      inputContenitoreCerca.style.display = 'flex';
      overlay.style.display = 'block'; 
    });
  
    // Quando si clicca sulla X 
    iconaX.addEventListener('click', function() {
      inputContenitoreCerca.style.display = 'none';
      lente.style.display = 'block';
      overlay.style.display = 'none'; 

    });
  });


let lastScrollPosition = 0;
const navbar = document.querySelector('.navbar');
const triggerHeight = 120; 

window.addEventListener('scroll', () => {
    const currentScrollPosition = window.scrollY;

    if (currentScrollPosition < triggerHeight) {
        // Rimuovi le classi fixed e hidden se siamo sopra il triggerHeight
        navbar.classList.remove('fixed', 'hidden');
    } else if (currentScrollPosition > lastScrollPosition) {
        // Nascondi la navbar quando si scorre verso il basso
        navbar.classList.add('hidden');
        navbar.classList.remove('fixed');
    } else {
        // Mostra la navbar quando si scorre verso l'alto
        navbar.classList.remove('hidden');
        navbar.classList.add('fixed');
    }

    lastScrollPosition = currentScrollPosition; // Aggiorna la posizione di scorrimento
});

// end script Header and navbar

// script set in evidenza
const moveGaucheButton = document.querySelector(".move-btn");
const moveDroiteButton = document.querySelector(".move-btnright");
const cardCaroselloWrapper = document.querySelector(".featured-items-container");

function moveCarte(distance) {
    cardCaroselloWrapper.scrollBy({
        left: distance,
        behavior: 'smooth' 
    });
}


moveGaucheButton.addEventListener("click", function() {
    moveCarte(-900); 
});

moveDroiteButton.addEventListener("click", function() {
    moveCarte(900); 
});


cardCaroselloWrapper.addEventListener("scroll", function() {
    
    const scrollLeft = cardCaroselloWrapper.scrollLeft;
    const maxScrollLeft = cardCaroselloWrapper.scrollWidth - cardCaroselloWrapper.clientWidth;

    
    moveGaucheButton.style.opacity = scrollLeft > 0 ? 1 : 0.5; 
    moveDroiteButton.style.opacity = scrollLeft < maxScrollLeft ? 1 : 0.5; 
});
// end script set in evidenza
// cosa stanno comprando gli altri
const wtbLeftButton = document.querySelector(".isquerda");
const wtbRightButton = document.querySelector(".derecha");
const sliderWrapper = document.querySelector(".wtb-carosello");

// Define scroll distance
const distance = 300;

// Scroll left button event
wtbLeftButton.addEventListener("click", () => {
    const option = {
        left: -distance,
        behavior: "smooth"
    };
    sliderWrapper.scrollBy(option);
});

// Scroll right button event
wtbRightButton.addEventListener("click", () => {
    const option = {
        left: distance,
        behavior: "smooth"
    };
    sliderWrapper.scrollBy(option);
});

// Scroll event to adjust button opacity
sliderWrapper.addEventListener("scroll", () => {
    const scrollLeft = sliderWrapper.scrollLeft;
    const maxScrollLeft = sliderWrapper.scrollWidth - sliderWrapper.clientWidth;

    // Adjust button opacity based on scroll position
    wtbLeftButton.style.opacity = scrollLeft > 0 ? 1 : 0.5;
    wtbRightButton.style.opacity = scrollLeft < maxScrollLeft ? 1 : 0.5;
});
// end cosa stanno comprando glia altri

// sezione lego dreamZz

const movimentoSinistro = document.getElementById("movimentoSinistro");
const movimentoDestro = document.getElementById("movimentoDestro");
const cardCarosello = document.querySelector(".card");

function moveCards(distance) {
    cardCarosello.scrollBy({
        left: distance,
        behavior: 'smooth' 
    });
}


movimentoSinistro.addEventListener("click", function() {
    moveCards(-900); 
});

movimentoDestro.addEventListener("click", function() {
    moveCards(900); 
});


cardCarosello.addEventListener("scroll", function() {
    
    const scrollLeft = cardCarosello.scrollLeft;
    const maxScrollLeft = cardCarosello.scrollWidth - cardCarosello.clientWidth;

    
    movimentoSinistro.style.opacity = scrollLeft > 0 ? 1 : 0.5; 
    movimentoDestro.style.opacity = scrollLeft < maxScrollLeft ? 1 : 0.5; 
});