const mysql = require('mysql2')
const connetion = mysql.createConnection({
   host: 'localhost',
   port: 3308,
   user: 'root',
   password: 1234,
   database
});
exports.connetion = connetion;
module.exports = connetion;