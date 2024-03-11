import { ExpoResponse } from 'expo-router/server';
import connectToMongoDB from '../api-routes/mongo';
import BlogModel from '../../models/BlogModel';

export function GET() {
  return ExpoResponse.json({ message: 'hello world' });
}
