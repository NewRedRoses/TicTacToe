const GameBoard = (() => {
  let gameboard = [];
  return { gameboard };
})();

function playerFactory(name, marker) {
  const getMarker = () => marker;
  const getName = () => name;
  return { getMarker, getName };
}
// Temp objects
const player1 = playerFactory("John", "X");
const player2 = playerFactory("Luke", "O");