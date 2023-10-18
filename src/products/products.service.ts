import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';

@Injectable()
export class ProductsService {
  @InjectRepository(Product)
  private productsRepository: Repository<Product>;

  async create(productDto: CreateProductDto) {
    const product = await this.productsRepository.save(productDto);
    return product;
  }

  async findAll(): Promise<Product[]> {
    const product = await this.productsRepository.find();
    return product;
  }

  async findOne(id: number): Promise<Product> | null {
    const product = await this.productsRepository.findOneBy({ id });
    return product;
  }
  async remove(id: number) {
    const product = await this.productsRepository.delete({ id });
    return product;
  }
}
