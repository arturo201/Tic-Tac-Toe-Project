# Tic-Tac-Toe-Project

## Introduction
Welcome to my Tic-Tac-Toe game project! In this project, I've created a web-based version of the classic Tic-Tac-Toe game using JavaScript, jQuery, and Bootstrap.


<img width="900" alt="Screenshot 2023-08-16 at 10 34 00 AM" src="https://github.com/arturo201/Tic-Tac-Toe-Project/assets/41337829/d22b6995-1072-451b-84fe-f6836199f817">


## Features
### Game Grid
I've created a 3x3 grid using HTML and styled it using CSS. Each cell of the grid represents a possible move in the game.

### Player Turn Indicator
A "Turn" section at the top of the page displays whose turn it is – either X or O. This updates after each move.

### Click Event Handling
Using jQuery, I've added click event listeners to each cell. When a cell is clicked, the corresponding player's symbol (X or O) is placed in the cell, and the turn indicator updates.

### Winning Logic
I've implemented a winning logic by checking all possible winning combinations – rows, columns, and diagonals. If a player achieves a winning combination, an alert is displayed, and the game ends.

### Draw Detection
If no player wins and the grid is full, the game is declared a draw. An alert appears to notify the players.

### Restarting the Game
A "Restart" button allows players to reset the game. Clicking this button clears the grid, resets the turn indicator, and prepares for a new game.

### Result Display
To enhance user experience, I've utilized Bootstrap's modal component. When the game ends, whether in a win or a draw, a modal appears with a message announcing the result.


## Conclusion
Creating this Tic-Tac-Toe game was an exciting journey in applying web development concepts. I enjoyed implementing the game's logic, user interface, and interactivity. Feel free to explore the code in the included files and have fun playing the game!
