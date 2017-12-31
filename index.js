
/**
 * This is a simple description.
 *
 * @param {Object} service
 * @api public
 */

module.exports = function (service) {
  const schema = {}
  Object.keys(service).map(method => {
    const value = service[method]
    const type = typeof value
    if (type === 'function') {
      schema[method] = {
        '/': {
          query: {},
          body: {}
        }
      }
    } else if (type === 'object') {
      Object.keys(value).map(path => {
        schema[method] = {
          [path]: {
            query: {},
            body: {}
          }
        }
      })
    }
  })
  return schema
}
