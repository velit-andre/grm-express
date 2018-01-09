/*
    Realiza o controle de sessão
 */

/* 
 * 1. Esta classe checa no mongoDB, collection 'user'
 * se existe cadastro com 'user' e 'pass' fornecido
 * na requisição.
 * 2. Caso exista o usuário e definido na sessão
 * realizando assim o controle de sessão.
 */

var Crud = require('./grm.crud')

module.exports = class Middlware {

    static controller(server) {
        
        server.route('/logout').get((req, res) => {
            req.session.destroy(err => res.send('Sessão encerrada!'))
        })

        // caso esteja devidamente logado, retorna informações do usuário.
        server.route('/login').get( (req, res) => res.json(req.session.auth))

        // consulta usuário e se for válido atribui informações do usuário a sessão.
        // caso contrário retorna um erro com usuário inválido.
        server.route('/login').post((req, res) => {
            const User = new Crud('user')

            User.findOne({ user: req.body.user })
                .catch(console.log)
                .then(result => {
                    if (result.user == req.body.user && result.pass == req.body.pass) {
                        req.session.auth = result
                        return result
                    } else {
                        return {error: {msg: 'Usuário ou senha inválido!'} }
                    }
                })
                .then(result => res.send(result))
        })

    }

}
