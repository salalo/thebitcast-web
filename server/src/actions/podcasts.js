import mp3Duration from "mp3-duration";
import db from "../config/db";
import dateTime from "node-datetime";
import fs from "fs";

function getActualTime() {
  const dt = dateTime.create();
  return dt.format("Y-m-d H:M:S");
}

function getDefaultThumbnail() {
  return new Promise(resolve => {
    fs.readFile(this.THUMBNAILS_ROOT + "_default.jpg", function read(
      err,
      data
    ) {
      if (err) {
        resolve(false);
      } else {
        resolve(new Buffer(data).toString("base64"));
      }
    });
  });
}

export default {
  maxMp3Duration: 43200,
  MP3_ROOT: __dirname + "/../../public/podcasts/mp3/",
  THUMBNAILS_ROOT: __dirname + "/../../public/podcasts/thumbnails/",

  checkCategoryExist(categoryID) {
    return new Promise(async resolve => {
      let sql = "SELECT * FROM categories WHERE ID=" + categoryID;
      let result = await db.query(sql);
      if (!result) resolve(false);
      else resolve(true);
    });
  },

  async abortUploading(podcastID) {
    let sql = "DELETE pocast WHERE ID=" + podcastID;
    await db.query(sql);
    fs.unlinkSync(this.MP3_ROOT + podcastID + ".mp3");
    fs.unlinkSync(this.THUMBNAILS_ROOT + podcastID + ".jpg");
  },

  getMp3Duration(mp3) {
    return new Promise(resolve => {
      mp3Duration(mp3, (err, duration) => {
        if (err) resolve(false);
        resolve(duration);
      });
    });
  },

  uploadToDb(data) {
    return new Promise(async resolve => {
      if (!data.region) data.region = "NULL";
      let sql =
        "INSERT INTO podcasts (ID, creator_ID, category_ID, upload_date, length, title, description, region_ID) VALUES" +
        " (NULL, " +
        data.creatorID +
        ", " +
        data.category +
        ', "' +
        getActualTime() +
        '", "' +
        data.length +
        '", "' +
        data.title +
        '", "' +
        data.desc +
        '", ' +
        data.region +
        ");SELECT @@IDENTITY As ID;";

      let result = await db.query(sql);
      if (!result) resolve(false);
      else resolve(result[1][0].ID);
    });
  },

  saveMp3(mp3, id) {
    return new Promise(resolve => {
      fs.writeFile(this.MP3_ROOT + id + ".mp3", mp3, err => {
        err ? resolve(false) : resolve(true);
      });
    });
  },

  saveThumbnail(thumbnail, id) {
    return new Promise(resolve => {
      fs.writeFile(this.THUMBNAILS_ROOT + id + ".jpg", thumbnail, err => {
        err ? resolve(false) : resolve(true);
      });
    });
  },

  async checkExist(podcastID) {
    let sql = "SELECT * FROM podcasts WHERE ID=" + podcastID;
    let result = await db.query(sql);
    if (!result && result !== []) return "dbError";
    else if (result.length == 0) return false;
    return result[0];
  },

  getMp3File(pocastID) {
    return new Promise(resolve => {
      fs.readFile(this.MP3_ROOT + podcastID + ".mp3", function read(err, data) {
        if (err) {
          resolve(false);
        } else {
          resolve(new Buffer(data).toString("base64"));
        }
      });
    });
  },

  getThumbnail(podcastID) {
    return new Promise(async resolve => {
      if (!fs.existsSync(this.THUMBNAILS_ROOT + podcastID + ".jpg"))
        resolve(await getDefaultThumbnail());

      fs.readFile(this.THUMBNAILS_ROOT + podcastID + ".jpg", function read(
        err,
        data1
      ) {
        if (err) resolve(false);
        else resolve(new Buffer(data1).toString("base64"));
      });
    });
  }
};
