let playerRedSelections = [];
let playerBlackSelections = [];

let columnOne = document.getElementById("columnOne");
columnOne.addEventListener("click", dropPiece);

let columnTwo = document.getElementById("columnTwo");
columnTwo.addEventListener("click", dropPiece);

let columnThree = document.getElementById("columnThree");
columnThree.addEventListener("click", dropPiece);

let columnFour = document.getElementById("columnFour");
columnFour.addEventListener("click", dropPiece);

let columnFive = document.getElementById("columnFive");
columnFive.addEventListener("click", dropPiece);

let columnSix = document.getElementById("columnSix");
columnSix.addEventListener("click", dropPiece);

let columnSeven = document.getElementById("columnSeven");
columnSeven.addEventListener("click", dropPiece);

function dropPiece(event) {
  // check which column was clicked with event.currentTarget
  if (event.target.childElementCount == 0) {
    let currentPlayer = document.createElement("div");
    currentPlayer.className = "disc redDisc";
    event.target.append(currentPlayer);
    switchPlayer();
  }

  // check how many dics are already placed in column, with discs already appended to squares in column
  // if there are already six discs in that column, return and do not allow new disc to be placed
  // check who's turn it is to drop piece, either red or black
  // add newest placed disc to top of stack of previous discs in clicked column, and add newest appended square Number(id) to playerSelection array
  // check to see if there is a win for player who just made move checkWin() by checking playerSelection array for subsequent numbers... either four vertically (within column, so algorithm checks whether there are four in a row where each Number(id) is 10 apart), four horizontally (across columns, where each Number(id) is 1 apart), or four diagonally (either diagonally right (each Number(id) is 9 apart) or diagonally left (each Number(id) is 11 apart))... so basically, checks whether four in a row of each id separated by 1, 10, 9, or 11
  //...or checkDraw(), if all columns are full and no win, then there is a draw
  // if there is no win or draw, then switch turns to next player, either black or red, switchPlayer()
}

function switchPlayer() {}
