//Backend logic

//create variables to store the players
  var player1 = "";
  var player2 = "";

//Roll dice with random number from 1-6
  var rollRandom = function() {
    return Math.floor(6*Math.random()) + 1;
  }

  //create constructor method for players
  function Player (turn){
    this.roll = 0;
    this.currentScore = 0;
    this.score= 0;
    this.turn = turn;
    this.playerName;
  }

//if player gets a score of 1
Player.prototype.scoreone = function () {
  if (this.roll === 1) {
    this.currentScore = 0;
    alert("You scored a 1 " + this.playerName +"Your turn is over pass the dice");
  } else {
    this.currentScore += this.roll;
  }
}

//prototype for hold
Player.prototype.hold = function () {
  this.score += this.currentScore;
  this.currentScore = 0;
  alert(this.playerName + ", your turn is over pass the dice");
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
  $("button#playGame").click(function(event){
    player1 = new Player(true);
    player2 = new Player(false);
    $(".player-space").show();
    $(".start-game").hide();

    var player1Name = $(".player1Name").val();
    $("#player1Name").text(player1Name);

    var player2Name = $(".player2Name").val();
    $("#player2Name").text(player2Name);

    player1.playerName = player1Name;
    player2.playerName = player2Name;
  });

  //when player press new game button
  $("button#new-game").click(function(event){
    $(".player-space").hide();
    clearValues();
    player1.newGame();
    player2.newGame();
    $("#round-total-1").empty();
    $("#total-score-1").empty();
    $("die-roll-1").empty();
    $("#round-total-2").empty();
    $("#total-score-2").empty();
    $("#die-roll-2").empty();

    $(".start-game").show();
  });

  //Makes player 1 to roll the dice
  $("button#rollPlayer1").click(function(event){
    player1.roll = rollRandom();
    $("#dice-roll-1").text(player1.roll);
    player1.scoreone();
    $("#round-total-1").text(player1.currentScore);
  });

  //when player2 rolls
  $("button#rollPlayer2").click(function(event){
    player2.roll = rollRandom();
    $("#dice-roll-2").text(player2.roll);
    player2.scoreone();
    $("#round-total-2").text(player2.currentScore);
  });

  //when player1 press hold button
  $("button#holdPlayer1").click(function(event){
    player1.hold();
    $("#total-score-1").text(player1.score);
    $("#round-total-1").empty();
    $("#dice-roll-1").empty();
    player1.crownWinner();
  });

  //when player2 holds
  $("button#holdPlayer2").click(function(event){
    player2.hold();
    $("#total-score-2").text(player2.score);
    $("#round-total-2").empty();
    $("#dice-roll-2").empty();
    player2.crownWinner();
  });

});
