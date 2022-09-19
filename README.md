# Live demo => [here...](https://chess-move-validate.netlify.app/)

# Chess-move-validator

The task this week is to create a function which takes the name of a chess piece, its position on a board and an intended destination. The function should return `true` if the piece can move to the destination, or ` false ` if it can't. You can assume that the piece is the only piece on the board and that it is a White piece.
    
# Rewards:
:four:  Points are awarded for a working algorithm capable of validating these sample moves.

:three:  Further points are awarded for illustrating the movement with a simple user interface.

:two:  Further points are awarded for providing at least one unit test.

:one:  Further point is awarded for providing support for the Black pieces (your function should accept an additional 'colour' parameter).

## Notes:
:point_right:  A standard chess board is arranged with the White pieces occupying rows 1 & 2, Black pieces occupying rows 8 & 7, [like here.](https://www.chessset.com/assets/images/No%206-4.jpg)

:point_right:  [Here's a handy guide](https://elzr.com/blag/img/2018/chess-pieces/chess-moves.png) to how each piece can move in a standard game of chess.

:point_right:  **Don't forget** that a pawn can move 2 squares when starting from its initial row.

## Example:
```
canMove("Rook", "A8", "D8") //  true,
canMove("Queen", "C4", "D6") //  false.
```
## Install 
```
yarn
```

## Testing
```
yarn test
```

## To Run the function
```
node index.js
```

## Good luck :)
