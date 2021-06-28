const div = require('./div');

test('divides 10 by 2 to equal 5', () => {
  expect(div(10, 2)).toBe(5);
});

test('divides 10 by 3 to equal 3.(3)', () => {
  expect(div(10, 3)).toBe(3.333);
});

test('divides 10 by 0 to get error', () => {
  expect(() => {
    div(10, 0)
  }).toThrow();
});
