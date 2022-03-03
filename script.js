const naipes = ["copas", "espadas", "ouros", "paus"]
const cartas = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

const deckList = document.querySelector("#deck")

function createDeck() {
  const deck = []
  naipes.forEach(function(naipe) {
    cartas.forEach(function(carta) {
      deck.push({naipe: naipe, carta: carta})
    })
  })
  return deck
}

function createNode() {
  return createDeck().map(function(card) {
    const cardEl = document.createElement("div")
    cardEl.classList.add("card")
    cardEl.textContent = card.carta + " de " + card.naipe

    return cardEl
  })
}

const list = createNode();

list.forEach(node => {
  deckList.appendChild(node);
})
