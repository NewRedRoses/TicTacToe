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
  return { getMarker, getName };
}
// Temp objects
const player1 = playerFactory("John", "X");
const player2 = playerFactory("Luke", "O");
