const { fn } = require('../lib')

test('nothing', () => {
  expect(fn(true)).toBe(true)
})
