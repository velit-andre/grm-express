const restful = require('node-restful')
const mongoose = restful.mongoose


const schema = new mongoose.Schema({
  username: { type: String, required: true },
  user: { type: String, required: true  },
  pass: { type: String, required: true  },
  picture: { type: String },
  activity: { type: Number }
})



schema.set('toJSON', {
  virtuals: true,
  versionKey:false,
  transform: function (doc, ret) {   delete ret._id  }
});

module.exports = restful.model('user', schema)
