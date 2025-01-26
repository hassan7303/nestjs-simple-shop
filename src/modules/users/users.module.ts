import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User } from './user.entity';

@Module({
  imports: [
    MikroOrmModule.forFeature([User]),
  ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
