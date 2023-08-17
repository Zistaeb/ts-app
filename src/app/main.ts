import {faker} from '@faker-js/faker';
import { addProduct, products, updateProduct, findProducts } from './products/product.service'

for (let index = 0; index < 50; index++) {
  addProduct({
    description: faker.commerce.productDescription(),
    imagen: faker.image.url(),
    isNew: faker.datatype.boolean(),
    size: faker.helpers.arrayElement(['L', 'XL', 'S', 'M']),
    color: faker.string.uuid(),
    price: parseInt(faker.commerce.price(), 10),
    title: faker.commerce.productName(),
    stock: faker.number.int({min: 10, max: 100}),
    categoryId: faker.string.uuid()
  });
};

console.log(products);
const product = products[0];
updateProduct(product.id, {
  title: 'New title',
  stock: 80,
});

findProducts({
  stock: 10,
  color: 'red',
  createData: new Date(),
  isNew: true,
});


