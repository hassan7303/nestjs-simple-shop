import { Entity, PrimaryKey, Property } from '@mikro-orm/core';

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

  @Property({ type: "enum", enum: Role, default: Role.User })
  role: Roles = null;

  @Property({ default: null })
  createdAt: Date;

  @Property({ default: null })
  updatedAt: Date;
}

