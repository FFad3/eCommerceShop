import { productsCategory } from "./productsCategory";

export interface product
{
    id:number,
    name:string,
    price:number,
    category:productsCategory,
    description:string,
    imgUrl:string
}