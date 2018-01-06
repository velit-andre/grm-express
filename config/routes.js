
const express = require('express')

module.exports = function (server) {

      // API Routes
      const router = express.Router()
      server.use('/api', router)

      // rotas da API
      require('../grm-class/grm.restful')(router)
}

