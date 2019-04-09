import { Router } from 'express';
import user from '../actions/usersOptions';

export default () => {
  const api = Router();

  api.post('/updateEmail', (req, res)=>{ 
    
    const {newEmail, password} = req.body
    console.log(newEmail)
    res.json(user.updateEmail(6, password, newEmail))
  })
/*
  api.update('/email', (req, res)=>{ 
    const {newEmail, password} = req.body
    console.log(updateEmail(6, newEmail, password))
    //res.JSON()
  })
*/
  return api;
};
