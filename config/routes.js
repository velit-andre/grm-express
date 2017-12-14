const express = require('express')

module.exports = function (server) {

      // API Routes
      const router = express.Router()
      server.use('/api', router)

      // rotas da API
      require('../grm-classes/grm.restful.service')(router)
      //   const exemploResumo = require('../api/exemplo/resumo.service')
      //   router.route('/exemplo/resumo').get(exemploResumo.getResumo)
}

