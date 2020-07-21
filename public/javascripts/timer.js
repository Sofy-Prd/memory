let timeLeft = 90;
let timeWin = 0

//Chronometre
timer = setInterval(function(){
    if(timeLeft>0)
    {
        --timeLeft; // décrémente le compteur
        ++timeWin; // augmente le compteur
        document.getElementById("chrono").innerHTML = "il te reste <span>" + timeLeft + " </span> secondes pour terminer le jeu. Courage tu vas y arriver 💪 " ;
    }
    else
    {
        alert('Tu as perdu, le temps est écoulé ! Essaie encore, la prochaine fois sera sûrement la bonne 😀 Bonne chance 🍀 !');
        clearInterval(timer);//On arrete le chrono
        window.location.href = '/';//On retourne sur la page d'accueil
       
    }
}, 1000);


//Fonction qui crée une barre de progression en fonction des arguments
function createProgressbar(id, duration) {
    // on selectionne la div que l'on veut transformer en barre de progression
    let progressbar = document.getElementById(id);
    progressbar.className = 'progressbar';
  
    // on crée la div qui va changer de largeur grace à une animation css en fonction du temps écoulé
    let progressbarinner = document.createElement('div');
    progressbarinner.className = 'inner';
  
    // on fixe les parametres de l'animation
    progressbarinner.style.animationDuration = duration;
  
   
    // on ajoute la barre animée dans la div de la barre de progression
    progressbar.appendChild(progressbarinner);
  
    // Quand tout est fixé on lance l'animation
    progressbarinner.style.animationPlayState = 'running';
  }
  
  //au chargement de la page, une basse de progression est créée avec les arguments souhaités
  addEventListener('load', function() {
    createProgressbar('progressbar1', '90s');
  });