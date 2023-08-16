import { addProduct } from './products/product.service';

addProduct({
  id: 7,
  title: "p1",
  createData: new Date(),
  updateData: new Date(2023, 8),
  stock: 90,
  category: {
    id: '12',
    name: 'c1',
    createData: new Date(),
    updateData: new Date(),
  }
});
