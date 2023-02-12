import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

import connectDB from './mongodb/connect.js';
import postRoutes from './routes/AIimages/postRoutes.js';
import dalleRoutes from './routes/AIimages/dalleRoutes.js';
import CreateuserTinderRoutes from './routes/tinder/CreateuserTinderRoutes.js';
import fetchCurrentUserDataRoutes from './routes/tinder/fetchCurrentUserDataRoutes.js';
import fetchUsersRoutes from './routes/tinder/fetchUsersRoutes.js';
import saveLikeRoutes from './routes/tinder/saveLikeRoutes.js';
import checkMatchesRoutes from './routes/tinder/checkMatchesRoutes.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));

app.use('/api/v1/post', postRoutes);
app.use('/api/v1/dalle', dalleRoutes);
app.use('/api/v1/CreateuserTinderRoutes', CreateuserTinderRoutes);
app.use('/api/v1/fetchCurrentUserDataRoutes', fetchCurrentUserDataRoutes);
app.use('/api/v1/fetchUsersRoutes', fetchUsersRoutes);
app.use('/api/v1/saveLikeRoutes', saveLikeRoutes);
app.use('/api/v1/checkMatchesRoutes', checkMatchesRoutes);

app.get('/', async (req, res) => {
  res.status(200).json({
    message: 'Hello IA-NET',
  });
});

const startServer = async () => {
  try {
    connectDB(process.env.MONGODB_URL);
    app.listen(8080, () => console.log('Server started on port 8080'));
  } catch (error) {
    console.log("Error MongoDB");
    console.log(error);
  }
};

startServer();
