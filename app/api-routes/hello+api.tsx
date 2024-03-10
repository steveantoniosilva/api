import { ExpoResponse } from 'expo-router/server';
import mongo from '../api-routes/mongo';

export function GET() {
  return ExpoResponse.json({ message: 'hello world' });
}
