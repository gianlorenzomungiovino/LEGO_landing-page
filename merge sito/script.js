

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
const moveLeftButton = document.getElementById("move-left");
const moveRightButton = document.getElementById("move-right");
const cardCaroselloWrapper = document.querySelector(".featured-items-container");

function moveCards(distance) {
    cardCaroselloWrapper.scrollBy({
        left: distance,
        behavior: 'smooth' 
    });
}


moveLeftButton.addEventListener("click", function() {
    moveCards(-900); 
});

moveRightButton.addEventListener("click", function() {
    moveCards(900); 
});


cardCaroselloWrapper.addEventListener("scroll", function() {
    
    const scrollLeft = cardCaroselloWrapper.scrollLeft;
    const maxScrollLeft = cardCaroselloWrapper.scrollWidth - cardCaroselloWrapper.clientWidth;

    
    moveLeftButton.style.opacity = scrollLeft > 0 ? 1 : 0.5; 
    moveRightButton.style.opacity = scrollLeft < maxScrollLeft ? 1 : 0.5; 
});
// end script set in evidenza