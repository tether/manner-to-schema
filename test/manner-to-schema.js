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

test('should generate schema with the right path', assert => {
  assert.plan(1)
  const obj = schema({
    get: {
      '/:name': () => {}
    }
  })
  assert.deepEqual(obj, {
    get: {
      '/:name': {
        query: {},
        body: {}
      }
    }
  })
})

test('should not generate schema for paths alias', assert => {
  assert.plan(1)
  const obj = schema({
    get: {
      '/hello': '/world',
      '/:name': () => {}
    }
  })
  assert.deepEqual(obj, {
    get: {
      '/:name': {
        query: {},
        body: {}
      }
    }
  })
})
