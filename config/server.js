const port = 3003

require('../grm-class/grm.functions')

const config = require('./config')
const bodyParser = require('body-parser')
const express = require('express')
const compression = require('compression');
const server = express()
const allowCors = require('./cors')
const queryParser = require('express-query-int')
const expressSession = require('express-session')
const {auth} = require('../grm-class')

server.use(expressSession({
	secret: config.sessionSecret,
	resave: false,
	saveUninitialized: false
}))

server.use(compression({filter: (req, res) => req.headers['x-no-compression'] ? false : compression.filter(req, res)}));

// controle de sessão e autenticação de usuário.
auth(server)

server.set('view engine', 'pug');

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())
server.use(allowCors)
server.use(queryParser())

server.use(express.static('assets'))

server.listen(config.port, function () {
	console.log(`BACKEND is running on port http://localhost:${config.port}`)
})

server.route('/').get((req, res, next) => {
	if(config.showPageRoot) {
		res.render('index', {config})
	} else {
		return next()		
	}
})

module.exports = server
