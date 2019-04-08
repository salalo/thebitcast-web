import { Router } from 'express';
import {
  updateLanguageAndLocation,
  updateUsername,
  updateEmail,
  updatePassword,
  setNotificationsOnOff
} from '../actions/users';

export default () => {
  const api = Router();

  return api;
};
