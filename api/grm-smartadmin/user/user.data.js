
const config = require('../../../config/config')

let data = {
  "username": "John Doe Master",
  "picture": "assets/img/avatars/sunny.png",
  "user": config.user,
  "pass": config.pass,
  "activity": 12
}

module.exports = [ 'user', data ]