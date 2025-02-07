import { Entity, PrimaryKey, Property } from '@mikro-orm/core';
import { Role } from './role.enun';

@Entity()
export class User {
  @PrimaryKey()
  _id!: string;

  @Property()
  firstName!: string;


  @Property()
  lastName!: string;


  @Property()
  phoneNumber!: string;

  @Property()
  email!: string;

  @Property()
  password!: string;

  @Property({ default: true })
  isActive: boolean = true;

  @Property({ default: null })
  profilePicture: string = null;

  @Property({ type: 'enum', default: Role.User })
  role: Role = Role.User;

  @Property({ default: null })
  createdAt: Date;

  @Property({ default: null })
  updatedAt: Date;
}

