const GameBoard = (() => {
  let values = ["", "", "", "", "", "", "", "", ""];
  let turnCount = 0;
  let cellId;

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
        values[cellId] = getMarker();
        turnCount++;
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
    if (values[cellId] === "") return true;
    else return false;
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

  informationDisplay(`Click To Start the Match`);
  const checkRound = () => {
    // // console.log(turnCount);
    if (turnCount == 9) {
      gameOver();
    } else if (turnCount % 2 == 0) {
      informationDisplay(`${player2.getName()}'s turn`);
      player1.markOnClick();
    } else {
      informationDisplay(`${player1.getName()}'s turn`);
      player2.markOnClick();
    }
    console.log(turnCount);
    display();
  };

  const gameOver = () => {
    const element = document.querySelector(".grid-container");
    element.removeEventListener("click", (event) => getIdOnClick(event));

    const background = document.querySelector(".gameBoard-container");
    background.style.backgroundColor = "red";

    informationDisplay("Game Over");
  };
  return {};
})();
