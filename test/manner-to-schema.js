/**
 * Test dependencies.
 */

const test = require('tape')
const schema = require('..')


test('should generate default schema from basic endpoint', assert => {
  assert.plan(1)
  const obj = schema({
    get() {}
  })
  assert.deepEqual(obj, {
    get: {
      '/': {
        query: {},
        body: {}
      }
    }
  })

})
