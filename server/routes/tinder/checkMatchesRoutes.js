import express from 'express';
import * as dotenv from 'dotenv';

import UserSchemaTinder from '../../mongodb/models/userSchemaTinder.js';

dotenv.config();

const router = express.Router();


router.route('/').post(async (req, res) => {
  try {

    const { likedUser, currentUser } = req.body;

    const UserLiked = await UserSchemaTinder.find({userWalletAddress:likedUser});
    const walletsLiked = UserLiked[0].likes;

    const result = walletsLiked.filter(walletsLiked => walletsLiked == currentUser);

    let isMatch = false

    if (result.length > 0) {
      isMatch = true       
    }else{
      isMatch = false  
    }
    res.status(200).send({ message: 'success', data: { isMatch: isMatch } })   
  } catch (err) {
    res.status(500).send({ success: false, message: 'FetchUsers failed, please try again' });
  }
});





export default router;








