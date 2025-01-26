import { MikroOrmModuleOptions } from '@mikro-orm/nestjs';

const config: MikroOrmModuleOptions = {
  type: 'mongo',
  clientUrl: process.env.MONGO_URI || 'mongodb://localhost:27017/shop',
  entities: ['./dist/modules/**/*.entity.js'], // فایل‌های کامپایل‌شده
  entitiesTs: ['./src/modules/**/*.entity.ts'], // فایل‌های اصلی
  debug: true,
};

export default config;
