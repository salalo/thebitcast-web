import db from '../config/db.js';
import bcrypt from 'bcrypt';
import notifs from '../config/notifications'

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

    if(!db.query(sql)) return notifs.dbError

    return notifs.updateLocationAndLanguage
  },

  updateUsername(ID, newUsername) {

    let sql = 'SELECT nick FROM Users WHERE nick=' + newUsername

    const result = db.query(sql)

    if(!result) return notifs.dbError

    if(result.length > 0)
      return notifs.usernameTaken
      
    
    if(!db.query(sql)) return notifs.dbError
    
    return notifs.updateUsername
  },

  updateEmail(ID, password, newEmail) {
    
    if(!checkPassword(ID, password))
      return notifs.wrongPassword
    
      let sql = 'SELECT * FROM Users WHERE ID='+ID
      let result = db.query(sql)

      if(!result) return notifs.dbError

      if(result.length > 0)
        return notifs.emailTaken

      sql = 'UPDATE Users SET email="' + newEmail + '" WHERE ID=' + ID

      if(!db.query(sql)) return notifs.dbError

      return notifs.updateEmail
  },

  updatePassword(ID, hashedNewPassword, callback) {
    let sql = 'UPDATE Users SET password="' + hashedNewPassword + '" WHERE ID=' + ID;

    if(!db.query(sql)) return notifs.dbError
    return notifs.updatePassword
  },

  setNotificationsOnOff(ID, emailStatus, pushStatus, callback) {
    let sql = 'UPDATE Users SET email_notifications="' + '", push_notifications="' + pushStatus +  '" WHERE ID=' + ID;

    if(!db.query(sql)) return notifs.dbError
    return notifs.updateNotifsOptions
  }
}