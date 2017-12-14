const server = require('./config/server')
require('./config/database')
require('./config/routes')(server)

var cron = require('node-cron')
// cron.schedule('1-59 * * 15 12 4', function(){
// cron.schedule('0 39 12 14 12 *', function(){
//     console.log(new Date());
//   });
