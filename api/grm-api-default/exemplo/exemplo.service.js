const _ = require('lodash')
const Exemplo = require('./exemplo.schema')

Exemplo.methods(['get', 'post', 'put', 'delete'])
Exemplo.updateOptions({new: true, runValidators: true})

Exemplo.after('post', sendErrorsOrNext).after('put', sendErrorsOrNext)

function sendErrorsOrNext(req, res, next) {
  const bundle = res.locals.bundle

  if(bundle.errors) {
    var errors = parseErrors(bundle.errors)
    res.status(500).json({errors})
  } else {
    next()
  }
}

function parseErrors(nodeRestfulErrors) {
  const errors = []
  _.forIn(nodeRestfulErrors, error => errors.push(error.message))
  return errors
}

Exemplo.route('count', function(req, res, next) {
  Exemplo.count(function(error, value) {
    if(error) {
      res.status(500).json({errors: [error]})
    } else {
      res.json({value})
    }
  })
})

module.exports = Exemplo
