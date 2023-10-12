const GameBoard = (() => {
  // let values = ["O", "X", "O", "X", "O", "X", "X", "O", "X"];
  let values = ["", "", "", "", "", "", "", "", ""];
  const display = function () {
    values.forEach((item, index) => {
      const cell = document.getElementById(`c${index}`);
      cell.innerHTML = item;
    });
  };
  return { display };
})();

GameBoard.display();
function playerFactory(name, marker) {
  const getMarker = () => marker;
  let cell;
  const getCellId = function (callback) {
    const element = document.querySelector(".grid-container");
    let selectedCell;
    element.addEventListener("click", (event) => {
      const clickedItemClass = event.target.getAttribute("class");
      // Ingnore whitespace between cells
      if (clickedItemClass === "cell") {
        cell = event.target.getAttribute("id");
        callback(cell);
      }
    });
  };
  const setMarkerOnClick = function () {
    // Need to use this thing since im using a callback
    getCellId(function (id) {
      cell = id;
      const container = document.getElementById(cell);
      container.innerHTML = marker;
    });
  };
  return { setMarkerOnClick };
}
// Temp objects
const player1 = playerFactory("John", "X");
const player2 = playerFactory("Luke", "O");

player1.setMarkerOnClick();