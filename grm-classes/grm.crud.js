const Mongoose = require('mongoose')
// console.log(Mongoose.models)
class Crud {

    constructor(model) {
        this.Model = Mongoose.models[model]
    }

    async find(filtro = {}, attrs = {}) {
        return await  this.Model.find(filtro, attrs, (err, result)=> {
            if (err) {
                console.log('ERRO: ', err);
                return err
            }
            if (result) {
            }
        })
    }
    
    async findOne(filtro = {}, attrs = {}) {
        return await  this.Model.findOne(filtro, attrs, (err, result)=> {
            if (err) {
                console.log('ERRO: ', err);
                return err
            }
            if (result) {
            }
        })
    }

    async findById(id, attrs = {}) {
        return await  this.Model.findById(id, attrs, (err, result)=> {
            if (err) {
                console.log('ERRO: ', err);
                return err
            }
            if (result) {
            }
        })
    }

    async save(body) {
        let registro = new this.Model(body)
        return await  registro.save( (err, result)=> {
            if (err) {
                console.log('ERRO: ', err);
                return err
            }
            if (result) {
            }
        })
    }

}


module.exports = Crud;