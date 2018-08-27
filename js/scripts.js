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
    turnScoreReset();
  } else {
    player2.isActive = false;
    player1.isActive = true;
    turnScoreReset();
  }
}
