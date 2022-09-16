const canMove = require('./index');

describe('Test', () => {
  it('should export a function', () => {
    expect(canMove('Rook', 'A8', 'D8')).toBe('test');
  });
});
