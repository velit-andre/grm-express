const restful = require('node-restful')
const mongoose = restful.mongoose


const schema = new mongoose.Schema({
  username: { type: String },
  picture: { type: String },
  activity: { type: Number }
})



schema.set('toJSON', {
  virtuals: true,
  versionKey:false,
  transform: function (doc, ret) {   delete ret._id  }
});

module.exports = restful.model('user', schema)
