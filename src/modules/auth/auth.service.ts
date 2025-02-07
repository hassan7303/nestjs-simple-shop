import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@mikro-orm/nestjs';
import { EntityRepository ,EntityManager} from '@mikro-orm/core';
import { User } from '../users/user.entity';
import * as bcrypt from 'bcrypt';
import { Role } from '../users/role.enun';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private readonly userRepository: EntityRepository<User>,
    private readonly em: EntityManager,
  ) {}

  // ثبت‌نام کاربر
  async register(
    firstName: string,
    lastName: string,
    phoneNumber: string,
    email: string,
    password: string,
    profilePicture: string,
    role: Role,
  ) {
    const user = new User();
    user.firstName = firstName;
    user.lastName = lastName;
    user.phoneNumber = phoneNumber;
    user.email = email;
    user.password = password;
    user.profilePicture = profilePicture || null;
    user.role = role || Role.User;
    user.isActive = true;
    user.createdAt = new Date();
    user.updatedAt = new Date();

    await this.em.persistAndFlush(user); 

    return { message: 'User registered successfully' };
  }

  // ورود کاربر
  async login(email: string, password: string) {
    const user = await this.userRepository.findOne({ email });
    if (!user) {
      throw new Error('User not found');
    }

    const passwordValid = await bcrypt.compare(password, user.password);
    if (!passwordValid) {
      throw new Error('Invalid credentials');
    }

    return { message: 'Login successful' };
  }

  // به‌روزرسانی اطلاعات کاربر
  async updateUser(userId: string, updateData: Partial<User>) {
    const user = await this.userRepository.findOne({ _id: userId });
    if (!user) {
      throw new Error('User not found');
    }

    // به‌روزرسانی فیلدهای کاربر
    Object.assign(user, updateData);
    user.updatedAt = new Date();

    await this.em.persistAndFlush(user);

    return { message: 'User updated successfully' };
  }
}