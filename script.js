const cardSuits = ["hearts", "spades", "diamonds", "clubs"];
const cardValues = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

const deckList = document.querySelector("#deck");

function createDeck() {
  const deck = [];
  cardSuits.forEach(function (cardSuit) {
    cardValues.forEach(function (cardValue) {
      deck.push({ cardSuit: cardSuit, cardValue: cardValue });
    });
  });
  return deck;
}

let deck = createDeck();

function createNode(cards) {
  return cards.map(function (card) {
    const cardEl = document.createElement("div");
    cardEl.classList.add("card", `card--${card.cardSuit}`);
    cardEl.textContent = `${card.cardValue} of ${card.cardSuit}`;

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

function getCardSuit(cardSuit, deck) {
  const onlyCardSuit = deck.filter(function (cardValue) {
    return cardValue.cardSuit === cardSuit;
  });

  return onlyCardSuit;
}

function resetDeck() {
  deck = createDeck();
  return deck;
}

function shuffleDeck(deck) {
  const shuffledDeck = deck.sort(() => Math.random() - 0.5);
  return shuffledDeck;
}

const heartsButton = document.querySelector("#hearts-button");
const spadesButton = document.querySelector("#spades-button");
const diamondsButton = document.querySelector("#diamonds-button");
const clubsButton = document.querySelector("#clubs-button");
const resetButton = document.querySelector("#reset-button");
const shuffleButton = document.querySelector("#shuffle-button");

heartsButton.addEventListener("click", () => {
  updateNode(getCardSuit("hearts", deck));
});
spadesButton.addEventListener("click", () => {
  updateNode(getCardSuit("spades", deck));
});
diamondsButton.addEventListener("click", () => {
  updateNode(getCardSuit("diamonds", deck));
});
clubsButton.addEventListener("click", () => {
  updateNode(getCardSuit("clubs", deck));
});
resetButton.addEventListener("click", () => {
  updateNode(resetDeck());
});
shuffleButton.addEventListener("click", () => {
  updateNode(shuffleDeck(deck));
});
