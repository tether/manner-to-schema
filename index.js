
/**
 * This is a simple description.
 *
 * @param {Object} service
 * @api public
 */

module.exports = function (service) {
  const schema = {}
  Object.keys(service).map(method => {
    schema[method] = {
      '/': {
        query: {},
        body: {}
      }
    }
  })
  return schema
}
