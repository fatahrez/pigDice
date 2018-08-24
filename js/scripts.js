//Backend logic
  var player1 = "";
  var player2 = "";
  var rollRandom = Math.floor(Math.random() * 6) + 1;
  function Player1 (roll, hold){
    this.rollRandom = roll;
    this.holdDice = hold;

  }
  function Player2 (roll, hold){
    this.rollRandom = roll;
    this.holdDice = hold;

  }
//frontEnd logic
$(document).ready(function(){
  $("#rollPlayer1").click(function(){
    $("#output").text(rollRandom);
  })
});
