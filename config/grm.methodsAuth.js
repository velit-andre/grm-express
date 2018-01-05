
// const expressSession = require('express-session');
const apiGrmDefaultServices = require('../api/grm-smartadmin/grm.api-service')
var grmApiService = require('../api/grm.api-service');
    grmApiService = grmApiService.concat(apiGrmDefaultServices)

module.exports = function(server) {

    // server.use(expressSession({
    //     secret: 'hakjehrgkjahjer',
    //     resave: false,
    //     saveUninitialized: false
    // }))

    console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxx')


    var services = []

    grmApiService.forEach( item => {
        services[item.route] = item.methodsAuth
    })

    services['/login'] = ['GET']
    services['/logout'] = ['GET']

    server.use((req, res, next) => {
        let url = req.url.replace('/api','')
        
        if (services[url]) {
            if (services[url].exist(req.method.toLowerCase())) {
                if (req.session.auth) {
                    return next();
                } else {
                    res.status(401).send('Esta sessão não está autenticada ou expirou!!')
                }
            } else { return next() }
        } else { return next() }
    })

}

