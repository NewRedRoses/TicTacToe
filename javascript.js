const GameBoard = (() => {
  let values = ["O", "X", "O", "X", "O", "X", "X", "O", "X"];
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
  const getName = () => name;
  const selectCell = function () {
    const element = document.querySelector(".grid-container"); 
    element.addEventListener("click", (event) => {
      const clickedItemClass = event.target.getAttribute("class");
      // Ingnore whitespace between cells
      if (clickedItemClass === "cell") {
        console.log(event.target.getAttribute("id"));
      }
    });
  };
  return { getMarker, getName, selectCell};
}
// Temp objects
const player1 = playerFactory("John", "X");
const player2 = playerFactory("Luke", "O");

console.log(player1.selectCell() );