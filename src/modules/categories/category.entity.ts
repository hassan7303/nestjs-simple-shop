import { Entity, PrimaryKey, Property } from '@mikro-orm/core';

@Entity()
export class Category {
  @PrimaryKey()
  _id!: string;  

  @Property()
  name!: string;  

  @Property({ nullable: true })
  description?: string;  

  @Property({ type: 'date' })
  createdAt = new Date();  

}
