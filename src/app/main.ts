import {faker} from '@faker-js/faker';
import { addProduct, products } from './products/product.service'

for (let index = 0; index < 50; index++) {
  addProduct({
    id: faker.string.uuid(),
    description: faker.commerce.productDescription(),
    imagen: faker.image.url(),
    isNew: faker.datatype.boolean(),
    size: faker.helpers.arrayElement(['L', 'XL', 'S', 'M']),
    color: faker.color.cmyk(),
    price: parseInt(faker.commerce.price(), 10),
    title: faker.commerce.productName(),
    createData: faker.date.recent(),
    updateData: faker.date.recent(),
    stock: faker.number.int({min: 10, max: 100}),
    category: {
      id: faker.string.uuid(),
      name:  faker.commerce.department(),
      createData: faker.date.recent(),
      updateData: faker.date.recent(),
    }
  });
};

console.log(products);


