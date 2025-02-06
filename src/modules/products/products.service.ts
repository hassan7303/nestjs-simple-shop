import { Injectable } from '@nestjs/common';
import { EntityManager } from '@mikro-orm/mongodb';
import { InjectRepository } from '@mikro-orm/nestjs';
import { Product } from './product.entity';

@Injectable()
export class ProductsService {
  constructor(
    private readonly em: EntityManager, 
  ) {}

  async createProduct(data: Partial<Product>): Promise<Product> {
    const product = this.em.create(Product, data);
    await this.em.persistAndFlush(product); 
    return product;
  }

  async getProducts(): Promise<Product[]> {
    return this.em.find(Product, {});
  }

  async getProductById(id: string): Promise<Product | null> {
    return this.em.findOne(Product, { _id: id }); 
  }
}
