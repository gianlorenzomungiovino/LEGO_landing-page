// /Sezione della lente
document.addEventListener("DOMContentLoaded", function () {
  const lente = document.querySelector(".lente");
  const ContenitoreCerca = document.querySelector(".input-contenitore-cerca");
  // const inputLente = document.querySelector(".lenteuno.icona.cerca");

  const iconaX = document.querySelector(".icona-x");
  const overlay = document.querySelector(".overlay");

  // Nasconde inizialmente l'input
  ContenitoreCerca.style.display = "none";
  overlay.style.display = "none";

  // Quando si clicca sulla lente
  lente.addEventListener("click", function () {
    lente.style.display = "none";
    ContenitoreCerca.style.display = "flex";
    overlay.style.display = "block";
    // inputLente.focus();
    document.body.classList.add("no-scroll");
  });

  // Quando si clicca sulla X
  iconaX.addEventListener("click", function () {
    ContenitoreCerca.style.display = "none";
    lente.style.display = "block";
    overlay.style.display = "none";
    document.body.classList.remove("no-scroll");
  });
});

//fINE SEZIONE LENTE

//Inizio sezione dissolvenza

let lastScrollPosition = 0;
const navbar = document.querySelector(".navbar-bottom");

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

  const overlay = document.querySelector(".overlay");

  const openMenuButton = document.querySelector(".icon-hamburger");
  const closeMenuButton = document.querySelector("#x-close");

  let scrollPosition = 0;
  const navbarHeight = 3.2;

  // Apri il menu
  openMenuButton.addEventListener("click", (event) => {
    overlay.style.display = "block";

    if (window.scrollY !== 0) {
      scrollPosition =
        window.scrollY +
        navbarHeight *
          parseFloat(getComputedStyle(document.documentElement).fontSize); // Converti in px;
      // document.body.style.position = "fixed";
      document.body.style.top = `-${scrollPosition}px`; // Imposta il top per mantenere la posizione
      document.body.style.width = "100%";
    }

    menu.style.display = "block";

    document.body.classList.add("no-scroll");
    event.preventDefault();
  });

  // Chiudi il menu

  closeMenuButton.addEventListener("click", () => {
    overlay.style.display = "none";
    console.log(scrollPosition);

    // document.body.style.position = ""; // Rimuove il blocco
    document.body.style.top = "";
    if (window.scrollY === 0) {
      window.scrollTo(0, 0); // Se siamo al top della pagina torniamo al top
    } else {
      window.scrollTo(0, scrollPosition);
    }

    menu.style.display = "none";

    document.body.classList.remove("no-scroll");
  });

  // closeMenuButton.addEventListener("click", () => {
  //   overlay.style.display = "none";
  //   console.log(scrollPosition);

  //   document.body.style.position = ""; // Rimuove il blocco
  //   document.body.style.top = "";

  //   window.scrollTo(0, scrollPosition);

  //   menu.style.display = "none";
  //   document.body.classList.remove("no-scroll");
  // });
});

// Leggi Tutto

const toggleButton = document.getElementById("toggle-button");
const moreText = document.getElementById("more-text");


toggleButton.addEventListener("click", (event) => {
  event.preventDefault();

  const mostraTesto = moreText.classList.contains("hidden");
  if (mostraTesto) {
    moreText.classList.remove("hidden");
    toggleButton.textContent = "Leggi Meno";
  } else {
    moreText.classList.add("hidden");
    toggleButton.textContent = "Leggi Tutto";
  }
});

// footer
// chi siamo tendina
const secondoContenitore = document.querySelector(".secondo-contenitore");
const secondoContenitoreLista = document.querySelector(
  ".secondo-contenitore-lista"
);

secondoContenitore.addEventListener("click", () => {
  if (secondoContenitoreLista.style.display === "block") {
    secondoContenitoreLista.style.display = "none";
  } else {
    secondoContenitoreLista.style.display = "block";
  }
});

// end
// supporto tendina
const terzoContenitore = document.querySelector(".terzo-contenitore");
const terzoContenitoreLista = document.querySelector(
  ".terzo-contenitore-lista"
);

terzoContenitore.addEventListener("click", () => {
  if (terzoContenitoreLista.style.display === "block") {
    terzoContenitoreLista.style.display = "none";
  } else {
    terzoContenitoreLista.style.display = "block";
  }
});
// end

// attrazioni tendina
const quartoContenitore = document.querySelector(".quarto-contenitore");
const quartoContenitoreLista = document.querySelector(
  ".quarto-contenitore-lista"
);

quartoContenitore.addEventListener("click", () => {
  if (quartoContenitoreLista.style.display === "block") {
    quartoContenitoreLista.style.display = "none";
  } else {
    quartoContenitoreLista.style.display = "block";
  }
});
// end

// altre informazioni tendina
const quintoContenitore = document.querySelector(".quinto-contenitore");
const quintoContenitoreLista = document.querySelector(
  ".quinto-contenitore-lista"
);

quintoContenitore.addEventListener("click", () => {
  if (quintoContenitoreLista.style.display === "block") {
    quintoContenitoreLista.style.display = "none";
  } else {
    quintoContenitoreLista.style.display = "block";
  }
});
