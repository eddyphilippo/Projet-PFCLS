$(function(){
  // Je crée un tableau avec les choix possible de l'ordinateur
  var arrayChoices = ['Pierre', 'Feuille', 'Ciseaux', 'Lezard', 'Spock'];
  // Je définis une variable pour le choix du joueur et l'initialise à null. L'idée c'est qu'elle existe au chargement de ma page
  var gamerChoice = null;
  // Je rend déplaçable tous les éléments qui ont la classe choice
  var scoreOrdinateur = 0;
  var scoreJoueur = 0;
  var numberGame = 0;
  $('.choice').draggable({
    revert : true,//Renvoie l'élément toujours à sa place
    snap : '#droppable',//Elles sont attirées par le bloc droppable
    snapMode: 'inner' // Permet le magnétisme sur l'interieur du block
  });
  // J'ajoute un évènement mouseup à mes éléments
  // En fonction de l'image choisi j'attribue une valeur au choix du joueur
  $('#rockChoice').mouseup(function(){
    gamerChoice = 0;
    // Je vérifie dans ma console ce qui est stocker dans la variable gamerChoice

  });
  $('#paperChoice').mouseup(function(){
    gamerChoice = 1;

  });
  $('#scissorsChoice').mouseup(function(){
    gamerChoice = 2;

  });
  $('#lezardChoice').mouseup(function(){
    gamerChoice = 3;

  });
  $('#spockChoice').mouseup(function(){
    gamerChoice = 4;

  });
  // Je rend ma div droppable
  $( '#droppable' ).droppable({
    // Elle n'accepte que les éléments qui ont la classe answer
    accept: '.answer',
    // Je lui ajoute l'évènement jqueryUI drop.
    drop : function(event, ui){
      // Au moment de l'évènement droppable
      numberGame++;
      // L'ordinateur choisi aléatoirement un choix dans le tableau définis précédemment

      var computerChoice = Math.floor(Math.random() * arrayChoices.length);
      console.log('Choix de l\'ordinateur' + computerChoice);

      if (computerChoice == gamerChoice){
        alert ("Égalité");
      }

      else if ((gamerChoice == 0 && computerChoice == 3) || (gamerChoice == 0 && computerChoice == 2) || (gamerChoice == 1 && computerChoice == 0) || (gamerChoice == 1 && computerChoice == 4) || (gamerChoice == 2 && computerChoice == 1) || (gamerChoice == 2 && computerChoice == 3) || (gamerChoice == 3 && computerChoice == 4) || (gamerChoice == 3 && computerChoice == 1) || (gamerChoice == 4 && computerChoice == 2) || (gamerChoice == 4 && computerChoice == 0)){
        alert ("Gagné");
        scoreJoueur++;

      }
      else{

        alert ("Perdu");
        scoreOrdinateur++;
      }



      $('#compteur2').find('p').html(scoreOrdinateur);
      $('#compteur1').find('p').html(scoreJoueur);
    }



  });
});





//function setText
//function calcScore(form)
//{
//document.getElementById("score").innerHTML = "Gagné: " + won + " fois. Perdu: " + lost + " fois."
