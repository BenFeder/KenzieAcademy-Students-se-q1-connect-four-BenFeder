let boardMap = [
  // columns and rows are displayed as is shown on the visual board
  [null, null, null, null, null, null, null], //row 1
  [null, null, null, null, null, null, null], //row 2
  [null, null, null, null, null, null, null], //row 3
  [null, null, null, null, null, null, null], //row 4
  [null, null, null, null, null, null, null], //row 5
  [null, null, null, null, null, null, null], //row 6
];

startGame();

function startGame() {
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
}

let currentPlayer = "2";

function dropPiece(event) {
  // check which column was clicked with event.currentTarget
  if (event.currentTarget.childElementCount < 6) {
    switchPlayer();
    if (currentPlayer == 1) {
      let currentPiece = document.createElement("div");
      currentPiece.className = "disc redDisc";
      event.currentTarget.append(currentPiece);
    } else if (currentPlayer == 2) {
      let currentPiece = document.createElement("div");
      currentPiece.className = "disc blackDisc";
      event.currentTarget.append(currentPiece);
    }
    updateBoardMap();
  }

  if (event.currentTarget.childElementCount == 5) {
    switchPlayer();
    if (currentPlayer == 1) {
      let currentPiece = document.createElement("div");
      currentPiece.className = "disc redDisc";
      event.currentTarget.append(currentPiece);
      updateBoardMap();
    } else if (currentPlayer == 2) {
      let currentPiece = document.createElement("div");
      currentPiece.className = "disc blackDisc";
      event.currentTarget.append(currentPiece);
      updateBoardMap();
    }
  }
  checkWin();
  checkTie();
}

function updateBoardMap() {
  for (let rows = boardMap.length - 1; rows >= 0; rows--) {
    if (columnOne.childElementCount > 0) {
      let columnOneChildren = columnOne.childElementCount;
      for (let child = 0; child < columnOneChildren; child++) {
        if (columnOne.childElement[child].style.backgroundColor == "red") {
          boardMap[rows][0] = 1;
        } else if (
          columnOne.childElement[child].style.backgroundColor == "black"
        ) {
          boardMap[rows][0] = 2;
        }
      }
    }
    if (columnTwo.childElementCount > 0) {
      let columnTwoChildren = columnTwo.childElementCount;
      for (let child = 0; child < columnTwoChildren; child++) {
        if (columnTwo.childElement[child].style.backgroundColor == "red") {
          boardMap[rows][1] = 1;
        } else if (
          columnTwo.childElement[child].style.backgroundColor == "black"
        ) {
          boardMap[rows][1] = 2;
        }
      }
    }
    if (columnThree.childElementCount > 0) {
      let columnThreeChildren = columnThree.childElementCount;
      for (let child = 0; child < columnThreeChildren; child++) {
        if (columnThree.childElement[child].style.backgroundColor == "red") {
          boardMap[rows][2] = 1;
        } else if (
          columnThree.childElement[child].style.backgroundColor == "black"
        ) {
          boardMap[rows][2] = 2;
        }
      }
    }
    if (columnFour.childElementCount > 0) {
      let columnFourChildren = columnFour.childElementCount;
      for (let child = 0; child < columnFourChildren; child++) {
        if (columnFour.childElement[child].style.backgroundColor == "red") {
          boardMap[rows][3] = 1;
        } else if (
          columnFour.childElement[child].style.backgroundColor == "black"
        ) {
          boardMap[rows][3] = 2;
        }
      }
    }
    if (columnFive.childElementCount > 0) {
      let columnFiveChildren = columnFive.childElementCount;
      for (let child = 0; child < columnFiveChildren; child++) {
        if (columnFive.childElement[child].style.backgroundColor == "red") {
          boardMap[rows][4] = 1;
        } else if (
          columnFive.childElement[child].style.backgroundColor == "black"
        ) {
          boardMap[rows][4] = 2;
        }
      }
    }
    if (columnSix.childElementCount > 0) {
      let columnSixChildren = columnSix.childElementCount;
      for (let child = 0; child < columnSixChildren; child++) {
        if (columnSix.childElement[child].style.backgroundColor == "red") {
          boardMap[rows][5] = 1;
        } else if (
          columnSix.childElement[child].style.backgroundColor == "black"
        ) {
          boardMap[rows][5] = 2;
        }
      }
    }
    if (columnSeven.childElementCount > 0) {
      let columnSevenChildren = columnSeven.childElementCount;
      for (let child = 0; child < columnSevenChildren; child++) {
        if (columnSeven.childElement[child].style.backgroundColor == "red") {
          boardMap[rows][6] = 1;
        } else if (
          columnSeven.childElement[child].style.backgroundColor == "black"
        ) {
          boardMap[rows][6] = 2;
        }
      }
    }
  }
}

