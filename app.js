// OOP Tic Tac Toe boilerplate code

// Execute this code only AFTER the document is ready
// Hint: use jQuery's `$(document).ready`
$(document).ready(function() {

  function Game(playerX, playerO) {
    //Create a new instance of player 1
    this.playerX = new Player(playerX);
    console.log(playerX)

    //Do the same for a player 2
    this.playerO = new Player(playerO);
    console.log(playerO)
    console.log(ex)
    
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

    //Store any other properties that board may have below, such as a reset option
  };

  

  $("#newGame").on("click", function(event){
    // Start the game!
    console.log("Click works");
    var game = new Game("ex", "oh");
    game.board();
    //game.init();

  });

  $(".box").on("click", function(event){
    console.log(event.target)
  })


});