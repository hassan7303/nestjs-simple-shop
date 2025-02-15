import { MikroOrmModuleOptions } from '@mikro-orm/nestjs';
import { MongoDriver } from '@mikro-orm/mongodb';

const config: MikroOrmModuleOptions = {
  driver: MongoDriver, // استفاده از درایور اختصاصی MongoDB
  clientUrl: process.env.MONGODB_URI || 'mongodb://root:123@localhost:27017/shop?authSource=admin',
  dbName: 'shop',
  entities: ['./dist/modules/**/*.entity.js'],
  entitiesTs: ['./src/modules/**/*.entity.ts'],
  debug: true,
};

export default config;
