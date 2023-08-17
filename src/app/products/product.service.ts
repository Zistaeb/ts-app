import {faker} from '@faker-js/faker';
import { Product } from './product.model';
import {CreateProductDto} from './product.dto';

export const products: Product[] = [];

export const addProduct = (data: CreateProductDto): Product => {
  const newProduct = {
    ...data,
    id: faker.string.uuid(),
    createData: faker.date.recent(),
    updateData: faker.date.recent(),
    category: {
      id: data.categoryId,
      name: faker.commerce.department(),
      createData: faker.date.recent(),
      updateData: faker.date.recent(),
    }
  }
  products.push(newProduct);
  return newProduct;
};

export const updateProduct = (id: string, changes: Product) => {
  //code
};
