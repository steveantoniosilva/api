import mongoose from 'mongoose';

const MONGODB_URI = process.env.EXPO_PUBLIC_MONGODB_URI;

console.log('MONGODB_URI', MONGODB_URI);

mongoose.connect(MONGODB_URI);
