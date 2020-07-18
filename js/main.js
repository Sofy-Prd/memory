const cards = [
  { name: '1',    img: '1.jpg' },
  { name: '2',    img: '2.jpg' },
  { name: '3',    img: '3.jpg' },
  { name: '4',    img: '4.jpg' },
  // { name: '5',    img: '5.jpg' },
  // { name: '6',    img: '6.jpg' },
  // { name: '7',    img: '7.jpg' },
  // { name: '8',    img: '8.jpg' },
  // { name: '9',    img: '9.jpg' },
  // { name: '10',   img: '10.jpg' },
  // { name: '11',   img: '11.jpg' },
  // { name: '12',   img: '12.jpg' },
  // { name: '13',   img: '13.jpg' },
  // { name: '14',   img: '14.jpg' },
  { name: '1',    img: '1.jpg' },
  { name: '2',    img: '2.jpg' },
  { name: '3',    img: '3.jpg' },
  { name: '4',    img: '4.jpg' }
  // { name: '5',    img: '5.jpg' },
  // { name: '6',    img: '6.jpg' },
  // { name: '7',    img: '7.jpg' },
  // { name: '8',    img: '8.jpg' },
  // { name: '9',    img: '9.jpg' },
  // { name: '10',   img: '10.jpg' },
  // { name: '11',   img: '11.jpg' },
  // { name: '12',   img: '12.jpg' },
  // { name: '13',   img: '13.jpg' },
  // { name: '14',   img: '14.jpg' }

];

//On crée un nouveau jeu avec les cartes ci-dessus
const memoryGame = new MemoryGame(cards);

//Pour ce nouveau jeu, on crée le contenu html de chaque div card avec une div back visible et une div front non-visible
document.addEventListener("DOMContentLoaded", function(event) { 
  let html = '';
  memoryGame.cards.forEach(pic => {
    html += `<div class="card" data-card-name="${pic.name}">`;
    html += `  <div class="back" name="${pic.img}"></div>`;
    html += `  <div class="front" style="background: url(img/${pic.img}) no-repeat"></div>`;
    html += `</div>`;
  });

  //On ajoute ce contenu dans la div avec l'id memory_board
  document.querySelector('#memory_board').innerHTML = html;

 //la classe back devient front et la classe front devient back (la classe back aura donc un background de l'image tout en gardant ses dimensions)
  function showCard(divCard) {
    divCard.className = 'front';
    divCard.nextElementSibling.className = 'back';
  }

  //la classe front devient back et la classe back devient front (la classe back retrouve son background gris)
  function hideCard(divCard) {
    divCard.className = 'back';
    divCard.nextElementSibling.className = 'front';
  }

  //on recupère le nom de la carte
  function cardName(divCard) {
    return divCard.parentNode.dataset.cardName;
  }

  let playingCard; // On crée la variable `playingCard` qui est undefined au moment l'on clique sur la 1e carte et qui va devenir la 1e carte cliquée
  
  //pour les div dont la class est back
  document.querySelectorAll('.back').forEach(divCard => {
    //quand on clique
    divCard.onclick = function() {
      console.log('Card clicked: ', divCard);

      //montre la face cachée de la carte
      showCard(divCard);

     
      if (playingCard) {
      //si 1e click, pas de verif car `playingCard` est undefined, on passe au else
      //au 2e click `playingCard` correspond la 1e carte cliquée
        // on compare donc le nom de la 2e carte au nom de la 1e qui est `playingCard`
        if (memoryGame.checkIfPair(cardName(divCard), cardName(playingCard))) {
          console.log('yes!');
        } else {
          console.log('no!');
          
          // Si les cartes ne correspondent pas, on retourne les cartes au bout de 0.5s
          let playingCardCopy = playingCard; // on fait une copie parce que "playingCard" est sur le point d'être redefinie à undefined 
          setTimeout(function () {
            hideCard(playingCardCopy);
            hideCard(divCard);
          }, 500);
        }

        playingCard = undefined; // On reset `playingCard`
      } else {
        // Au 1er click on défini notre `playingCard` comme la 1e carte cliquée
        playingCard = divCard;
      }
    
      if (memoryGame.isFinished() && timeLeft > 0) {
        let firstname = prompt(`Tu as gagné en ${timeWin} secondes ! Comment t'appelles-tu ? `);
        clearInterval(timer); // on arrête le chrono
        console.log(firstname);
      }
    };
  });
});


