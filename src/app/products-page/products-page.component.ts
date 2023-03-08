import { Component } from '@angular/core';
import {PRODUCTS }  from '../mocks/mock-products';
import { productPageResult } from '../models/productPageResult';
@Component({
  selector: 'products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})
export class ProductsPageComponent {
    pageTitle:string="WIP product page"
    data:productPageResult=PRODUCTS;
}
