

const apiGrmDefaultServices = require('../api/grm-smartadmin/grm.api-service')
var grmApiService = require('../api/grm.api-service')

grmApiService = grmApiService.concat(apiGrmDefaultServices)

module.exports = function (server) {

	var services = []
	var services2 = []

	// obtem a rota e metódos que devem exigir autenticação.
	grmApiService.forEach(item => {
		services[item.route] = item.methodsAuth
		// obtem nome da função e autenticação do extends
		item.extends.forEach(item2 => {
			let concat = `${item.route}/${item2.toString().getLine(0).getIn('function ','(')}`
			if(item2.auth) services2.push(concat)
		})
	})

	// checa se exist alguma função no arquivo extend que deve ser auth
	function existUrl(url) {
		var retorno = false
		services2.forEach( item => {
			if(url.indexOf(item) >= 0) retorno = true
		})
		return retorno
	}

	// adiciona algumas rotas específicas e estáticas da aplicação.
	services['/login'] = ['get']
	services['/logout'] = ['get']

	server.use((req, res, next) => {
		let url = req.url.replace('/api', '')

		// a regra só deve ser aplicada a rotas tratadas acima.
		// rotas não previstas serão tratas pela middleware de error.
		if (existUrl(url)) {
			console.log('EXISTE ESCOLA')
			if (req.session.auth) {
				return next();
			} else {
				res.status(401).send('Esta sessão não está autenticada ou expirou!!')
				return
			}
		}

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
			// res.redirect('/login')
			return next()
		}
	})

}

