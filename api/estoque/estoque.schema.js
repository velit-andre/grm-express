
const restful = require('node-restful')
const mongoose = restful.mongoose

const exemplo = new mongoose.Schema({
  produto: { type: String, required: true },
  quantidade: { type: Number, min: 1, max: 12, required: true },
  valor: { type: Number, min: 0, required: true }
})

module.exports = restful.model('estoque', exemplo)
