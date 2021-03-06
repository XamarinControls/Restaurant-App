import { Category } from './category';
import { IBaseModel } from './base.model';

export class Food implements IBaseModel {
    id: string;
    name: string;
    description: string;
    price: number;
    category: Category;
    categoryId: string;
    picture: string;
}
