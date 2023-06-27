$(document).ready(function() {
  let currentPlayer = 'X';
  let gameEnded = false;

  // Function to check if a player has won
  function checkWinner() {
    let cells = $('.cell');
    let combo = [
      [0, 1, 2], [3, 4 ,5], [6, 7, 8], // rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
      [0, 4, 8], [2, 4, 6] // diagonals
    ];

    // iterate over each combination to check for a win
    for (let i = 0; i < combo.length; i++) {
      // extract indices for the current combination
      let [a, b, c] = combo[i];
      //check if the cells at idices a, b, and c have the same non-empty text value
      if (cells.eq(a).text() !== '' && cells.eq(a).text() === cells.eq(b).text() && cells.eq(a).text() === cells.eq(c).text()){
        // returns the winning symbol - x or o
        return cells.eq(a).text();
      }
    }
    // if no winning combo is found, return is null to idicate no winner
    return null;
  }

  // this function handles a cell click
  function cellClick() {
    // Check if the clicked cell is empty and the game has not ended
    if ($(this).text() === '' && !gameEnded) {
      // Fill the clicked cell with the current player's symbol (X or O)
      $(this).text(currentPlayer);
      $(this).addClass(currentPlayer === 'X' ? 'x' : 'o');
  
      // Check if a player has won the game
      let winner = checkWinner();
      if (winner) {
        // Display the winning message and show the result modal
        $('#message').text(winner + ' wins!');
        $('#resultModal .modal-title').text('Game Over');
        $('#resultModal .modal-body').text(winner + ' wins!');
        $('#resultModal').modal('show');
        gameEnded = true;
  
      } else if ($('.cell:empty').length === 0) {
        // Check if the game has ended in a draw
        $('#message').text("It's a draw!");
        $('#resultModal .modal-title').text('Game Over!');
        $('#resultModal .modal-body').text("It's a draw!");
        $('#resultModal').modal('show');
        gameEnded = true;
  
      } else {
        // Switch to the next player's turn
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        $('#turn').text("It's " + currentPlayer + "'s turn");
      }
    }
  }
  
  // function that restarts the game
  function restartGame() {
    $('.cell').text('');
    $('.cell').removeClass('x o');
    $('#message').text('');
    currentPlayer = 'X';
    gameEnded = false;
    $('#turn').text("It's " + currentPlayer + "'s turn");
  }

  // event listener for cell clicks
  $('.cell').on('click', cellClick);

  //even listener to clear board after clicking on 'OK' button
  $('#restart-on-click').on('click', restartGame);

  // event listener for restart button
  $('#restart').on('click', restartGame);

});