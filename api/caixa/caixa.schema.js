const restful = require('node-restful')
const mongoose = restful.mongoose


const schema = new mongoose.Schema({
  name: { type: String, required: true },
  data: { type: Date, required: true },
  quantidade: { type: Number, min: 5, max: 10, required: true },
  valor: { type: Number, required: true}
})


schema.set('toJSON', {
  virtuals: true,
  versionKey:false,
  transform: function (doc, ret) {   delete ret._id  }
});

module.exports = restful.model('caixa', schema)
