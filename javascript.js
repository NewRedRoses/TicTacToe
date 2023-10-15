const GameBoard = (() => {
  let values = ["", "", "", "", "", "", "", "", ""];
  let turnCount = 0;
  let cellId;
  let gameIsFinished = false;
  const player1 = playerFactory("John", "X");
  const player2 = playerFactory("Luke", "O");

  //  maybe try changing it to be more specific instead of listening for the whole container
  const element = document.querySelector(".grid-container");
  element.addEventListener("click", (event) => getIdOnClick(event));

  function playerFactory(name, marker) {
    const getMarker = () => marker;
    const getName = () => name;
    const markOnClick = () => {
      if (checkIfValidSelection()) {
        determineWinner();
        // if (gameIsFinished) return;
        values[cellId] = getMarker();
        turnCount++;
        determineWinner();
      }
    };

    return { getName, getMarker, markOnClick };
  }

  const display = function () {
    values.forEach((item, index) => {
      const cell = document.getElementById(`${index}`);
      cell.innerHTML = item;
    });
  };
  const checkIfValidSelection = () => {
    if (values[cellId] !== "" || gameIsFinished) return false;
    else return true;
  };

  const informationDisplay = (msg) => {
    const gameStatus = document.querySelector(".game-status");
    gameStatus.innerHTML = msg;
  };

  const getIdOnClick = function (event) {
    const clickedItemClass = event.target.getAttribute("class");
    if (clickedItemClass === "cell") {
      cellId = event.target.getAttribute("id");
      checkRound();
    }
  };

  informationDisplay(`Make Your Selection To Start the Match`);
  const checkRound = () => {
    if (turnCount == 8) {
      player1.markOnClick();
      gameOver();
    } else if (turnCount % 2 == 0) {
      informationDisplay(`${player2.getName()}'s turn`);
      player1.markOnClick();
    } else {
      informationDisplay(`${player1.getName()}'s turn`);
      player2.markOnClick();
    }
    // console.log(turnCount);
    display();
  };
  const determineWinner = () => {
    /* 
    The game will determine a winner based on two conditions: 
    either 1 wins the game or there is a tie. 

    for somebody to win, they need to have at least 3 characters
    that are identical in either a diagonal order, horizontal or in vertical order.
  */
    // Vertical
    if (values[0] == values[3] && values[0] == values[6] && values[0] !== "") {
      console.log("win 0,3,6");
      gameOver();
    } else if (
      values[1] == values[4] &&
      values[1] == values[7] &&
      values[1] !== ""
    ) {
      console.log("win 1,4,7");
      gameOver();
    } else if (
      values[2] == values[5] &&
      values[2] == values[8] &&
      values[2] !== ""
    ) {
      console.log("win 2,5,8");
      gameOver();
    }

    // Horizontal
    if (values[0] == values[1] && values[0] == values[2] && values[0] !== "") {
      console.log("win 0,1,2");
      gameOver();
    } else if (
      values[3] == values[4] &&
      values[3] == values[5] &&
      values[3] !== ""
    ) {
      console.log("win 3,4,5");
      gameOver();
    } else if (
      values[6] == values[7] &&
      values[6] == values[8] &&
      values[6] !== ""
    ) {
      console.log("win 6,7,8");
      gameOver();
    }

    //Diagonal
    if (values[0] == values[4] && values[0] == values[8] && values[0] !== "") {
      console.log("win diag 0,4,8");
      gameOver();
    } else if (
      values[2] == values[4] &&
      values[2] == values[6] &&
      values[2] !== ""
    ) {
      console.log("win diag 2,4,6");
      gameOver();
    }
  };
  const gameOver = () => {
    // remove listener
    const element = document.querySelector(".grid-container");
    element.removeEventListener("click", (event) => getIdOnClick(event));
    gameIsFinished = true;
    // Aesthetic changes
    informationDisplay("Game Over");
    const background = document.querySelector(".gameBoard-container");
    background.style.backgroundColor = "#FF827E";
  };
  return {};
})();
