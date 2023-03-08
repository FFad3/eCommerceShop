import { product } from "./product"


export interface productPageResult 
{
    items?: product[]
    pageNumber:number,
    pageSize:number,
    totalPages:number,
    itemsCount:number,
    hasPreviousPage:boolean,
    hasNextPage:boolean
}