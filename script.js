const naipes = ["copas", "espadas", "ouros", "paus"];
const cartas = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

const deckList = document.querySelector("#deck");

function createDeck() {
  const deck = [];
  naipes.forEach(function(naipe) {
    cartas.forEach(function(carta) {
      deck.push({naipe: naipe, carta: carta});
    });
  });
  return deck
}

function createNode(cards) {
  return cards.map(function(card) {
    const cardEl = document.createElement("div");
    cardEl.classList.add("card");
    cardEl.textContent = card.carta + " de " + card.naipe;

    return cardEl;
  })
}

const list = createNode(createDeck());

list.forEach(node => {
  deckList.appendChild(node);
})

function getNaipe(naipe) {

  const onlyNaipe = createDeck().filter(function(carta) {
    return carta.naipe === naipe;
  });
  const newList = createNode(onlyNaipe);
  deckList.replaceChildren(...newList);
}

function shuffleDeck() {

  const shuffledDeck = createDeck().sort(() => Math.random() - 0.9);
  const newList = createNode(shuffledDeck);
  deckList.replaceChildren(...newList);
}

const copasButton = document.querySelector('#copas-button');
const espadasButton = document.querySelector('#espadas-button');
const ourosButton = document.querySelector('#ouros-button');
const pausButton = document.querySelector('#paus-button');
const resetButton = document.querySelector('#reset-button');
const shuffleButton = document.querySelector('#shuffle-button');

copasButton.addEventListener('click', () =>{ getNaipe("copas") });
espadasButton.addEventListener('click', () =>{ getNaipe("espadas") })
ourosButton.addEventListener('click', () =>{ getNaipe("ouros") });
pausButton.addEventListener('click', () =>{ getNaipe("paus") });
resetButton.addEventListener('click', () =>{ deckList.replaceChildren(...list) });
shuffleButton.addEventListener('click', () => { shuffleDeck() });
