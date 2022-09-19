import {
  movesOfRook,
  movesOfBishop,
  movesOfQueen,
  movesOfKing,
  movesOfKnight,
  movesOfPawn,
  BOARD,
} from './index.js';

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
  whitePawn.classList.toggle('selected-piece');
  drawBoard('Pawn', 'white');
});
blackPawn.addEventListener('click', () => {
  deleteOldSelectedPiece();
  blackPawn.classList.toggle('selected-piece');
  drawBoard('Pawn', 'black');
});
king.addEventListener('click', () => {
  deleteOldSelectedPiece();
  king.classList.toggle('selected-piece');
  drawBoard('King');
});
queen.addEventListener('click', () => {
  deleteOldSelectedPiece();
  queen.classList.toggle('selected-piece');
  drawBoard('Queen');
});
rook.addEventListener('click', () => {
  deleteOldSelectedPiece();
  rook.classList.toggle('selected-piece');
  drawBoard('Rook');
});
bishop.addEventListener('click', () => {
  deleteOldSelectedPiece();
  bishop.classList.toggle('selected-piece');
  drawBoard('Bishop');
});
knight.addEventListener('click', () => {
  deleteOldSelectedPiece();
  knight.classList.toggle('selected-piece');
  drawBoard('Knight');
});

// DRAW BOARD
function drawBoard(selectedPiece, selectedColour = 'white') {
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
      const possibleMoves = pieceMoves[selectedPiece](
        e.target.id,
        selectedColour
      );
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
