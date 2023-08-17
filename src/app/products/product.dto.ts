import { Product } from './product.model';

export interface CreateProductDto extends Omit <Product, 'id' | 'createData' | 'updateData' | 'category'> {
  categoryId: string;
};


//Contrario del Omit (Escoger los campos que se necesitan)

type example = Pick <Product, 'color' | 'description'>;
