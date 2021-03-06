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
    console.log(boardMap);
    checkTie();
  }
  if (checkWin()) {
    heading.innerHTML = "";
    let resultMsg = document.getElementById("resultMsg");
    let playAgain = document.createElement("button");
    createButton(playAgain);
    if (currentPlayer == 1) {
      resultMsg.innerHTML = "Red won! <br />";
      resultMsg.append(playAgain);
    } else if (currentPlayer == 2) {
      resultMsg.innerHTML = "Black won! <br />";
      resultMsg.append(playAgain);
    }
  }
}

function createButton(playAgain) {
  playAgain.innerHTML = "Play again";
  playAgain.addEventListener("click", function () {
    location.reload();
  });
}

function updateBoardMap() {
  for (let rows = boardMap.length; rows >= 0; rows--) {
    if (columnOne.childElementCount > 0) {
      let columnOneChildren = columnOne.childElementCount;
      for (let child = 0; child < columnOneChildren; child++) {
        if (columnOne.children[child].className == "disc redDisc") {
          boardMap[child][0] = 1;
        } else if (columnOne.children[child].className == "disc blackDisc") {
          boardMap[child][0] = 2;
        }
      }
    }
    if (columnTwo.childElementCount > 0) {
      let columnTwoChildren = columnTwo.childElementCount;
      for (let child = 0; child < columnTwoChildren; child++) {
        if (columnTwo.children[child].className == "disc redDisc") {
          boardMap[child][1] = 1;
        } else if (columnTwo.children[child].className == "disc blackDisc") {
          boardMap[child][1] = 2;
        }
      }
    }
    if (columnThree.childElementCount > 0) {
      let columnThreeChildren = columnThree.childElementCount;
      for (let child = 0; child < columnThreeChildren; child++) {
        if (columnThree.children[child].className == "disc redDisc") {
          boardMap[child][2] = 1;
        } else if (columnThree.children[child].className == "disc blackDisc") {
          boardMap[child][2] = 2;
        }
      }
    }
    if (columnFour.childElementCount > 0) {
      let columnFourChildren = columnFour.childElementCount;
      for (let child = 0; child < columnFourChildren; child++) {
        if (columnFour.children[child].className == "disc redDisc") {
          boardMap[child][3] = 1;
        } else if (columnFour.children[child].className == "disc blackDisc") {
          boardMap[child][3] = 2;
        }
      }
    }
    if (columnFive.childElementCount > 0) {
      let columnFiveChildren = columnFive.childElementCount;
      for (let child = 0; child < columnFiveChildren; child++) {
        if (columnFive.children[child].className == "disc redDisc") {
          boardMap[child][4] = 1;
        } else if (columnFive.children[child].className == "disc blackDisc") {
          boardMap[child][4] = 2;
        }
      }
    }
    if (columnSix.childElementCount > 0) {
      let columnSixChildren = columnSix.childElementCount;
      for (let child = 0; child < columnSixChildren; child++) {
        if (columnSix.children[child].className == "disc redDisc") {
          boardMap[child][5] = 1;
        } else if (columnSix.children[child].className == "disc blackDisc") {
          boardMap[child][5] = 2;
        }
      }
    }
    if (columnSeven.childElementCount > 0) {
      let columnSevenChildren = columnSeven.childElementCount;
      for (let child = 0; child < columnSevenChildren; child++) {
        if (columnSeven.children[child].className == "disc redDisc") {
          boardMap[child][6] = 1;
        } else if (columnSeven.children[child].className == "disc blackDisc") {
          boardMap[child][6] = 2;
        }
      }
    }
  }
}

function checkWin() {
  if (
    checkHorizontal() ||
    checkVertical() ||
    checkDiagonalUp() ||
    checkDiagonalDown()
  ) {
    return true;
  }
}

