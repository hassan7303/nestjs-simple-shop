import { Entity, PrimaryKey, Property, ManyToOne } from '@mikro-orm/core';
import { Order } from '../orders/order.entity';  // فایل order.entity.ts

@Entity()
export class Product {
  @PrimaryKey()
  _id!: string;

  @Property()
  name: string;


  constructor(name: string, order: Order) {
    this.name = name;
  }
}
