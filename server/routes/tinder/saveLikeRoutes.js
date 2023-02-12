import express from 'express';
import * as dotenv from 'dotenv';

import UserSchemaTinder from '../../mongodb/models/userSchemaTinder.js';

dotenv.config();

const router = express.Router();

router.route('/').post(async (req, res) => {
  try {
    const { likedUser, currentUser } = req.body;
    
    
    const ActiveUser = await UserSchemaTinder.find({userWalletAddress:currentUser});

    const walletsLiked = ActiveUser[0].likes;

    const result = walletsLiked.filter(walletsLiked => walletsLiked == likedUser);

    if (result.length == 0) {
        const UserUpdate = await UserSchemaTinder.updateOne( 
            { userWalletAddress: currentUser },
            { $push: { likes: likedUser } }
            );
            res.status(200).json({ success: true, data: UserUpdate });
    }else{
        res.status(200).json({ success: true, message: 'User has been liked previously'  });
    }
   
  } catch (err) {
    res.status(500).json({ success: false, message: 'Unable to create a new like, please try again' });
  }
});


export default router;



