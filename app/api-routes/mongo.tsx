import mongoose from 'mongoose';

const MONGODB_URI = process.env.EXPO_PUBLIC_MONGODB_URI;

const connectToMongoDB = async () => {
  mongoose
    .connect(MONGODB_URI)
    .then(() => console.log('Successfully connected to MongoDB'))
    .catch(error => console.error('Error connecting to MongoDB:', error));
};

export default connectToMongoDB;
