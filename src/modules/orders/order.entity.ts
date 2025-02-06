import { Entity, PrimaryKey, Property, OneToMany } from '@mikro-orm/core';
import { Product } from '../products/product.entity'; // فرض بر این است که مدل Product قبلاً تعریف شده است

@Entity()
export class Order {
  @PrimaryKey()
  _id!: string;

  @Property()
  createdAt: Date = new Date();

  @Property()
  updatedAt: Date = new Date();

  @Property()
  status: string;


  constructor(status: string) {
    this.status = status;
  }
}
