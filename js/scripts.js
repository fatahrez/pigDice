//Backend code
function Names(name1, name2) {
  this.name1 = name1;
  this.name2 = name2;
}

function Player() {
  var turnScore = 0;
  var gameScore = 0;
  var isActive = false;
  this.turnScore = turnScore;
  this.gameScore = gameScore;
  this.isActive = isActive;
}

var randomDie = randomRoll();

function randomRoll() {
    randomDie = Math.floor(6*Math.random())+1;

    return randomDie;
};

var startGame = function() {
  player1 = new Player();
  player2 = new Player();
  player1.isActive = true;
}

var changePlayer = function() {
  if (player1.isActive === true) {
    player1.isActive = false;
    player2.isActive = true;
    scoreReset();
  } else {
    player2.isActive = false;
    player1.isActive = true;
    scoreReset();
  }
}

var scoreReset = function() {
  player1.turnScore = 0;
  player2.turnScore = 0;
}

var playerToRoll = function() {
  if (player1.isActive === true) {
    playerRoll(player1);
  } else {
    playerRoll(player2);
  }
}

var playerRoll = function(player) {
  var roll = randomDie;
  if(roll === 1){
    player.turnScore = 0;
    changePlayer();
  } else {
    player.turnScore += roll;
  }
  checkForEndOfGame();
  return roll;
}

var playerToHold = function() {
  if (player1.isActive === true) {
    playerHold(player1);
  } else {
    playerHold(player2);
  }


var playerHold = function(player) {
  player.gameScore += player.turnScore;
  changePlayer();
}

var checkForEndOfGame = function() {
  if (player1.gameScore >= 100 || player2.gameScore >= 100) {
    if (player1.gameScore > player2. gameScore) {
      alert("End of game! Player 1 won!");
    } else if (player1.gameScore < player2. gameScore) {
      alert("End of game! Player 2 won!");
    } else {
      alert("End of game! Tie!");
    }
  }
}

var stylePanels = function() {
  if (player1.isActive === true) {
    $("#player2panel").removeClass("activeUser");
    $("#player1panel").addClass("activeUser");
  } else {
    $("#player1panel").removeClass("activeUser");
    $("#player2panel").addClass("activeUser");
  }
}


//user-interface
$(document).ready(function() {


  startGame();
  stylePanels();

  $("button#roll").click(function(event) {
    $(".dice").html('<img src=img/die'+ randomDie +'.png>');
    playerToRoll();
    stylePanels();
    var roundScore = roundScore + randomRoll();
    $("#player1Tscore").text(player1.turnScore);
    $("#player1Gscore").text(player1.gameScore);
    $("#player2Tscore").text(player2.turnScore);
    $("#player2Gscore").text(player2.gameScore);
    event.preventDefault();
  })

  $("button#hold").click(function(event) {
    event.preventDefault();
    playerToHold();
    stylePanels();
  })
})
