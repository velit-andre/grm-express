
const apiGrmDefaultServices = require('../api/grm-smartadmin/grm.api-service')
var grmApiService = require('../api/grm.api-service')

grmApiService = grmApiService.concat(apiGrmDefaultServices)

module.exports = function (server) {

	var services = []

	// obtem a rota e metódos que devem exigir autenticação.
	grmApiService.forEach(item => {
		services[item.route] = item.methodsAuth
	})

	// adiciona algumas rotas específicas e estáticas da aplicação.
	services['/login'] = ['get']
	services['/logout'] = ['get']

	server.use((req, res, next) => {
		let url = req.url.replace('/api', '')

		// a regra só deve ser aplicada a rotas tratadas acima.
		// rotas não previstas serão tratas pela middleware de error.
		if (services[url]) {
			// checa se a rota possui método com autenticação obrigatória.
			if (services[url].exist(req.method.toLowerCase())) {
				// checa se a conexão do usuário está autenticada.
				if (req.session.auth) {
					return next();
				} else {
					res.status(401).send('Esta sessão não está autenticada ou expirou!!')
				}
			} else { return next() }
		} else { 
			res.redirect('/login')
			// return next()
		}
	})

}

