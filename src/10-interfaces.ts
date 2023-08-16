type Sizes = 'S' | 'M' | 'L' | 'XL';
type userId = string | number;

/*type Product = {
  id: string | number;
  title: string;
  createData: Date;
  stock: number;
  size?: Sizes;
};*/

interface Product {
  id: string | number;
  title: string;
  createData: Date;
  stock: number;
  size?: Sizes;
};

const products: Product[] = [];

products.push({
  id: 7,
  title: "p1",
  createData: new Date(),
  stock: 90
});

const addProduct = (data: Product) => {
  products.push(data);
};
