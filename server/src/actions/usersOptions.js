import db from "../config/db.js";
import bcrypt from "bcrypt";
import notifs from "../config/notifications";
import Joi from "Joi";

async function checkPassword(ID, password) {
  let sql = "SELECT password FROM Users WHERE ID=" + ID;
  const actualPassword = await db.query(sql)[0];

  return new Promise((resolve, reject) => {
    bcrypt.compare(password, actualPassword, (err, result) => {
      if (err) resolve(false);
      resolve(result);
    });
  });
}

export default {
  async updateLanguageAndLocation(ID, language, region) {
    const schema = Joi.number()
      .integer()
      .required();

    if (
      Joi.validate(language, schema).error ||
      Joi.validate(region, schema).error
    )
      return notifs.incorrectData;

    let sql = "SELECT * FROM language WHERE ID=" + language;
    let result = await db.query(sql);

    if (!result) return notifs.dbError;
    if (result.length == 0) return notifs.invalidLanguage;

    sql = "SELECT * FROM region WHERE ID=" + region;
    result = await db.query(sql);

    if (!result) return notifs.dbError;
    if (result.length == 0) return notifs.invalidRegion;

    sql =
      'UPDATE Users SET language_ID="' +
      language +
      '", region_ID="' +
      region +
      '" WHERE ID=' +
      ID;

    if (!(await db.query(sql))) return notifs.dbError;

    return notifs.updateLocationAndLanguage;
  },

  async updateUsername(ID, password, newUsername) {
    if (!(await checkPassword(ID, password))) return notifs.wrongPassword;

    const schema = Joi.string()
      .alphanum()
      .min(4)
      .max(20)
      .required();
    if (Joi.validate(newUsername, schema).error) return notifs.incorrectData;

    let sql = "SELECT nick FROM Users WHERE nick=" + newUsername;
    const result = await db.query(sql);
    if (!result) return notifs.dbError;
    if (result.length > 0) return notifs.usernameTaken;

    sql = 'UPDATE Users SET nick="' + newUsername + "' WHERE ID=" + ID;
    if (!db.query(sql)) return notifs.dbError;
    return notifs.updateUsername;
  },

  async updateEmail(ID, password, newEmail) {
    if (!(await checkPassword(ID, password))) return notifs.wrongPassword;

    const schema = Joi.string()
      .email()
      .lowercase()
      .trim()
      .min(5)
      .required();
    if (Joi.validate(newEmail, schema).error) return notifs.incorrectData;

    let sql = 'SELECT ID, password FROM Users WHERE email="' + newEmail + '"';
    let result = await db.query(sql);
    if (!result) return notifs.dbError;
    if (result.length > 0) {
      if (result[0].ID == ID) return notifs.sameEmail;
      return notifs.emailTaken;
    }

    sql = 'UPDATE Users SET email="' + newEmail + '" WHERE ID=' + ID;
    if (!(await db.query(sql))) return notifs.dbError;
    return notifs.updateEmail;
  },

  async updatePassword(ID, password, newPassword) {
    if (!(await checkPassword(ID, password))) return notifs.wrongPassword;

    const schema = Joi.string()
      .trim()
      .min(8)
      .max(40)
      .required();
    if (Joi.validate(newPassword, schema).error) return notifs.incorrectData;

    let hashedNewPassword = await bcrypt.hash(password, 10);
    sql =
      'UPDATE Users SET password="' + hashedNewPassword + '" WHERE ID=' + ID;
    if (!(await db.query(sql))) return notifs.dbError;
    return notifs.updatePassword;
  },

  async updateNotificationsOptions(ID, emailStatus, pushStatus) {
    const schema = Joi.number()
      .integer()
      .min(0)
      .max(1)
      .required();

    if (
      Joi.validate(emailStatus, schema).error ||
      Joi.validate(pushStatus, schema).error
    )
      return notifs.incorrectData;

    let sql =
      "UPDATE Users SET email_notifications=" +
      emailStatus +
      ", push_notifications=" +
      pushStatus +
      " WHERE ID=" +
      ID;
    if (!(await db.query(sql))) return notifs.dbError;
    return notifs.updateNotifsOptions;
  }
};
