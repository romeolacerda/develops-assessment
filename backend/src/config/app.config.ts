import { registerAs } from '@nestjs/config';
import { AppConfig } from './config.type';

export default registerAs<AppConfig>('app', () => ({
  baseUrl: process.env.RECIPE_URL || '',
}));
