import { Entity, PrimaryKey, Property } from '@mikro-orm/core';

@Entity()
export class User {
  @PrimaryKey()
  id!: string;

  @Property()
  name!: string;

  @Property({nullable: true})
  email?: string;

  @Property()
  password!: string;

  @Property({ default: true })
  isActive: boolean = true;
}

