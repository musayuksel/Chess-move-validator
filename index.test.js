const { canMove, findCurrentPositionIndex, movesOfRock } = require('./index');

describe('findCurrentPositionIndex function :', () => {
  it('should return the current position index', () => {
    expect(findCurrentPositionIndex('A1')).toEqual([7, 0]);
  });
  it('should return the current position index', () => {
    expect(findCurrentPositionIndex('F5')).toEqual([3, 5]);
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
