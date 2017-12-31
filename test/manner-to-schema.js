/**
 * Test dependencies.
 */

const test = require('tape')
const schema = require('..')


test('should generate default schema from single and simple endpoint', assert => {
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


test('should generate default schema from multiple simple endpoints', assert => {
  assert.plan(1)
  const obj = schema({
    get() {},
    post() {}
  })
  assert.deepEqual(obj, {
    get: {
      '/': {
        query: {},
        body: {}
      }
    },
    post: {
      '/': {
        query: {},
        body: {}
      }
    }
  })

})
