const GameBoard = (() => {
  // let values = ["O", "X", "O", "X", "O", "X", "X", "O", "X"];
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
      if (checkIfValidSelection()) values[cellId] = getMarker();
    };

    return { getName, getMarker, markOnClick };
  }

  const display = function () {
    values.forEach((item, index) => {
      const cell = document.getElementById(`${index}`);
      cell.innerHTML = item;
    });
  };
  const checkIfValidSelection = (id) => {
    console.log("clicked id: ", values[id]);
    if (values[id] != "X" || values[id] != "O") return true;
    else return false;
  };

  const getIdOnClick = function (event) {
    // Need to use this thing since I'm using a callback
    const clickedItemClass = event.target.getAttribute("class");
    if (clickedItemClass === "cell") {
      // console.log(event.target);
      cellId = event.target.getAttribute("id");
      console.log(values);
      checkRound();
    }
  };
  const resetListener = () => {
    const element = document.querySelector(".grid-container");
    element.removeEventListener("click", (event) =>
      getIdOnClick(event, player)
    );
  };
  const checkRound = () => {
    // console.log(turnCount);
    if (turnCount % 2 == 0) {
      player1.markOnClick();
    } else {
      player2.markOnClick();
    }
    turnCount++;
    display();
  };
  const start = () => {
    display();
  };
  return {
    start,
    checkRound,
    display,
    values,
    checkIfValidSelection,
  };
})();

GameBoard.start();
