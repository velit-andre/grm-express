
// exporte neste arquivo as APIs que deseja rodar na aplicação.

const User = require('./user/user.service')
const Activities = require('./activities/activities.service')


module.exports = [
    User,
    Activities
]
