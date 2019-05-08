import { Router } from "express";
import db from './../config/db'
import notifs from './../config/notifications'

export default () => {
  const api = Router();

  api.get("/getCategories", async (req, res)=>{
    const result = await db.query("SELECT * FROM categories")
    console.log(Object.values(JSON.parse(JSON.stringify(result))))
    if(!result)
        return res.json(notifs.dbError)
    return res.json({
        message: 'Categories succesfully downloaded',
        status: 200,
        type: 'positive',
        categories: Object.values(JSON.parse(JSON.stringify(result)))
    })
  });

  return api;
};
