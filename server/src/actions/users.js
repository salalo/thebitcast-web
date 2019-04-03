import db from '../config/db.js'
import dateTime from 'node-datetime'

function getActualTime() {
	const dt = dateTime.create()
	return dt.format('Y-m-d H:M:S')
}

export default {
  checkLocalUserExists(nick, email, callback) {
    let sql = "SELECT ID FROM Users WHERE nick=\""+nick+"\" OR email=\""+email+"\""
 
		db.query(sql, (err, result) => 
			callback(result.length != 0))
	},
	
	getUserByUnique(unique, accountType, callback) {
		let sql = "SELECT * FROM Users WHERE "

		switch(accountType){
			case 'local':
				sql += "email"
				break
			case 'google':
				sql += "google_ID"
				break
			case 'twitter':
				sql += "twitter_ID"
				break
			case 'facebook':
				sql += "facebook_ID"
				break
		}
		sql += "=\"" + unique + "\""

		db.query(sql, (err, result) =>
			result.length == 0 ? callback(null) : callback(result[0]))
	},

 	addUser(USER, accountType) {
    let facebook_ID = "NULL"
    let google_ID = "NULL"
		let twitter_ID = "NULL"
		let nick = USER.displayName
		let sql

		switch(accountType){
			case 'facebook':
				nick = USER.name.givenName + " " + USER.name.familyName
				facebook_ID = "\"" + USER.id + "\""
				break
			case 'twitter':
      	twitter_ID = "\"" + USER.id + "\""
				break
			case 'google':
      	google_ID = "\"" + USER.id + "\""
				break
		}

		if (accountType === 'local') {
			sql = "INSERT INTO Users ("+
				"ID, nick, email, password, register_date, last_login, avatar_href, google_ID, facebook_ID, twitter_ID,"+
				"facebook_link, twitter_link, instagram_link, gender, description, activated, premium, banned) VALUES"+
				"(NULL, \"" + USER.nick +"\", \"" + USER.email + "\", \"" + USER.password +"\", \""+ getActualTime() +"\", \""+ getActualTime() +"\", NULL, "+
				"NULL, NULL, NULL , NULL, NULL, NULL, NULL, NULL, 0, 0, 0)"
		}
		else {
			sql  = "INSERT INTO Users ("+
				"ID, nick, email, password, register_date, last_login, avatar_href, google_ID, facebook_ID, twitter_ID,"+
				"facebook_link, twitter_link, instagram_link, gender, description, activated, premium, banned) VALUES"+
				"(NULL, \"" + nick +"\", \"" + USER.emails[0].value + "\", NULL, \""+ getActualTime() +"\", \""+ getActualTime() +"\", NULL, "+
				google_ID + ", " + facebook_ID + ", " + twitter_ID + ", NULL, NULL, NULL, NULL, NULL, 0, 0, 0)"
		}

		db.query(sql, (err, result) =>
			err ? console.log("actions/users", err) : null)
	},


	getUserByID(user_ID, callback) {
		let sql = "SELECT * FROM Users WHERE ID="+user_ID

		db.query(sql, (err, result) => {
			delete result[0].password //Delete password from req.user
			callback(result[0])
		})
	},

	updateLastLogin(ID) {
		//Update last login time
		let sql = "UPDATE Users SET last_login=\""+getActualTime()+"\" WHERE ID="+ ID
		db.query(sql)
	}
}