// flag array
const flagArray = [
  {
    name: "uruguay",
    img: "img/uruguay.png",
  },
  {
    name: "belgium",
    img: "img/belgium.png",
  },
  {
    name: "canada",
    img: "img/canada.png",
  },
  {
    name: "china",
    img: "img/china.png",
  },
  {
    name: "guinea-bissau",
    img: "img/guinea-bissau.png",
  },
  {
    name: "honduras",
    img: "img/honduras.png",
  },
  {
    name: "italy",
    img: "img/italy.png",
  },
  {
    name: "morocco",
    img: "img/morocco.png",
  },
  {
    name: "gabon",
    img: "img/gabon.png",
  },
  {
    name: "sri-lanka",
    img: "img/sri-lanka.png",
  },
  {
    name: "united-kingdom",
    img: "img/united-kingdom.png",
  },
  {
    name: "rwanda",
    img: "img/rwanda.png",
  },
];

// Duplicate array to create a match for each card
const gameCards = flagArray.concat(flagArray);

// Grab the div with an id of game
const game = document.getElementById("game");

// Create a section with a class of grid
const grid = document.createElement("section");
grid.setAttribute("class", "grid");
game.appendChild(grid);

gameCards.sort(() => 0.5 - Math.random());

gameCards.forEach((item) => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.dataset.name = item.name;

  // Create front of card
  const front = document.createElement("div");
  front.classList.add("front");

  // Create back of card
  const back = document.createElement("div");
  back.classList.add("back");
  back.style.backgroundImage = `url(${item.img})`;

  grid.appendChild(card);
  card.appendChild(front);
  card.appendChild(back);
});

let count = 0;
let firstGuess = "";
let secondGuess = "";
let delay = 1500;

// Select match class
const match = () => {
  var selected = document.querySelectorAll(".selected");
  selected.forEach((card) => {
    card.classList.add("match");
  });
  resetGuesses();
};

// Reset number of guess to 0
const resetGuesses = () => {
  firstGuess = "";
  secondGuess = "";
  count = 0;
  var selected = document.querySelectorAll(".selected");
  selected.forEach((card) => {
    card.classList.remove("selected");
  });
};

// Add event listener to grid
grid.addEventListener("click", function (event) {
  // The event target is our clicked item
  let clicked = event.target;
  if (
    clicked.nodeName === "section" ||
    clicked.parentNode.dataset.name === undefined ||
    clicked.parentNode.classList.contains("selected") ||
    clicked.parentNode.classList.contains("match")
  ) {
    return;
  }
  if (count < 2) {
    count++;
    if (count === 1) {
      firstGuess = clicked.parentNode.dataset.name;
      clicked.parentNode.classList.add("selected");
    } else {
      secondGuess = clicked.parentNode.dataset.name;
      clicked.parentNode.classList.add("selected");
    }
    if (firstGuess && secondGuess) {
      if (firstGuess === secondGuess) {
        setTimeout(match, delay);
      } else {
        setTimeout(resetGuesses, delay);
      }
    }
  }
});
