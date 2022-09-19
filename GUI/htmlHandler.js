import {
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
  movesOfRook,
  movesOfBishop,
  movesOfQueen,
  movesOfKing,
  movesOfKnight,
  movesOfPawn,
  BOARD,
} from '../index.js';

const board = document.getElementById('board');

// DRAW BOARD
const fragment = document.createDocumentFragment();
BOARD.flat(1).forEach((row, rowIndex) => {
  const eachSquare = document.createElement('div');
  eachSquare.classList.add('square');
  eachSquare.classList.add(
    `${(rowIndex + parseInt(rowIndex / 8)) % 2 === 0 ? 'white' : 'black'}`
  );
  eachSquare.innerText = row;
  eachSquare.id = `${row}`;
  eachSquare.addEventListener('click', (e) => {
    const clickedSquare = e.target;
    const possibleMoves = movesOfRook(e.target.id, 'white');
    console.log(possibleMoves);
    // DELETE PREVIOUS MOVES
    const oldChoice = document.getElementsByClassName('can-move');
    const oldSelected = document.getElementsByClassName('selected');
    while (oldChoice.length > 0 || oldSelected.length > 0) {
      oldSelected[0]?.classList.remove('selected');
      oldChoice[0]?.classList.remove('can-move');
    }
    clickedSquare.classList.toggle('selected');
    possibleMoves.forEach((move) => {
      document.getElementById(move).classList.add('can-move');
    });
  });
  fragment.appendChild(eachSquare);
});
board.appendChild(fragment);
