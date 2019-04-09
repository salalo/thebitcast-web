import mysql from 'mysql'
import keys from './keys.js'

try{
  const database = mysql.createConnection(keys.mysql)
} catch(e)
{
  console.log('Cannot connect to db')
}

module.exports = { 

  query : async function(sql){
    try{
        let res = await database.query(sql)
        return res
    }catch(e){
        console.log('Database error')
        return false
    }
  },
}

