import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from './product.entity';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  async createProduct(@Body() data: Partial<Product>): Promise<Product> {
    return this.productsService.createProduct(data);
  }

  @Get()
  async getProducts(): Promise<Product[]> {
    return this.productsService.getProducts();
  }

  @Get(':id')
  async getProductById(@Param('id') id: string): Promise<Product | null> {
    return this.productsService.getProductById(id);
  }
}
