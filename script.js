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

const copasButton = document.querySelector('#copas-button');

copasButton.addEventListener('click', () =>{ getNaipe("copas") });

const espadasButton = document.querySelector('#espadas-button');

espadasButton.addEventListener('click', () =>{ getNaipe("espadas") })

const ourosButton = document.querySelector('#ouros-button');

ourosButton.addEventListener('click', () =>{ getNaipe("ouros") });

const pausButton = document.querySelector('#paus-button');

pausButton.addEventListener('click', () =>{ getNaipe("paus") });