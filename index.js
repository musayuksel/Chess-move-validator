const BOARD = [
  ['A8', 'B8', 'C8', 'D8', 'E8', 'F8', 'G8', 'H8'],
  ['A7', 'B7', 'C7', 'D7', 'E7', 'F7', 'G7', 'H7'],
  ['A6', 'B6', 'C6', 'D6', 'E6', 'F6', 'G6', 'H6'],
  ['A5', 'B5', 'C5', 'D5', 'E5', 'F5', 'G5', 'H5'],
  ['A4', 'B4', 'C4', 'D4', 'E4', 'F4', 'G4', 'H4'],
  ['A3', 'B3', 'C3', 'D3', 'E3', 'F3', 'G3', 'H3'],
  ['A2', 'B2', 'C2', 'D2', 'E2', 'F2', 'G2', 'H2'],
  ['A1', 'B1', 'C1', 'D1', 'E1', 'F1', 'G1', 'H1'],
];

const findCurrentPositionIndex = (currentPosition) => {
  const rowIndex = '87654321'.indexOf(currentPosition[1]);
  const columnIndex = 'ABCDEFGH'.indexOf(currentPosition[0]);
  return [rowIndex, columnIndex];
};

const oneUp = (rowIndex, colIndex) => BOARD[rowIndex - 1]?.[colIndex] || '';

const oneDown = (rowIndex, colIndex) => BOARD[rowIndex + 1]?.[colIndex] || '';

const oneLeft = (rowIndex, colIndex) => BOARD[rowIndex]?.[colIndex - 1] || '';

const oneRight = (rowIndex, colIndex) => BOARD[rowIndex]?.[colIndex + 1] || '';

const oneUpLeft = (rowIdx, colIdx) => BOARD[rowIdx - 1]?.[colIdx - 1] || '';

const oneUpRight = (rowIdx, colIdx) => BOARD[rowIdx - 1]?.[colIdx + 1] || '';

const oneDownLeft = (rowIdx, colIdx) => BOARD[rowIdx + 1]?.[colIdx - 1] || '';

const oneDownRight = (rowIdx, colIdx) => BOARD[rowIdx + 1]?.[colIdx + 1] || '';

const movesOfRock = (currentPosition) => {
  const [rowIndex, columnIndex] = findCurrentPositionIndex(currentPosition);
  const moves = [];
  for (let i = rowIndex; i > 0; i--) {
    moves.push(oneUp(i, columnIndex)); //up
  }
  for (let i = rowIndex; i < 7; i++) {
    moves.push(oneDown(i, columnIndex)); //down
  }
  for (let i = columnIndex; i > 0; i--) {
    moves.push(oneLeft(rowIndex, i)); //left
  }
  for (let i = columnIndex; i < 7; i++) {
    moves.push(oneRight(rowIndex, i)); //right
  }
  return moves;
};

const movesOfBishop = (currentPosition) => {
  const [rowIndex, columnIndex] = findCurrentPositionIndex(currentPosition);
  const moves = [];
  for (let i = rowIndex, j = columnIndex; i > 0 && j > 0; i--, j--) {
    moves.push(oneUpLeft(i, j)); //up left
  }
  for (let i = rowIndex, j = columnIndex; i > 0 && j < 7; i--, j++) {
    moves.push(oneUpRight(i, j)); //up right
  }
  for (let i = rowIndex, j = columnIndex; i < 7 && j > 0; i++, j--) {
    moves.push(oneDownLeft(i, j)); //down left
  }
  for (let i = rowIndex, j = columnIndex; i < 7 && j < 7; i++, j++) {
    moves.push(oneDownRight(i, j)); //down right
  }
  return moves;
};

const movesOfQueen = (currentPosition) => [
  ...movesOfRock(currentPosition),
  ...movesOfBishop(currentPosition),
];

const movesOfKing = (currentPosition) => {
  const [rowIndex, columnIndex] = findCurrentPositionIndex(currentPosition);
  const moves = [];
  moves.push(oneUp(rowIndex, columnIndex)); //up
  moves.push(oneUpLeft(rowIndex, columnIndex)); //up left
  moves.push(oneUpRight(rowIndex, columnIndex)); //up right

  moves.push(oneDown(rowIndex, columnIndex)); //down
  moves.push(oneDownLeft(rowIndex, columnIndex)); //down left
  moves.push(oneDownRight(rowIndex, columnIndex)); //down right

  moves.push(oneLeft(rowIndex, columnIndex)); //left
  moves.push(oneRight(rowIndex, columnIndex)); //right
  // delete empty strings
  return moves.filter((move) => move);
};

const movesOfKnight = (currentPosition) => {
  const [rowIndex, columnIndex] = findCurrentPositionIndex(currentPosition);
  const moves = [];
  moves.push(oneUpLeft(rowIndex - 1, columnIndex)); //2-up left
  moves.push(oneUpRight(rowIndex - 1, columnIndex)); //2-up right
  moves.push(oneDownLeft(rowIndex + 1, columnIndex)); //2-down left
  moves.push(oneDownRight(rowIndex + 1, columnIndex)); //2-down right
  moves.push(oneUpLeft(rowIndex, columnIndex - 1)); //up 2-left
  moves.push(oneDownLeft(rowIndex, columnIndex - 1)); //down 2-left
  moves.push(oneUpRight(rowIndex, columnIndex + 1)); //up 2-right
  moves.push(oneDownRight(rowIndex, columnIndex + 1)); //1down 2-right
  //   delete empty strings
  return moves.filter((move) => move);
};

const movesOfPawn = (currentPosition) => {
  const [rowIndex, columnIndex] = findCurrentPositionIndex(currentPosition);
  const moves = [];
  if (rowIndex === 7) throw Error('Pawn position is invalid!!!');
  moves.push(oneUp(rowIndex, columnIndex)); //up
  rowIndex === 6 && moves.push(oneUp(rowIndex - 1, columnIndex)); //up 2
  // delete empty strings
  return moves.filter((move) => move);
};

console.log(movesOfPawn('A2'), '<--movesOfPawn');

function canMove(nameOfPiece, currentPosition, intendedDestination) {
  console.log('first');
  return 'test';
}
module.exports = {
  canMove,
  findCurrentPositionIndex,
  oneUp,
  oneDown,
  oneLeft,
  oneRight,
  oneUpLeft,
  oneUpRight,
  oneDownLeft,
  oneDownRight,
  movesOfRock,
  movesOfBishop,
  movesOfQueen,
  movesOfKing,
  movesOfKnight,
  movesOfPawn,
};
