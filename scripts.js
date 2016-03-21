$(document).ready(function(){
  var playerXName;
  var playerOName;
  var xURL = "url(http://static.spark.autodesk.com/2012/08/15__02_57_23/11892.png2a9648b2-01fb-4d23-a7ab-6fc249b820e8Medium2.jpg)";
  var oURL = "url(http://static.spark.autodesk.com/2012/08/15__02_57_23/11883.png88cf99bc-d06a-4bba-82f9-44f29595eb9dMedium2.jpg)";
  var turn = "x";
  var turnCount = 0;
  var gameOver = false;
  var gameBoard = [0,0,0,
                   0,0,0,
                   0,0,0];


  //this function asks for players name and displays player vs player
  //shows the gamefield 
  $("#start").click(function(){
    playerXName = prompt("Player 1 enter your name:");
    playerOName = prompt("Player 2 enter your name:");
    alert(playerXName + "(X) vs " + playerOName + "(O)");
    $("#newGame").hide();
    $("#start").hide();
    $(".gameField").show();
});

  //the series of functions below (fields 1-9) change the background-image of the square that is clicked
  //alternates turns between players and adds 1 to the turnCount
  //checks if there is a winner or if the game is a tie after each click
  //if the game ends with a win or tie the game is reset
  $("#field1").click(function(){
    if(turn === "x"){
      $(this).css("background-image", xURL);
      gameBoard[0] = 1;
      turn = "o";
      turnCount++;
      checkForWin(gameBoard);
      checkForTie(turnCount);
      checkForGameOver();
    }
    else if (turn === "o"){
      $(this).css("background-image", oURL);
      gameBoard[0] = -1;
      turn = "x";
      turnCount++;
      checkForWin(gameBoard);
      checkForTie(turnCount);
      checkForGameOver();
    }
    $(this).off("click");
  });

//----------------------------------------------------------------------------------------------------------------------------

  $("#field2").click(function(){
    if(turn === "x"){
      $(this).css("background-image", xURL);
      gameBoard[1] = 1;
      turn = "o";
      turnCount++;
      checkForWin(gameBoard);
      checkForTie(turnCount);
      checkForGameOver();
    }
    else if (turn === "o"){
      $(this).css("background-image", oURL);
      gameBoard[1] = -1;
      turn = "x";
      turnCount++;
      checkForWin(gameBoard);
      checkForTie(turnCount);
      checkForGameOver();
    }
    $(this).off("click");
  });

  //----------------------------------------------------------------------------------------------------------------------------

  $("#field3").click(function(){
    if(turn === "x"){
      $(this).css("background-image", xURL);
      gameBoard[2] = 1;
      turn = "o";
      turnCount++;
      checkForWin(gameBoard);
      checkForTie(turnCount);
      checkForGameOver();
    }
    else if (turn === "o"){
      $(this).css("background-image", oURL);
      gameBoard[2] = -1;
      turn = "x";
      turnCount++;
      checkForWin(gameBoard);
      checkForTie(turnCount);
      checkForGameOver();
    }
    $(this).off("click");
  });

  //----------------------------------------------------------------------------------------------------------------------------

  $("#field4").click(function(){
    if(turn === "x"){
      $(this).css("background-image", xURL);
      gameBoard[3] = 1;
      turn = "o";
      turnCount++;
      checkForWin(gameBoard);
      checkForTie(turnCount);
      checkForGameOver();
    }
    else if (turn === "o"){
      $(this).css("background-image", oURL);
      gameBoard[3] = -1;
      turn = "x";
      turnCount++;
      checkForWin(gameBoard);
      checkForTie(turnCount);
      checkForGameOver();
    }
    $(this).off("click");
  });

  //----------------------------------------------------------------------------------------------------------------------------

  $("#field5").click(function(){
    if(turn === "x"){
      $(this).css("background-image", xURL);
      gameBoard[4] = 1;
      turn = "o";
      turnCount++;
      checkForWin(gameBoard);
      checkForTie(turnCount);
      checkForGameOver();
    }
    else if (turn === "o"){
      $(this).css("background-image", oURL);
      gameBoard[4] = -1;
      turn = "x";
      turnCount++;
      checkForWin(gameBoard);
      checkForTie(turnCount);
      checkForGameOver();
    }
    $(this).off("click");
  });

  //----------------------------------------------------------------------------------------------------------------------------

  $("#field6").click(function(){
    if(turn === "x"){
      $(this).css("background-image", xURL);
      gameBoard[5] = 1;
      turn = "o";
      turnCount++;
      checkForWin(gameBoard);
      checkForTie(turnCount);
      checkForGameOver();
    }
    else if (turn === "o"){
      $(this).css("background-image", oURL);
      gameBoard[5] = -1;
      turn = "x";
      turnCount++;
      checkForWin(gameBoard);
      checkForTie(turnCount);
      checkForGameOver();
    }
    $(this).off("click");
  });

  //----------------------------------------------------------------------------------------------------------------------------

  $("#field7").click(function(){
    if(turn === "x"){
      $(this).css("background-image", xURL);
      gameBoard[6] = 1;
      turn = "o";
      turnCount++;
      checkForWin(gameBoard);
      checkForTie(turnCount);
      checkForGameOver();
    }
    else if (turn === "o"){
      $(this).css("background-image", oURL);
      gameBoard[6] = -1;
      turn = "x";
      turnCount++;
      checkForWin(gameBoard);
      checkForTie(turnCount);
      checkForGameOver();
    }
    $(this).off("click");
  });

  //----------------------------------------------------------------------------------------------------------------------------

  $("#field8").click(function(){
    if(turn === "x"){
      $(this).css("background-image", xURL);
      gameBoard[7] = 1;
      turn = "o";
      turnCount++;
      checkForWin(gameBoard);
      checkForTie(turnCount);
      checkForGameOver();
    }
    else if (turn === "o"){
      $(this).css("background-image", oURL);
      gameBoard[7] = -1;
      turn = "x";
      turnCount++;
      checkForWin(gameBoard);
      checkForTie(turnCount);
      checkForGameOver();
    }
    $(this).off("click");
  });

  //----------------------------------------------------------------------------------------------------------------------------

  $("#field9").click(function(){
    if(turn === "x"){
      $(this).css("background-image", xURL);
      gameBoard[8] = 1;
      turn = "o";
      turnCount++;
      checkForWin(gameBoard);
      checkForTie(turnCount);
      checkForGameOver();
    }
    else if (turn === "o"){
      $(this).css("background-image", oURL);
      gameBoard[8] = -1;
      turn = "x";
      turnCount++;
      checkForWin(gameBoard);
      checkForTie(turnCount);
      checkForGameOver();
    }
    $(this).off("click");
  });

//------------------------------------------------------------------------------------------------------------------------------

  //checks if gameOver is true and refreshes the page
  function checkForGameOver(){
    if(gameOver === true){
      location.reload();
    }
  }

  //this function checks if the game is a tie after each click
  //sets gameOver to true to trigger the CheckForGameOver function
  function checkForTie(num){
    if(num === 9 && gameOver === false){
      alert("The game is a tie!");
      gameOver = true;
    }
  }

  //this function checks if there is a winner after each click
  //sets gameOver to true to trigger the CheckForGameOver function
  function checkForWin(array){
    if(array[0] + array[1] + array[2] === 3 ||
       array[3] + array[4] + array[5] === 3 ||
       array[6] + array[7] + array[8] === 3 ||
       array[0] + array[3] + array[6] === 3 ||
       array[1] + array[4] + array[7] === 3 ||
       array[2] + array[5] + array[8] === 3 ||
       array[2] + array[4] + array[6] === 3 ||
       array[0] + array[4] + array[8] === 3){
         alert(playerXName + "(X) is the winner!");
         gameOver = true;
    }
    else if(array[0] + array[1] + array[2] === -3 ||
            array[3] + array[4] + array[5] === -3 ||
            array[6] + array[7] + array[8] === -3 ||
            array[0] + array[3] + array[6] === -3 ||
            array[1] + array[4] + array[7] === -3 ||
            array[2] + array[5] + array[8] === -3 ||
            array[2] + array[4] + array[6] === -3 ||
            array[0] + array[4] + array[8] === -3){
              alert(playerOName + "(O) is the winner!");
              gameOver = true;
    }
  }

}); // end of document.ready
