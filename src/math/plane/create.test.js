const test = require('ava')
const { create } = require('./index')

test('plane: create() should return a plane with initial values', (t) => {
  const obs = create()
  const exp = Float32Array.from([0, 0, 0, 0])
  t.deepEqual(obs, exp)
})
