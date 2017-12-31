
/**
 * This is a simple description.
 *
 * @param {Object} service
 * @api public
 */

module.exports = function (service) {
  const schema = {}
  Object.keys(service).map(method => {
    const type = typeof service[method]
    if (type === 'function') {
      schema[method] = {
        '/': {
          query: {},
          body: {}
        }
      }
    } else {
      Object.keys(service[method]).map(path => {
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
