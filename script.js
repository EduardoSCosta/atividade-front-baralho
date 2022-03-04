const naipes = ["copas", "espadas", "ouros", "paus"];
const cartas = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
];

const deckList = document.querySelector("#deck");

function createDeck() {
  const deck = [];
  naipes.forEach(function (naipe) {
    cartas.forEach(function (carta) {
      deck.push({ naipe: naipe, carta: carta });
    });
  });
  return deck;
}

let deck = createDeck();

function createNode(cards) {
  return cards.map(function (card) {
    const cardEl = document.createElement("div");
    cardEl.classList.add("card");
    cardEl.textContent = card.carta + " de " + card.naipe;

    return cardEl;
  });
}

const list = createNode(deck);

list.forEach((node) => {
  deckList.appendChild(node);
});

function updateNode(cards) {
  const newCardsNodes = createNode(cards);
  deckList.replaceChildren(...newCardsNodes);
}

function getNaipe(naipe, deck) {
  const onlyNaipe = deck.filter(function (carta) {
    return carta.naipe === naipe;
  });

  return onlyNaipe;
}

function resetDeck() {
  deck = createDeck();
  return deck;
}

function shuffleDeck(deck) {
  const shuffledDeck = deck.sort(() => Math.random() - 0.9);
  return shuffledDeck;
}

const copasButton = document.querySelector("#copas-button");
const espadasButton = document.querySelector("#espadas-button");
const ourosButton = document.querySelector("#ouros-button");
const pausButton = document.querySelector("#paus-button");
const resetButton = document.querySelector("#reset-button");
const shuffleButton = document.querySelector("#shuffle-button");

copasButton.addEventListener("click", () => {
  updateNode(getNaipe("copas", deck));
});
espadasButton.addEventListener("click", () => {
  updateNode(getNaipe("espadas", deck));
});
ourosButton.addEventListener("click", () => {
  updateNode(getNaipe("ouros", deck));
});
pausButton.addEventListener("click", () => {
  updateNode(getNaipe("paus", deck));
});
resetButton.addEventListener("click", () => {
  updateNode(resetDeck());
});
shuffleButton.addEventListener("click", () => {
  updateNode(shuffleDeck(deck));
});
