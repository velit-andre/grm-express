
require('./config/database')

const {login} = require('./grm-class')
const {routes, server} = require('./config')

// chama array de rotas da aplicação e apis.
routes(server)

// classe responsável pelo controle de login e suas rotas.
login.controller(server)
