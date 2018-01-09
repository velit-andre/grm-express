
const config = require('../../../config/config')

let data = {
  "username": "John Doe Master",
  "picture": "assets/img/avatars/sunny.png",
  "user": config.admin.user,
  "pass": config.admin.pass,
  "activity": 12
}

module.exports = [ 'user', data ]