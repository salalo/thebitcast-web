import mysql from 'mysql'
import keys from './keys.js'

//const database = mysql.createConnection(keys.mysql)

module.exports = { 

  query: function(sql){
    return new Promise((resolve, reject)=>{
      const connection = mysql.createConnection(keys.mysql)
      connection.connect((err)=>{
        if(err) resolve(false)
        else{
          connection.query(sql, (err1, result)=>{
            if(err1) resolve(false)
            else resolve(result)
          })
        }
      })
    })
  }
}

