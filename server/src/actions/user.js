import db from '../config/db.js';
import dateTime from 'node-datetime';

function getActualTime() {
  const dt = dateTime.create();
  return dt.format('Y-m-d H:M:S');
}

export default {
  checkLocalUserExists(nick, email) {
    return new Promise(async (resolve, reject) => {
      let sql =
        'SELECT ID FROM Users WHERE nick="' +
        nick +
        '" OR email="' +
        email +
        '"';

      let res = await db.query(sql);
      if (!res) resolve('dbError');
      if (res.length > 0) resolve(true);
      resolve(false);
    });
  },

  getUserByUnique(unique, accountType) {
    return new Promise(async (resolve, reject) => {
      let sql = 'SELECT * FROM Users WHERE ';

      switch (accountType) {
        case 'local':
          sql += 'email';
          break;
        case 'google':
          sql += 'google_ID';
          break;
        case 'twitter':
          sql += 'twitter_ID';
          break;
        case 'facebook':
          sql += 'facebook_ID';
          break;
      }
      sql += '="' + unique + '"';

      let res = await db.query(sql);
      if (res === []) resolve(undefined);
      else if (!res) resolve(false);
      resolve(res[0]);
    });
  },

  addUser(USER, accountType) {
    return new Promise(async (resolve, reject) => {
      let facebook_ID = 'NULL';
      let google_ID = 'NULL';
      let twitter_ID = 'NULL';
      let nick = USER.displayName;
      let sql;

      switch (accountType) {
        case 'facebook':
          nick = USER.name.givenName + ' ' + USER.name.familyName;
          facebook_ID = '"' + USER.id + '"';
          break;
        case 'twitter':
          twitter_ID = '"' + USER.id + '"';
          break;
        case 'google':
          google_ID = '"' + USER.id + '"';
          break;
      }

      if (accountType === 'local') {
        sql =
          'INSERT INTO Users (' +
          'ID, nick, email, password, register_date, last_login, avatar_href, google_ID, facebook_ID, twitter_ID,' +
          'facebook_link, twitter_link, instagram_link, gender, description, activated, premium, banned, region_ID, language_ID, email_notifications, push_notifications) VALUES' +
          '(NULL, "' +
          USER.nick +
          '", "' +
          USER.email +
          '", "' +
          USER.password +
          '", "' +
          getActualTime() +
          '", "' +
          getActualTime() +
          '", NULL, ' +
          'NULL, NULL, NULL , NULL, NULL, NULL, NULL, NULL, 0, 0, 0,0,0,0,0)';
      } else {
        sql =
          'INSERT INTO Users (' +
          'ID, nick, email, password, register_date, last_login, avatar_href, google_ID, facebook_ID, twitter_ID,' +
          'facebook_link, twitter_link, instagram_link, gender, description, activated, premium, banned, region_ID, language_ID, email_notifications, push_notifications) VALUES' +
          '(NULL, "' +
          nick +
          '", "' +
          USER.emails[0].value +
          '", NULL, "' +
          getActualTime() +
          '", "' +
          getActualTime() +
          '", NULL, ' +
          google_ID +
          ', ' +
          facebook_ID +
          ', ' +
          twitter_ID +
          ', NULL, NULL, NULL, NULL, NULL, 0, 0, 0,0,0,0,0)';
      }

      if (!(await db.query(sql))) resolve(false);
      resolve(true);
    });
  },

  getUserByID(ID) {
    return new Promise(async (resolve, reject) => {
      let sql = 'SELECT * FROM Users WHERE ID=' + ID;

      let res = await db.query(sql);
      if (!res) resolve(false);
      delete res[0].password;
      resolve(res[0]);
    });
  },

  updateLastLogin(ID) {
    return new Promise(async (resolve, reject) => {
      let sql =
        'UPDATE Users SET last_login="' + getActualTime() + '" WHERE ID=' + ID;

      if (!(await db.query(sql))) resolve(false);
      resolve(true);
    });
  },
};
