import { Injectable } from '@nestjs/common';
import { EntityRepository } from '@mikro-orm/mongodb';
import { InjectRepository } from '@mikro-orm/nestjs';
import { Product } from './product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: EntityRepository<Product>,
  ) {}

  async createProduct(data: Partial<Product>): Promise<Product> {
    const product = this.productRepository.create(data);
    await this.productRepository.persistAndFlush(product);
    return product;
  }

  async getProducts(): Promise<Product[]> {
    return this.productRepository.findAll();
  }

  async getProductById(id: string): Promise<Product | null> {
    return this.productRepository.findOne({ id });
  }
}
