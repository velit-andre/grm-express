const restful = require('node-restful')
const mongoose = restful.mongoose


const exemplo = new mongoose.Schema({
  name: { type: String, required: true },
  cargo: { type: String, min: 1, max: 12, required: true }
})

module.exports = restful.model('funcionario', exemplo)
