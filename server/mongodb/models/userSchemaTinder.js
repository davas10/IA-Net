import mongoose from 'mongoose';

const userTinder = new mongoose.Schema({
  name: { type: String,  title: 'Name', required: true },
  userWalletAddress: { type: String, title: 'Wallet Address', unique: true, required: true },
  age: { type: Number,  title: 'Age', default: 32 },
  profileImage: { type: String, title: 'Profile Image', default: ' ' },
  likes: { type: Array, title: 'Likes' },
});

const userSchemaTinder = mongoose.model('userTinder', userTinder);

export default userSchemaTinder;
