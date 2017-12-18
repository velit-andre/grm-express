
const extend = require('./escola.extend')
const Schema = require('./escola.schema')


module.exports = {
    schema: Schema,
    methods: ['get', 'post', 'put', 'delete'],
    extends: [ extend.resumo, extend.teste, extend.stopAgenda ],
    erros: []
}
