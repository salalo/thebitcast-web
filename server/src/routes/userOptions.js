import { Router } from "express";
import user from "../actions/usersOptions";
import notifs from '../config/notifications'

export default () => {
  const api = Router();

  api.patch("/updateEmail", (req, res) => {
    if(!req.isAuthenticated()){
      res.status(notifs.notLogged.status).json(notifs.notLogged)
      return
    }
    const { newEmail, password } = req.body;
    user.updateEmail(req.user.ID, password, newEmail).then(notif => {
      res.status(notif.status).json(notif);
    });
  });

  api.patch("/updateNotificationsOptions", (req, res) => {
    if(!req.isAuthenticated()){
      res.status(notifs.notLogged.status).json(notifs.notLogged)
      return
    }
    const { emailStatus, pushStatus } = req.body;
    user.updateNotificationsOptions(6, emailStatus, pushStatus).then(notif => {
      res.json(notif);
    });
  });

  api.patch("/updatePassword", (req, res) => {
    if(!req.isAuthenticated()){
      res.status(notifs.notLogged.status).json(notifs.notLogged)
      return
    }
    const { newPassword, password } = req.body;
    user.updatePassword(req.user.ID, password, newPassword).then(notif => {
      res.json(notif);
    });
  });

  api.patch("/updateUsername", (req, res) => {
    if(!req.isAuthenticated()){
      res.status(notifs.notLogged.status).json(notifs.notLogged)
      return
    }
    const { newUsername, password } = req.body;
    user.updateUsername(req.user.ID, password, newUsername).then(notif => {
      res.json(notif);
    });
  });

  api.patch("/updateLanguageAndRegion", (req, res) => {
    if(!req.isAuthenticated()){
      res.status(notifs.notLogged.status).json(notifs.notLogged)
      return
    }
    const { language, region } = req.body;
    user
      .updateLanguageAndLocation(req.user.ID, language, region).then(notif => {
        res.status(notif.status).json(notif);
      });
  });

  api.patch("/updateDescription", (req, res) => {
    if(!req.isAuthenticated()){
      res.status(notifs.notLogged.status).json(notifs.notLogged)
      return
    }
    const { description } = req.body;
    user
      .updateDescription(req.user.ID, description).then(notif => {
        res.status(notif.status).json(notif);
      });
  });

  api.patch("/updateSocialMediaLinks", (req, res) => {
    if(!req.isAuthenticated()){
      res.status(notifs.notLogged.status).json(notifs.notLogged)
      return
    }
    const { facebookLink, twitterLink, instagramLink } = req.body;
    user
      .updateSocialMediaLinks(req.user.ID, facebookLink, twitterLink, instagramLink).then(notif => {
        res.status(notif.status).json(notif);
      });
  });

  return api;
};