function checkWin() {
  checkHorizontal();
  checkVertical();
  checkDiagonalDown();
  checkDiagonalUp();
}

function checkHorizontal() {
  // code goes here
}

function checkVertical() {
  // code goes here
}

function checkDiagonalDown() {
  // code goes here
}

function checkDiagonalUp() {
  // code goes here
}

function checkTie() {
  if (
    columnOne.childElementCount == 6 &&
    columnTwo.childElementCount == 6 &&
    columnThree.childElementCount == 6 &&
    columnFour.childElementCount == 6 &&
    columnFive.childElementCount == 6 &&
    columnSix.childElementCount == 6 &&
    columnSeven.childElementCount == 6
  ) {
    let heading = document.getElementById("heading");
    let displayTie = document.createElement("div");
    displayTie.innerText = "Tie game!";
    heading.append(displayTie);
  }
}

function switchPlayer() {
  if (currentPlayer == 1) {
    currentPlayer = 2;
  } else if (currentPlayer == 2) {
    currentPlayer = 1;
  }
}

//   // check how many dics are already placed in column, with discs already appended to squares in column
//   // if there are already six discs in that column, return and do not allow new disc to be placed
//   // check who's turn it is to drop piece, either red or black
//   // add newest placed disc to top of stack of previous discs in clicked column, and add newest appended square Number(id) to playerSelection array
//   // check to see if there is a win for player who just made move checkWin() by checking playerSelection array for subsequent numbers... either four vertically (within column, so algorithm checks whether there are four in a row where each Number(id) is 10 apart), four horizontally (across columns, where each Number(id) is 1 apart), or four diagonally (either diagonally right (each Number(id) is 9 apart) or diagonally left (each Number(id) is 11 apart))... so basically, checks whether four in a row of each id separated by 1, 10, 9, or 11
//   //...or checkDraw(), if all columns are full and no win, then there is a draw
//   // if there is no win or draw, then switch turns to next player, either black or red, switchPlayer()
// }

/*MVP - Minimum Viable Product
1. Initialize the game
    -board view ( markup in page
    -board model)
    User div's and classes to create the column and the disks
    -clickhandlers for the colunns
    -current player tracker
2. Take player input
    -know what color disc is being dropped
    -where is the disc being dropped ( which column)
    -is the column full
    drop the disc into the board
3. Game ending cnditions
    -tie?
    -win?
    - | |\/
    -display a game ending message

*/

/* // RANDY BASE CODE TO EDIT FROM
// vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv



let currentPlayer = 1 //1 or 2

const columnisFull = function (columnEl) {
    //TODO; get the column number off the element ID
    //TODO; Determine if the column is full
    return false // or true
}
const dropDisc = function(columnEl) {
    //TODO : Inser the correct color disc into the correct div
    //       DIV n the DOM and also add the disc in the 
    //       current spot in the board model

function switchPlayer() {
  // if current player is red, change to black
  // if current player is black, change to red
}

const isGameOver = function(boardMap) {
    //TODO: See if the game is a tie or win
    return false// or true
}
const dsiplayGameOverMessage = function() {
    //TODO: Display the appropriate game over message

// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    // RANDY BASE CODE TO EDIT FROM
    */

// check how many dics are already placed in column, with discs already appended to column
// if there are already six discs in that column, return and do not allow new disc to be placed
// check who's turn it is to drop piece, either red or black
// add newest placed disc to top of stack of previous discs in clicked column, and add newest appended square Number(id) to playerSelection array
// check to see if there is a win for player who just made move checkWin() by checking playerSelection array for subsequent numbers... either four vertically (within column, so algorithm checks whether there are four in a row where each Number(id) is 10 apart), four horizontally (across columns, where each Number(id) is 1 apart), or four diagonally (either diagonally right (each Number(id) is 9 apart) or diagonally left (each Number(id) is 11 apart))... so basically, checks whether four in a row of each id separated by 1, 10, 9, or 11
//...or checkDraw(), if all columns are full and no win, then there is a draw
// if there is no win or draw, then switch turns to next player, either black or red, switchPlayer()

/*
const displayTurnMessage = function(playerNum) {
    //TODO : Display a message saying whose turn it is
}
*/
