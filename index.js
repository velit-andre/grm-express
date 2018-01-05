
const server = require('./config/server')
require('./config/database')
require('./config/routes')(server)
require('./grm-class')
const Middleware = require('./grm-class/grm.login')

// Middleware.routeRequireAuth(server)
Middleware.controllerLogin(server)
