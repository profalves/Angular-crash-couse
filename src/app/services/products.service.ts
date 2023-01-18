import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  public sender = new EventEmitter();

  constructor() { }

  private listProducts: Array<string> = ["Arroz", "Feijão", "Ovo"];

  public productList() {
    return this.listProducts;
  }

  public add(product: string) {
    this.productListAlert(product);
    this.listProducts.push(product);
  }

  public productListAlert(product: string) {
    return this.sender.emit(product);
  }
}
