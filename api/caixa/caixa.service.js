
//const extend = require('./caixa.extend')
const Schema = require('./caixa.schema')


module.exports = {
    schema: Schema,
    methods: ['get', 'post', 'put', 'delete'],
    //extends: [ extend.resumo, extend.teste, extend.stopAgenda ],
    erros: []
}
