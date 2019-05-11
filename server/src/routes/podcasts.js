import { Router } from "express";
import podcasts from "./../actions/podcast";

export default () => {
  const api = Router();

  api.post("/upload", podcasts.checkUpload);
  api.get("/get", podcasts.get)

  return api;
};
