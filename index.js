const chessBoard = [
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

const movesOfRock = (currentPosition) => {
  const [rowIndex, columnIndex] = findCurrentPositionIndex(currentPosition);
  const moves = [];
  for (let i = rowIndex - 1; i >= 0; i--) {
    moves.push(chessBoard[i][columnIndex]); //up
  }
  for (let i = rowIndex + 1; i < chessBoard.length; i++) {
    moves.push(chessBoard[i][columnIndex]); //down
  }
  for (let i = columnIndex - 1; i >= 0; i--) {
    moves.push(chessBoard[rowIndex][i]); //left
  }
  for (let i = columnIndex + 1; i < chessBoard[rowIndex].length; i++) {
    moves.push(chessBoard[rowIndex][i]); //right
  }
  return moves;
};

const movesOfBishop = (currentPosition) => {
  const [rowIndex, columnIndex] = findCurrentPositionIndex(currentPosition);
  const moves = [];
  for (let i = rowIndex - 1, j = columnIndex - 1; i >= 0 && j >= 0; i--, j--) {
    moves.push(chessBoard[i][j]); //up left
  }
  for (
    let i = rowIndex - 1, j = columnIndex + 1;
    i >= 0 && j < chessBoard[rowIndex].length;
    i--, j++
  ) {
    moves.push(chessBoard[i][j]); //up right
  }
  for (
    let i = rowIndex + 1, j = columnIndex - 1;
    i < chessBoard.length && j >= 0;
    i++, j--
  ) {
    moves.push(chessBoard[i][j]); //down left
  }
  for (
    let i = rowIndex + 1, j = columnIndex + 1;
    i < chessBoard.length && j < chessBoard[rowIndex].length;
    i++, j++
  ) {
    moves.push(chessBoard[i][j]); //down right
  }
  return moves;
};

console.log(movesOfBishop('D5'));

function canMove(nameOfPiece, currentPosition, intendedDestination) {
  console.log('first');
  return 'test';
}
module.exports = {
  canMove,
  findCurrentPositionIndex,
  movesOfRock,
  movesOfBishop,
};
