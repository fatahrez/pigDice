//Backend logic

//create variables to store the players
  var player1 = "";
  var player2 = "";

//Roll dice with random number
  var rollRandom = function() {
    Math.floor(Math.random() * 6) + 1;
  }

  //create constructor method for players
  function Player (throw){
    this.roll = 0;
    this.currentScore = 0;
    this.score= 0;
    this.throw = throw;
    this.playerName;
  }

//if player gets a score of 1
Player.prototype.scoreone = function () {
  if (this.roll === 1) {
    this.currentScore = 0;
    alert("You scored nothing." + this.playerName +"Your turn is over pass the dice");
  } else {
    this.currentScore += this.roll;
  }
}

//prototype for hold
Player.prototype.hold = function () {
  this.score += this.currentScore;
  this.currentScore = 0;
  alert(this.playerName + ", your turn is over pass the game");
}

//crown the winner if someone reaches 100
Player.prototype.crownWinner = function (){
  if (this.score >= 100){
    alert(this.playerName + "Congratulations, You have won")
  }
}

Player.prototype.newGame = function () {
  this.roll = 0;
  this.currentScore= 0;
  this.score = 0;
  this.playerName= "";
}
var clearValues = function(){
  $(".player1Name").val("");
  $(".player2Name").val("");
}
//frontEnd logic
$(document).ready(function(){
  //starts game by showing the rolling space and creating two players
  $("button#playGame").click(function(){
    player1 = new Player(true);
    player2 = new Player(false);
    $(".player-space").show();
    $(".start-game").hide();

    var player1Name = $(".player1Name").val();
    $("#player1Name").text(player1Name);

    var player2Name = $(".player2name").val();
    $("#player2Name").text(player2Name);
  });

  //Makes player 1 to roll the dice
  $("button#rollPlayer1").click(function(){
    $("#output").text(rollRandom);
  })
});
