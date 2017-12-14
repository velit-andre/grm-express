
const Exemplo = require('./exemplo.extend')
const Schema = require('./exemplo.schema')


module.exports = {
    schema: Schema,
    methods: ['get', 'post', 'put', 'delete'],
    extends: [ Exemplo.resumo, Exemplo.teste ],
    erros: []
}
