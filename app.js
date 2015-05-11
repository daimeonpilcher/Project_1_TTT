// OOP Tic Tac Toe boilerplate code

// Execute this code only AFTER the document is ready
// Hint: use jQuery's `$(document).ready`
$(document).ready(function() {
var game = "";

  function Game(playerX, playerO) {
    //Create a new instance of player 1
    this.player1 = playerX;
    console.log(playerX)

    //Do the same for a player 2
    this.player2 = playerO;
    console.log(playerO)
    
    //Create the board
    this.board = function() {
      $(".box").each(function(i, text){
        $(this).html("&nbsp")
      });
    }
  };

  // Remember: prototypes are shared functions between all game instances
  Game.prototype.nextPlayer = function() {
    //Switch players
    this.Player() ? X : O;
  };

  // `Game.prototype.init` kicks off a new game with a board and two players
  Game.prototype.init = function() {
    $(".player span")
  };

  // // A starter Player constructor.
  function Player(team) {
    //Is the player X or O?
    this.team = team;
    this.score = 0
  };

  // A starter Board constructor.
  function Board() {
    //Tracks the cells of the board instance
    this.$cells = $(".box")
    this.checkWin = function () {
      var symbol = turns % 2 === 0 ? "X" : "ohs";
      var boxes = document.querySelectorAll(".box");
      var winningCombos = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6]
        ];
      var combo, win;
      for (var i = 0; i < winningCombos.length; i++) {
        combo = winningCombos[i];
        win = boxes[combo[0]].classList.contains(symbol) &&
              boxes[combo[1]].classList.contains(symbol) &&
              boxes[combo[2]].classList.contains(symbol);
        if (win) {
          return true;
        }
      }
    }

    //Store any other properties that board may have below, such as a reset option
  };

  

  $("#newGame").on("click", function(event){
    // Start the game!
    console.log("Click works");
    var game = new Game("X", "O");
    game.board();
    //game.init();

  });

  $(".box").on("click", function(event){
    $(this).text()
  })


});