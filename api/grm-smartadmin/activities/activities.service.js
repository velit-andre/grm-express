
// const exemploExtend = require('./activities.extend')
const Schema = require('./activities.schema')


module.exports = {
    schema: Schema,
    methods: ['get', 'post', 'put', 'delete'],
    extends: [],
    erros: []
}
