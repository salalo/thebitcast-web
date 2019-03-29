import mysql from 'mysql'
import keys from './keys.js'

module.exports = mysql.createConnection(keys.mysql)
