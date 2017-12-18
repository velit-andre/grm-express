const restful = require('node-restful')
const mongoose = restful.mongoose



const schema = new mongoose.Schema({
  title: { type: String },
  name: { type: String },
  data: { type: Array }
})



schema.set('toJSON', {
  virtuals: true,
  versionKey:false,
  transform: function (doc, ret) {   delete ret._id  }
});

module.exports = restful.model('activities', schema)
