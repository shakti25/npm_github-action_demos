const operations = require('./index');

test('add 1 + 2 to equal 3', () => {
    expect(operations.sum(1, 2)).toBe(3);
});

test('add 2 + 3 to equal 5', () => {
    expect(operations.sum(2, 3)).toBe(5);
});

test('subtract 1 - 1 equal 0', () => {
    expect(operations.subtraction(1, 1)).toBe(0);
});

test('subtract 2 - 1 equal 1', () => {
    expect(operations.subtraction(2, 1)).toBe(2);
});
