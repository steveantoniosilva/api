import mongoose from 'mongoose';

const MONGODB_URI = process.env.EXPO_PUBLIC_MONGODB_URI;

console.log('MONGODB_URI:', MONGODB_URI);

if (!MONGODB_URI) {
  throw new Error('Missing MONGODB_URI environment variable');
}

mongoose
  .connect(MONGODB_URI)
  .then(() => console.log('Successfully connected to MongoDB'))
  .catch(error => console.error('Error connecting to MongoDB:', error));
