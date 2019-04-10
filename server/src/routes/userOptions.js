import { Router } from "express";
import user from "../actions/usersOptions";

export default () => {
  const api = Router();

  api.patch("/updateEmail", (req, res) => {
    const { newEmail, password } = req.body;
    user.updateEmail(req.user.ID, password, newEmail).then(notif => {
      res.status(notif.status).json(notif);
    });
  });

  api.patch("/updateNotificationsOptions", (req, res) => {
    const { emailStatus, pushStatus } = req.body;
    user.updateNotificationsOptions(6, emailStatus, pushStatus).then(notif => {
      res.json(notif);
    });
  });

  api.patch("/updatePassword", (req, res) => {
    const { newPassword, password } = req.body;
    user.updatePassword(req.user.ID, password, newPassword).then(notif => {
      res.json(notif);
    });
  });

  api.patch("/updateUsername", (req, res) => {
    const { newUsername, password } = req.body;
    user.updateUsername(req.user.ID, password, newUsername).then(notif => {
      res.json(notif);
    });
  });

  api.patch("/updateLanguageAndRegion", (req, res) => {
    const { language, region } = req.body;
    user
      .updateLanguageAndLocation(req.user.ID, language, region).then(notif => {
        res.status(notif.status).json(notif);
      });
  });

  api.patch("/updateDescription", (req, res) => {
    const { description } = req.body;
    user
      .updateDescription(req.user.ID, description).then(notif => {
        res.status(notif.status).json(notif);
      });
  });

  return api;
};
