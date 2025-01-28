import { Injectable, NotFoundException } from '@nestjs/common';
import { EntityManager } from '@mikro-orm/core';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(private readonly em: EntityManager) {}

  // Create User
  async create(createUserDto: Partial<User>): Promise<User> {
    const user = this.em.create(User, createUserDto);
    await this.em.persistAndFlush(user);
    return user;
  }

  // Find All Users
  async findAll(): Promise<User[]> {
    return this.em.find(User, {});
  }

  // Find One User by ID
  async findOne(id: string): Promise<User> {
    const user = await this.em.findOne(User, { id });
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return user;
  }

  // Update User
  async update(id: string, updateUserDto: Partial<User>): Promise<User> {
    const user = await this.findOne(id); // Check if user exists
    this.em.assign(user, updateUserDto); // Merge updates into the user
    await this.em.flush(); // Save changes
    return user;
  }

  // Delete User
  async delete(id: string): Promise<void> {
    const user = await this.findOne(id); // Check if user exists
    await this.em.removeAndFlush(user); // Remove user from DB
  }
}
