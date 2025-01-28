import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(private configservice: ConfigService) {}

  getHello(): string {
    return 'Hello World!';
  }

  getMongoDbUri(): string {
    // از متغیر محیطی برای گرفتن URI دیتابیس
    return this.configservice.get<string>('MONGODB_URI') || 'mongodb://root:123@mongodb:27017/shop';
  }
}
