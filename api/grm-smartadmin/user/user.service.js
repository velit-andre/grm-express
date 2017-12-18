
// const exemploExtend = require('./activities.extend')
const Schema = require('./user.schema')


module.exports = {
    schema: Schema,
    methods: ['get', 'post', 'put', 'delete'],
    extends: [],
    erros: [],
    route: '/user/login-info'
}
