import { ExpoResponse } from 'expo-router/server';

export function GET() {
  return ExpoResponse.json({ message: 'hello world' });
}
