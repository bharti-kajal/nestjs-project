import { Controller, Get } from '@nestjs/common';
import { ProductService } from './product.service.js';

@Controller('product')
export class ProductController {
    constructor(private readonly productService: ProductService) {}

    @Get()
    getProducts(){
        return this.productService.getAllProducts();
    }

    @Get(':id')
    getProductById(id: number){
        return this.productService.getProductById(id);
    }
}
