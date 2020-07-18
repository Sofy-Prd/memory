class MemoryGame {
  constructor(cards){
    this.cards = cards;
    this.pickedCards = [];
    this.pairsGuessed = 0;

    this.shuffleCards();
  }

  //on tri les carte aléatoirement
  shuffleCards() {
    this.cards.sort(function (a, b) {
      return Math.random() - 0.5;
    });
  }
  //On verifie si les cartes sont identiques
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