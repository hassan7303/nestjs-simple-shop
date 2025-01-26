import { Injectable } from '@nestjs/common';
import { EntityRepository } from '@mikro-orm/core';
import { InjectRepository } from '@mikro-orm/nestjs';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly userRepository: EntityRepository<User>,
  ) {}

  async create(userData: Partial<User>): Promise<User> {
    const user = this.userRepository.create(userData);
    await this.userRepository.persistAndFlush(user);
    return user;
  }

  async findAll(): Promise<User[]> {
    return this.userRepository.findAll();
  }

  async findOne(id: string): Promise<User> {
    return this.userRepository.findOne({ _id: id });
  }

  async delete(id: string): Promise<void> {
    const user = await this.findOne(id);
    if (user) {
      await this.userRepository.removeAndFlush(user);
    }
  }
}
