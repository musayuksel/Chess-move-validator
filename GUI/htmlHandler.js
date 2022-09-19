import {
  movesOfRook,
  movesOfBishop,
  movesOfQueen,
  movesOfKing,
  movesOfKnight,
  movesOfPawn,
  BOARD,
} from '../index.js';

const board = document.getElementById('board');
const king = document.getElementById('king');
const queen = document.getElementById('queen');
const rook = document.getElementById('rook');
const bishop = document.getElementById('bishop');
const knight = document.getElementById('knight');
const blackPawn = document.getElementById('black-pawn');
const whitePawn = document.getElementById('white-pawn');

const pieceMoves = {
  Rook: movesOfRook,
  Bishop: movesOfBishop,
  Queen: movesOfQueen,
  King: movesOfKing,
  Knight: movesOfKnight,
  Pawn: movesOfPawn,
};
let selectedPiece = null;
let selectedColour = 'white';
// DELETE OLD SELECTED PIECE
const deleteOldSelectedPiece = () => {
  const oldSelectedPieces = document.getElementsByClassName('selected-piece');
  while (oldSelectedPieces.length > 0) {
    oldSelectedPieces[0].classList.remove('selected-piece');
  }
};

// SELECT PIECE
whitePawn.addEventListener('click', () => {
  deleteOldSelectedPiece();
  selectedPiece = 'Pawn';
  whitePawn.classList.toggle('selected-piece');
  drawBoard();
});
blackPawn.addEventListener('click', () => {
  deleteOldSelectedPiece();
  selectedPiece = 'Pawn';
  selectedColour = 'black';
  blackPawn.classList.toggle('selected-piece');
  drawBoard();
});
king.addEventListener('click', () => {
  deleteOldSelectedPiece();
  selectedPiece = 'King';
  king.classList.toggle('selected-piece');
  drawBoard();
});
queen.addEventListener('click', () => {
  deleteOldSelectedPiece();
  selectedPiece = 'Queen';
  queen.classList.toggle('selected-piece');
  drawBoard();
});
rook.addEventListener('click', () => {
  deleteOldSelectedPiece();
  selectedPiece = 'Rook';
  rook.classList.toggle('selected-piece');
  drawBoard();
});
bishop.addEventListener('click', () => {
  deleteOldSelectedPiece();
  selectedPiece = 'Bishop';
  bishop.classList.toggle('selected-piece');
  drawBoard();
});
knight.addEventListener('click', () => {
  deleteOldSelectedPiece();
  selectedPiece = 'Knight';
  knight.classList.toggle('selected-piece');
  drawBoard();
});

// DRAW BOARD
function drawBoard() {
  board.innerHTML = '';
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
      console.log({ pieceMoves, selectedPiece, selectedColour });
      // const possibleMoves = movesOfRook(e.target.id, 'white');
      const possibleMoves = pieceMoves[selectedPiece](
        e.target.id,
        selectedColour
      );
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
}