function checkHorizontal() {
  for (let column = 6; column >= 0; column--) {
    for (let rows = 0; rows < 6; rows++) {
      if (
        boardMap[rows][column] == 1 &&
        boardMap[rows][column + 1] == 1 &&
        boardMap[rows][column + 2] == 1 &&
        boardMap[rows][column + 3] == 1
      ) {
        console.log("horizontal red win");
        return true;
      } else if (
        boardMap[rows][column] == 2 &&
        boardMap[rows][column + 1] == 2 &&
        boardMap[rows][column + 2] == 2 &&
        boardMap[rows][column + 3] == 2
      ) {
        console.log("horizontal black win");
        return true;
      }
    }
  }
}

function checkVertical() {
  for (let column = 6; column >= 0; column--) {
    for (let rows = 0; rows < boardMap.length - 1; rows++) {
      if (
        boardMap[rows][column] == 1 &&
        boardMap[rows + 1][column] == 1 &&
        boardMap[rows + 2][column] == 1 &&
        boardMap[rows + 3][column] == 1
      ) {
        console.log("vertical red win");
        return true;
      } else if (
        boardMap[rows][column] == 2 &&
        boardMap[rows + 1][column] == 2 &&
        boardMap[rows + 2][column] == 2 &&
        boardMap[rows + 3][column] == 2
      ) {
        console.log("vertical black win");
        return true;
      }
    }
  }
}

function checkDiagonalUp() {
  for (let column = 6; column >= 0; column--) {
    for (let rows = 0; rows < boardMap.length - 1; rows++) {
      if (
        boardMap[rows][column] == 1 &&
        boardMap[rows + 1][column + 1] == 1 &&
        boardMap[rows + 2][column + 2] == 1 &&
        boardMap[rows + 3][column + 3] == 1
      ) {
        console.log("Diagonal up red win");
        return true;
      } else if (
        boardMap[rows][column] == 2 &&
        boardMap[rows + 1][column + 1] == 2 &&
        boardMap[rows + 2][column + 2] == 2 &&
        boardMap[rows + 3][column + 3] == 2
      ) {
        console.log("Diagonal up black win");
        return true;
      }
    }
  }
}

function checkDiagonalDown() {
  for (let column = 6; column >= 0; column--) {
    for (let rows = 0; rows < 3; rows++) {
      if (
        boardMap[rows][column] == 1 &&
        boardMap[rows + 1][column - 1] == 1 &&
        boardMap[rows + 2][column - 2] == 1 &&
        boardMap[rows + 3][column - 3] == 1
      ) {
        console.log("Diagonal down red win");
        return true;
      } else if (
        boardMap[rows][column] == 2 &&
        boardMap[rows + 1][column - 1] == 2 &&
        boardMap[rows + 2][column - 2] == 2 &&
        boardMap[rows + 3][column - 3] == 2
      ) {
        console.log("Diagonal down black win");
        return true;
      }
    }
  }
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
    console.log("We have a tie.");
    let tieGame = document.getElementById("tieGame");
    let displayTie = document.createElement("div");
    displayTie.innerText = "Tie game!";
    tieGame.append(displayTie);
    let playAgain = document.createElement("button");
    createButton(playAgain);
    let heading = document.getElementById("heading");
    heading.innerHTML = "";
    tieGame.append(playAgain);
    return true;
  }
}

function switchPlayer() {
  if (currentPlayer == 1) {
    let heading = document.getElementById("heading");
    heading.innerHTML = "";
    currentPlayer = 2;
    let blackturn = document.createElement("div");
    blackturn.innerText = "Red Turn";
    heading.append(blackturn);
  } else if (currentPlayer == 2) {
    let heading = document.getElementById("heading");
    heading.innerHTML = "";
    currentPlayer = 1;
    let Redturn = document.createElement("div");
    Redturn.innerText = "Black Turn";
    heading.append(Redturn);
  }
}

function testCheckWin() {
  let testWin = checkWin();
  console.assert(
    checkWin() === true,
    JSON.stringify({ function: "checkWin()", expected: true, result: testWin })
  );
}
testCheckWin();
