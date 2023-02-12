import express from 'express';
import * as dotenv from 'dotenv';

import UserSchemaTinder from '../../mongodb/models/userSchemaTinder.js';

dotenv.config();

const router = express.Router();




router.route('/').get(async (req, res) => {
  try {
    const posts = await UserSchemaTinder.find({});
    res.status(200).json({ success: true, data: posts });
  } catch (err) {
    res.status(500).json({ success: false, message: 'CreateUserTinder failed, please try again' });
  }
});




router.route('/').post(async (req, res) => {
  try {
    const { name, userWalletAddress } = req.body;
    
    const posts = await UserSchemaTinder.find({userWalletAddress:userWalletAddress});
    if (posts.length == 0) {
      const newUser = await UserSchemaTinder.create({
        name,
        userWalletAddress,
      });
      res.status(200).json({ success: true, data: newUser });
    }else{

      res.status(200).json({ success: true, message: 'Users has been created previously'  });
    }
   
  } catch (err) {
    res.status(500).json({ success: false, message: 'Unable to create a new User, please try again' });
  }
});



export default router;
