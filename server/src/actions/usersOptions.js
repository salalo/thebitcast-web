import db from '../config/db.js';
import bcrypt from 'bcrypt';

async function checkPassword(ID, password) {
	console.log(ID)
	let sql = 'SELECT password FROM Users WHERE ID=' + ID;
	const actualPassword = await db.query(sql)[0];

	let status = false

	bcrypt.compare(password, actualPassword, (err, result)=>status = result);
	return status
}

export default {
	updateLanguageAndLocation(ID, language, location) {
    let sql = 'UPDATE Users SET language="' + language + '", location="' + '" WHERE ID=' + ID;

    if(!db.query(sql)) return db.sendDatabaseError()

    return{
      message: 'Location and language options updated succesfully',
      type: 'positive'
    }
  },

  updateUsername(ID, newUsername) {

    let sql = 'SELECT nick FROM Users WHERE nick=' + newUsername

    const result = db.query(sql)

    if(!result) return db.sendDatabaseError()

    if(result.length > 0)
      return {
        message: 'Username already taken',
        type: 'negative'
      }
    
    if(!db.query(sql)) return db.sendDatabaseError()
    
    return {
      message: 'Username updated succesfully',
      type: 'positive'
    }
  },

  updateEmail(ID, password, newEmail) {
    
    if(!checkPassword(ID, password))
      return{
        message: 'Wrong password',
        type: 'negative'
      }
    
      let sql = 'SELECT * FROM Users WHERE ID='+ID
      let result = db.query(sql)

      if(!result) return db.sendDatabaseError()

      if(result.length > 0)
        return {
          message: 'Email already taken',
          type: 'negative'
        }

      sql = 'UPDATE Users SET email="' + newEmail + '" WHERE ID=' + ID

      if(!db.query(sql)) return db.sendDatabaseError()

      return{
        message: 'Email changed succesfully.',
        type: 'positive'
      }
  },

  updatePassword(ID, hashedNewPassword, callback) {
    let sql = 'UPDATE Users SET password="' + hashedNewPassword + '" WHERE ID=' + ID;

    if(!db.query(sql)) return db.sendDatabaseError()
    return {
      message: 'Password changed succesfully.',
      type: 'positive'
    }
  },

  setNotificationsOnOff(ID, emailStatus, pushStatus, callback) {
    let sql = 'UPDATE Users SET email_notifications="' + '", push_notifications="' + pushStatus +  '" WHERE ID=' + ID;

    if(!db.query(sql)) return db.sendDatabaseError()
    return {
      message: 'Notifications options changed succesfully',
      type: 'positive'
    }
  }
}