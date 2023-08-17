import { Product } from './product.model';

export interface CreateProductDto extends Omit <Product, 'id' | 'createData' | 'updateData' | 'category'> {
  categoryId: string;
};


//Contrario del Omit (Escoger los campos que se necesitan)

type example = Pick <Product, 'color' | 'description'>;

//type UpdateProductDto = Partial<Product>;     //Pone todos los atributos de "Product" como opcionales

export interface UpdateProductDto extends Partial<CreateProductDto> {};

type example2 = Required<Product>;              //Contrario de Partial, que todo sea requerido

export interface FindProductDto extends Readonly<Partial<Omit<Product, 'tags'>>> {   //Omitir tags, y asignarle nuevo tipado
  readonly tags: ReadonlyArray<string>;
};

type example3 = Readonly<Product>;
