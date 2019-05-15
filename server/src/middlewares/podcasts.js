import Joi from "joi";
import fs from "fs";
import isMp3 from "is-mp3";
import timeFormat from "hh-mm-ss";

import notifs from "../config/notifications";
import thumbnails from "../config/thumbnails";
import db from "../config/db";
import podcastActions from "../actions/podcasts";

export default {
  async upload(req, res) {
    if (!req.isAuthenticated()) return res.json(notifs.notLogged);

    //Validation
    const mp3Encoded = req.body.mp3;
    const thumbnailEncoded = req.body.thumbnail;

    const data = {
      desc: req.body.desc,
      title: req.body.title,
      tags: req.body.tags,
      category: req.body.category,
      region: req.user.region_ID,
      creatorID: req.user.ID,
      length: "00:00:00"
    };

    const DATA_SCHEMA = Joi.object().keys({
      desc: Joi.string().max(2500),
      title: Joi.string()
        .min(5)
        .max(50)
        .required(),
      category: Joi.number().required(),
      tags: Joi.any(),
      region: Joi.number(),
      creatorID: Joi.any(),
      length: Joi.any()
    });

    if (Joi.validate(data, DATA_SCHEMA).error)
      return res.json(notifs.incorrectData);
    if (!mp3Encoded) return res.json(notifs.incorrectData);

    for (let i = 0; i < data.tags.length; i++) {
      const TAG_SCHEMA = Joi.string()
        .min(1)
        .max(50);
      if (Joi.validate(data.tags[i], TAG_SCHEMA).error)
        return res.json(notifs.incorrectData);
    }

    if (!(await podcastActions.checkCategoryExist(data.category)))
      return res.json(notifs.incorrectData);

    //Decoding
    let mp3Decoded = new Buffer.from(mp3Encoded, "base64");
    let thumbnailDecoded = false;
    if (thumbnailEncoded)
      thumbnailDecoded = new Buffer.from(thumbnailEncoded, "base64");

    //mp3 and thumbnail validation
    if (!isMp3(mp3Decoded)) return res.json(notifs.invalidFiles);
    if (thumbnailDecoded && !thumbnails.checkThumbnail(thumbnailDecoded))
      return res.json(notifs.invalidFiles);

    const mp3Duration = await podcastActions.getMp3Duration(mp3Decoded);
    if (!mp3Duration) return res.json(notifs.invalidFiles);

    if (mp3Duration > podcastActions.maxMp3Duration)
      return res.json(notifs.podcastTooLong);

    data.length = timeFormat.fromS(Math.floor(mp3Duration), "HH:MM:SS");

    //Upload
    const podcastID = await podcastActions.uploadToDb(data);
    if (!podcastID) return res.json(notifs.dbError);

    //Save mp3 and thumbnail
    if (!(await podcastActions.saveMp3(mp3Decoded, podcastID))) {
      podcastActions.abortUploading(podcastID);
      return res.json(notifs.dbError);
    }

    if (
      thumbnailDecoded &&
      !(await podcastActions.saveThumbnail(thumbnailDecoded, podcastID))
    ) {
      podcastActions.abortUploading(pocastID);
      return res.json(notifs.dbError);
    }

    let resSuccess = notifs.podcastUploaded;
    resSuccess.podcastID = podcastID;
    return res.json(resSuccess);
  },

  async get(req, res) {
    let podcastID = req.query.ID
    if(!podcastID) return res.json(notifs.incorrectData)

    let podcast = podcastActions.checkExist(podcastID);
    if (podcast === "dbError") return res.json(notifs.dbError);
    if (!podcast) return res.json(notifs.podcastNotFound);

    let mp3 = await podcastActions.getMp3File(podcastID)
    if(!mp3) return res.json(notifs.dbError)

    let thumbnail = await podcastActions.getThumbnail(podcastID)
    if(!thumbnail) return res.json(notifs.dbError)

    podcast.mp3 = mp3
    podcast.thumbnail = thumbnail

    res.json({
      message: "Podcast found",
      type: "positive",
      status: 200,
      podcast: podcast
    })
  }
};
