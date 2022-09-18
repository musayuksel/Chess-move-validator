const {
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
} = require('./index');

describe('findCurrentPositionIndex function :', () => {
  it('should return the current position index', () => {
    expect(findCurrentPositionIndex('A1')).toEqual([7, 0]);
  });
  it('should return the current position index', () => {
    expect(findCurrentPositionIndex('F5')).toEqual([3, 5]);
  });
});

describe('oneUp function : ', () => {
  it('D5 should move to the D6', () => {
    const [rowIndex, colIndex] = findCurrentPositionIndex('D5');
    expect(oneUp(rowIndex, colIndex)).toEqual('D6');
  });
});

describe('oneDown function : ', () => {
  it('D5 should move to the D4', () => {
    const [rowIndex, colIndex] = findCurrentPositionIndex('D5');
    expect(oneDown(rowIndex, colIndex)).toEqual('D4');
  });
});

describe('oneLeft function : ', () => {
  it('D5 should move to the C5', () => {
    const [rowIndex, colIndex] = findCurrentPositionIndex('D5');
    expect(oneLeft(rowIndex, colIndex)).toEqual('C5');
  });
});

describe('oneRight function : ', () => {
  it('D5 should move to the E5', () => {
    const [rowIndex, colIndex] = findCurrentPositionIndex('D5');
    expect(oneRight(rowIndex, colIndex)).toEqual('E5');
  });
});

describe('oneUpLeft function : ', () => {
  it('D5 should move to the C6', () => {
    const [rowIndex, colIndex] = findCurrentPositionIndex('D5');
    expect(oneUpLeft(rowIndex, colIndex)).toEqual('C6');
  });
});

describe('oneUpRight function : ', () => {
  it('D5 should move to the E6', () => {
    const [rowIndex, colIndex] = findCurrentPositionIndex('D5');
    expect(oneUpRight(rowIndex, colIndex)).toEqual('E6');
  });
});

describe('oneDownLeft function : ', () => {
  it('D5 should move to the C4', () => {
    const [rowIndex, colIndex] = findCurrentPositionIndex('D5');
    expect(oneDownLeft(rowIndex, colIndex)).toEqual('C4');
  });
});

describe('oneDownRight function : ', () => {
  it('D5 should move to the E4', () => {
    const [rowIndex, colIndex] = findCurrentPositionIndex('D5');
    expect(oneDownRight(rowIndex, colIndex)).toEqual('E4');
  });
});

describe('movesOfRook function :', () => {
  it('should return all possible moves of the Rook', () => {
    expect(movesOfRook('D5')).toEqual([
      'D6',
      'D7',
      'D8',
      'D4',
      'D3',
      'D2',
      'D1',
      'C5',
      'B5',
      'A5',
      'E5',
      'F5',
      'G5',
      'H5',
    ]);
  });

  it('should return all possible moves of the Rook', () => {
    expect(movesOfRook('A8')).toEqual([
      'A7',
      'A6',
      'A5',
      'A4',
      'A3',
      'A2',
      'A1',
      'B8',
      'C8',
      'D8',
      'E8',
      'F8',
      'G8',
      'H8',
    ]);
  });
});

describe('movesOfBishop function :', () => {
  it('should return all possible moves of the Bishop', () => {
    expect(movesOfBishop('D5')).toEqual([
      'C6',
      'B7',
      'A8',
      'E6',
      'F7',
      'G8',
      'C4',
      'B3',
      'A2',
      'E4',
      'F3',
      'G2',
      'H1',
    ]);
  });

  it('should return all possible moves of the Bishop', () => {
    expect(movesOfBishop('A8')).toEqual([
      'B7',
      'C6',
      'D5',
      'E4',
      'F3',
      'G2',
      'H1',
    ]);
  });
});

describe('movesOfQueen function :', () => {
  it('should return all possible moves of the Queen', () => {
    expect(movesOfQueen('D4')).toEqual([
      'D5',
      'D6',
      'D7',
      'D8',
      'D3',
      'D2',
      'D1',
      'C4',
      'B4',
      'A4',
      'E4',
      'F4',
      'G4',
      'H4',
      'C5',
      'B6',
      'A7',
      'E5',
      'F6',
      'G7',
      'H8',
      'C3',
      'B2',
      'A1',
      'E3',
      'F2',
      'G1',
    ]);
  });
});

describe('movesOfKing function :', () => {
  it('should return all possible moves of the King', () => {
    expect(movesOfKing('F5')).toEqual([
      'F6',
      'E6',
      'G6',
      'F4',
      'E4',
      'G4',
      'E5',
      'G5',
    ]);
  });
});

describe('movesOfKnight function :', () => {
  it('should return all possible moves of the Knight', () => {
    expect(movesOfKnight('D4')).toEqual([
      'C6',
      'E6',
      'C2',
      'E2',
      'B5',
      'B3',
      'F5',
      'F3',
    ]);
  });
});

describe('movesOfPawn function :', () => {
  it('should return all possible moves of the Pawn', () => {
    expect(movesOfPawn('F2')).toEqual(['F3', 'F4']);
  });

  it('should return all possible moves of the Pawn', () => {
    expect(movesOfPawn('E7')).toEqual(['E8']);
  });

  it('should return an Error if Pawn is row 1', () => {
    const callMovesOfPawn = () => movesOfPawn('A1');
    expect(callMovesOfPawn).toThrowError(
      new Error('Pawn position is invalid!!!')
    );
  });
});

describe('canMove function ----->', () => {
  it("'Rook', 'A8', 'H8' should return TRUE", () => {
    expect(canMove('Rook', 'A8', 'H8')).toEqual(true);
  });

  it("'King', 'D4', 'E5' should return TRUE", () => {
    expect(canMove('King', 'D4', 'E5')).toEqual(true);
  });

  it("'Bishop', 'A7', 'G1' should return TRUE", () => {
    expect(canMove('Bishop', 'A7', 'G1')).toEqual(true);
  });

  it("'Queen', 'C4', 'D6' should return FALSE", () => {
    expect(canMove('Queen', 'C4', 'D6')).toEqual(false);
  });

  it("'Knight', 'C4', 'A3' should return TRUE", () => {
    expect(canMove('Knight', 'C4', 'A3')).toEqual(true);
  });

  it("'Pawn', 'A2', 'A3' should return TRUE", () => {
    expect(canMove('Pawn', 'A2', 'A3')).toEqual(true);
  });

  it("'Pawn', 'A2', 'A4' should return TRUE", () => {
    expect(canMove('Pawn', 'A2', 'A4')).toEqual(true);
  });
});
