//Le jeu et sa logique

class MemoryGame {
  constructor(cards){
    this.cards = cards;
    this.pickedCards = [];//correspond aux cartes sur lesquelles on a cliqué
    this.pairsGuessed = 0;//nombre de paires trouvées
    this.shuffleCards();
  }

  //on mélange les cartes aléatoirement
  shuffleCards() {
    this.cards.sort(function (a, b) {
      return Math.random() - 0.5;
    });
  }
  //Si les cartes sont identiques, on incremente le nombre de paires trouvées
  checkIfPair(card1, card2) {
   if (card1 === card2) {
      this.pairsGuessed++;
      return true;
    }
    return false;
  }

  //Pour gagner, le nombre de paires trouvées doit être égal au nombre de paires présentées
  isFinished() {
    return this.pairsGuessed >= (this.cards.length /2);
  }
}