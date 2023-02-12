import express from 'express';
import * as dotenv from 'dotenv';

import UserSchemaTinder from '../../mongodb/models/userSchemaTinder.js';

dotenv.config();

const router = express.Router();


router.route('/').get(async (req, res) => {
  try {
    const posts = await UserSchemaTinder.find({userWalletAddress: req.query.activeAccount });
    res.status(200).send({ success: true, data: posts });
  } catch (err) {
    res.status(500).send({ success: false, message: 'FetchCurrentUserDasta failed, please try again' });
  }
});



export default router;


