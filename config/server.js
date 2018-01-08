const port = 3003

require('../grm-class/grm.functions')

const bodyParser = require('body-parser')
const express = require('express')
const server = express()
const allowCors = require('./cors')
const queryParser = require('express-query-int')
const expressSession = require('express-session')
const grmAuth = require('../grm-class/grm.auth')

server.use(expressSession({
	secret: 'hakjehrgkjahjer',
	resave: false,
	saveUninitialized: false
}))

grmAuth(server)

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())
server.use(allowCors)
server.use(queryParser())

server.use(express.static('assets'))

server.listen(port, function () {
	console.log(`BACKEND is running on port ${port}.`)
})


module.exports = server
