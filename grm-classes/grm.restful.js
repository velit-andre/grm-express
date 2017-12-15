const _ = require('lodash')
const cron = require('node-cron')
const task = require('./grm.scheduler')
const services = require('../api/grm.api-service');


// atribui aos serviços restfull os schemas listados no arquivo 'grm.api'
module.exports = (router) => {
    
    services.forEach((service) => {

        const nameAPI = service.schema.modelName.toLowerCase()
        const nameRoute = service.route || '/'.concat(nameAPI)
        const Model = service.schema

        Model.methods(service.methods)
        Model.updateOptions({ new: true, runValidators: true })

        Model.after('post', sendErrorsOrNext).after('put', sendErrorsOrNext)

        function sendErrorsOrNext(req, res, next) {
            const bundle = res.locals.bundle

            if (bundle.errors) {
                var errors = parseErrors(bundle.errors)
                res.status(500).json({ errors })
            } else {
                next()
            }
        }

        function parseErrors(nodeRestfulErrors) {
            const errors = []
            _.forIn(nodeRestfulErrors, error => errors.push(error.message))
            return errors
        }

        Model.route('count', function (req, res, next) {
            Model.count(function (error, value) {
                if (error) {
                    res.status(500).json({ errors: [error] })
                } else {
                    res.json({ value })
                }
            })
        })

        // atribui rotas para o serviço restful
        Model.register(router, nameRoute)

        // atribui uma rota na qual será retonado o resultado da função
        // passada via parametro
        service.extends.forEach( (myFunction) => {
            const concatPathRoute = `${nameRoute}/${myFunction.name}`
            router.route( concatPathRoute ).get( myFunction )
        })

    })
}



