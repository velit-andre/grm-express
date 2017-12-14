const Schema = require('./funcionario.schema')
const teste = require('./teste.service')

module.exports = {
  schema: Schema,
  methods: ['get', 'post', 'put', 'delete'],
  extends: [ teste.filhos, teste.netos ],
  erros: []
}
