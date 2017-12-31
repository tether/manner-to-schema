
/**
 * This is a simple description.
 *
 * @param {Object} service
 * @api public
 */

module.exports = function test (service) {
  const schema = {}
  Object.keys(service).map(method => {
    const value = service[method]
    schema[method] = typeof value === 'function'
      ? {'/': parameters()}
      : path(value)
  })
  return schema
}


/**
 * Create schema for multiple paths in an object.
 *
 * Path alias are ignored.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */

function path (obj) {
  const schema = {}
  Object.keys(obj).map(path => {
    if (typeof obj[path] !== 'string') {
      schema[path] = parameters()
    }
  })
  return schema
}


/**
 * Generate schema default parameters.
 *
 * @return {Object}
 * @api private
 */

function parameters () {
  return {
    query: {},
    body: {},
    middleware: []
  }
}
