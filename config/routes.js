const express = require('express')

module.exports = function(server) {

  // API Routes
  const router = express.Router()
  server.use('/api', router)

  // rotas da API
  const usuarioService = require('../api/grm-api-default/usuario/usuario.service')
        usuarioService.register(router, '/usuario')
        
  const exemploService = require('../api/grm-api-default/exemplo/exemplo.service')
        exemploService.register(router, '/exemplo')
  
  const exemploSummaryService = require('../api/grm-api-default/exemplo/resumo.service')
  router.route('/exemplo/resumo').get(exemploSummaryService.getSummary)
}

