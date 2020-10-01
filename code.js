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
  if (checkWin()) {
    let heading = document.getElementById("heading");
    heading.innerHTML = "";
    let displayWin = document.createElement("div");
    if (curentPlayer == 1) {
      displayWin.innerText = "Red won!";
      heading.append(displayWin);
    } else if (curentPlayer == 2) {
      displayWin.innerText = "Black won!";
      heading.append(displayWin);
    }
  }

  checkTie();
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
  checkHorizontal();
  checkVertical();
  checkDiagonalDown();
  checkDiagonalUp();
}

function checkHorizontal() {
  for (let rows = boardMap.length - 1; rows >= 0; rows--) {
    for (let column = 0; column < rows.length; column++) {
      if (
        boardMap[rows][column] == 1 &&
        boardMap[rows][column + 1] == 1 &&
        boardMap[rows][column + 2] == 1 &&
        boardMap[rows][column + 3] == 1
      ) {
        return true;
      }
      if (
        boardMap[rows][column] == 2 &&
        boardMap[rows][column + 1] == 2 &&
        boardMap[rows][column + 2] == 2 &&
        boardMap[rows][column + 3] == 2
      ) {
        return true;
      }
    }
  }
}

function checkVertical() {
  for (let rows = boardMap.length - 1; rows >= 0; rows--) {
    for (let column = 0; column < rows.length; column++) {
      if (
        boardMap[rows][column] == 1 &&
        boardMap[rows + 1][column] == 1 &&
        boardMap[rows + 2][column] == 1 &&
        boardMap[rows + 3][column] == 1
      ) {
        return true;
      }
      if (
        boardMap[rows][column] == 2 &&
        boardMap[rows + 1][column] == 2 &&
        boardMap[rows + 2][column] == 2 &&
        boardMap[rows + 3][column] == 2
      ) {
        return true;
      }
    }
  }
}

function checkDiagonalUp() {
  for (let rows = boardMap.length - 1; rows >= 0; rows--) {
    for (let column = 0; column < rows.length; column++) {
      if (
        boardMap[rows][column] == 1 &&
        boardMap[rows + 1][column + 1] == 1 &&
        boardMap[rows + 2][column + 2] == 1 &&
        boardMap[rows + 3][column + 3] == 1
      ) {
        return true;
      }
      if (
        boardMap[rows][column] == 2 &&
        boardMap[rows + 1][column + 1] == 2 &&
        boardMap[rows + 2][column + 2] == 2 &&
        boardMap[rows + 3][column + 3] == 2
      ) {
        return true;
      }
    }
  }
}

function checkDiagonalDown() {
  for (let rows = boardMap.length - 1; rows >= 0; rows--) {
    for (let column = 0; column < rows.length; column++) {
      if (
        boardMap[rows][column] == 1 &&
        boardMap[rows - 1][column + 1] == 1 &&
        boardMap[rows - 2][column + 2] == 1 &&
        boardMap[rows - 3][column + 3] == 1
      ) {
        return true;
      }
      if (
        boardMap[rows][column] == 2 &&
        boardMap[rows - 1][column + 1] == 2 &&
        boardMap[rows - 2][column + 2] == 2 &&
        boardMap[rows - 3][column + 3] == 2
      ) {
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
    let tieGame = document.getElementById("tieGame");
    let displayTie = document.createElement("div");
    displayTie.innerText = "Tie game!";
    tieGame.append(displayTie);
    let heading = document.getElementById("heading");
    heading.innerHTML = "";
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
