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
  movesOfRock,
  movesOfBishop,
  movesOfQueen,
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

describe('movesOfRock function :', () => {
  it('should return all possible moves of the Rock', () => {
    expect(movesOfRock('D5')).toEqual([
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

  it('should return all possible moves of the Rock', () => {
    expect(movesOfRock('A8')).toEqual([
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
