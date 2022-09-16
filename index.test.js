const { canMove, findCurrentPositionIndex } = require('./index');

describe('findCurrentPositionIndex function :', () => {
  it('should return the current position index', () => {
    expect(findCurrentPositionIndex('A1')).toEqual([7, 0]);
  });
  it('should return the current position index', () => {
    expect(findCurrentPositionIndex('F5')).toEqual([3, 5]);
  });
});
