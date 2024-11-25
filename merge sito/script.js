// /Sezione della lente
document.addEventListener("DOMContentLoaded", function () {
  const lente = document.querySelector(".lente");
  const inputContenitoreCerca = document.querySelector(
    ".input-contenitore-cerca"
  );
  // const inputLente = document.querySelector("lenteuno icona-cerca");
  const iconaX = document.querySelector(".icona-x");
  const overlay = document.querySelector(".overlay");

  // Nasconde inizialmente l'input
  inputContenitoreCerca.style.display = "none";
  overlay.style.display = "none";

  // Quando si clicca sulla lente
  lente.addEventListener("click", function () {
    lente.style.display = "none";
    inputContenitoreCerca.style.display = "flex";
    overlay.style.display = "block";
    document.body.classList.add("no-scroll");
  });

  // Quando si clicca sulla X
  iconaX.addEventListener("click", function () {
    inputContenitoreCerca.style.display = "none";
    lente.style.display = "block";
    overlay.style.display = "none";
    document.body.classList.remove("no-scroll");
  });

  // // Quando si clicca sul campo di input, preveniamo lo scroll verso l'alto
  // inputContenitoreCerca.addEventListener("focus", function (event) {
  //   event.preventDefault(); // Preveniamo il comportamento predefinito
  //   // Scrolla in modo controllato per non causare il movimento verso l'alto
  //   inputContenitoreCerca.scrollIntoView({
  //     behavior: "smooth",
  //     block: "center",
  //   });
  // });
});

//fINE SEZIONE LENTE

//Inizio sezione dissolvenza

let lastScrollPosition = 0;
const navbar = document.querySelector(".navbar-bottom");
console.log(navbar);

const triggerHeight = 1;
// const triggerHeight = 126;

window.addEventListener("scroll", () => {
  const currentScrollPosition = window.scrollY;

  if (currentScrollPosition < triggerHeight) {
    // Rimuovi le classi fixed e hidden se siamo sopra il triggerHeight
    navbar.classList.remove("fixed", "hidden");
  } else if (currentScrollPosition > lastScrollPosition) {
    // Nascondi la navbar quando si scorre verso il basso
    navbar.classList.add("hidden");
    //navbar.classList.remove('fixed');
  } else {
    // Mostra la navbar quando si scorre verso l'alto
    navbar.classList.remove("hidden");
    navbar.classList.add("fixed");
    //Portare il correnscroll = 0 e disattivare il fixed solo in quel caso
  }

  lastScrollPosition = currentScrollPosition; // Aggiorna la posizione di scorrimento
});

//Fine sezione dissolvenza

// end script Header and navbar

// script set in evidenza
const moveGaucheButton = document.querySelector(".move-btn");
const moveDroiteButton = document.querySelector(".move-btnright");
const cardCaroselloWrapper = document.querySelector(
  ".featured-items-container"
);

function moveCarte(distance) {
  cardCaroselloWrapper.scrollBy({
    left: distance,
    behavior: "smooth",
  });
}

moveGaucheButton.addEventListener("click", function () {
  moveCarte(-900);
});

moveDroiteButton.addEventListener("click", function () {
  moveCarte(900);
});

cardCaroselloWrapper.addEventListener("scroll", function () {
  const scrollLeft = cardCaroselloWrapper.scrollLeft;
  const maxScrollLeft =
    cardCaroselloWrapper.scrollWidth - cardCaroselloWrapper.clientWidth;

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
    behavior: "smooth",
  };
  sliderWrapper.scrollBy(option);
});

// Scroll right button event
wtbRightButton.addEventListener("click", () => {
  const option = {
    left: distance,
    behavior: "smooth",
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
    behavior: "smooth",
  });
}

movimentoSinistro.addEventListener("click", function () {
  moveCards(-900);
});

movimentoDestro.addEventListener("click", function () {
  moveCards(900);
});

cardCarosello.addEventListener("scroll", function () {
  const scrollLeft = cardCarosello.scrollLeft;
  const maxScrollLeft = cardCarosello.scrollWidth - cardCarosello.clientWidth;

  movimentoSinistro.style.opacity = scrollLeft > 0 ? 1 : 0.5;
  movimentoDestro.style.opacity = scrollLeft < maxScrollLeft ? 1 : 0.5;
});

const navbarTop = document.querySelector(".navbar-top");
const removeX = document.querySelector(".remove-x");

removeX.addEventListener("click", (event) => {
  navbarTop.style.display = "none";
  event.preventDefault();
});

// hamburger menu a comparsa

document.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".hm-menu-container");

  const openMenuButton = document.querySelector(".icon-hamburger");
  const closeMenuButton = document.querySelector("#x-close");
  const header = document.querySelector("header");
  const preferiti = document.querySelector(".preferiti");
  const set = document.querySelector(".set");
  const wtbSection = document.querySelector(".wtb-section");
  const dream = document.querySelector(".dream");
  const builtByYou = document.querySelector("#built-by-you");
  const sectionInEvidenza = document.querySelector(".section-in-evidenza");
  const welcometo = document.querySelector(".welcometo");
  const footer = document.querySelector("footer");

  // Apri il menu
  openMenuButton.addEventListener("click", () => {
    menu.style.display = "block";

    header.style.display = "none";
    preferiti.style.display = "none";
    set.style.display = "none";
    wtbSection.style.display = "none";
    dream.style.display = "none";
    builtByYou.style.display = "none";
    sectionInEvidenza.style.display = "none";
    welcometo.style.display = "none";
    footer.style.display = "none";
  });

  // Chiudi il menu
  closeMenuButton.addEventListener("click", () => {
    menu.style.display = "none";

    header.style.display = "block";
    preferiti.style.display = "block";
    set.style.display = "block";
    wtbSection.style.display = "block";
    dream.style.display = "block";
    builtByYou.style.display = "block";
    sectionInEvidenza.style.display = "block";
    welcometo.style.display = "block";
    footer.style.display = "block";
  });
});

// Leggi Tutto
document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("toggle-button");
  const moreText = document.getElementById("more-text");

  // Funzione per controllare la larghezza della finestra
  function checkWindowSize() {
    if (window.innerWidth <= 400) {
      moreText.classList.add("hidden");  // Nasconde il testo in eccesso su schermi piccoli
      toggleButton.style.display = "inline";  // Mostra il bottone
    } else {
      moreText.classList.remove("hidden");  // Mostra il testo in eccesso su schermi più larghi
      
    }
  }

  toggleButton.addEventListener("click", function (event) {
    event.preventDefault(); 

    if (moreText.classList.contains("hidden")) {
      moreText.classList.remove("hidden");
      toggleButton.textContent = "Leggi Meno";
    } else {
      moreText.classList.add("hidden");
      toggleButton.textContent = "Leggi Tutto";
    }
  });

  // Controlla la larghezza della finestra al caricamento e al ridimensionamento
  checkWindowSize();
  window.addEventListener("resize", checkWindowSize);
});