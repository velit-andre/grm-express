const _ = require('lodash')
const Exemplo = require('./funcionario.schema')


function filhos(req, res) {
    res.send('Os filhos de joão')
}

function netos(req, res) {
    res.send('Os netos de joão')
}

module.exports = { filhos, netos }
