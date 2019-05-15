import { Router } from "express";
import podcasts from "../middlewares/podcasts";

export default () => {
  const api = Router();

  api.post("/upload", podcasts.upload);
  api.get("/get", podcasts.get)

  return api;
};
