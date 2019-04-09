import mysql from 'mysql'
import keys from './keys.js'

const database = mysql.createConnection(keys.mysql)

module.exports = { 

  query : async function(sql){
    try{
        return await database.query(sql)
    }catch(e){
        console.log('Database error')
        return false
    }
  },

  sendDatabaseError: function (){
    return {
      message: 'Connection error, try again later',
      type: 'negative'
    }
  }
}

