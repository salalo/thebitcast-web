import mysql from 'mysql'
import keys from './keys.js'

//const database = mysql.createConnection(keys.mysql)

module.exports = { 

  query: function(sql){
    return new Promise((resolve, reject)=>{
      const connection =mysql.createConnection(keys.mysql)
      try{
        connection.connect((err)=>{
          if(err){
            connection.end()
            resolve(false)
            }
          else{
            connection.query(sql, (err1, result)=>{
              if(err1){
                connection.end()
                resolve(false)
              }
              else{ 
                connection.end()
                resolve(result)
              }
            })
          }
        })
      }catch(e){
        connection.end()
        resolve(false)
      }
    })
  }
}

