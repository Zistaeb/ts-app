import { Product } from "./../products/product.model";
import { User } from "./../users/user.model";

export interface Order {
  id: string | number;
  createData: Date;
  products:Product[];
  user: User;
}
