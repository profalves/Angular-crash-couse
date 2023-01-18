import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  constructor(private productsService: ProductsService) {  }

  public productList: Array<string> = [];

  ngOnInit() {
    this.productList = this.productsService.productList();

    this.productsService.sender.subscribe(res => {
      alert(`Produto ${res} cadastrado com sucesso`);
    })
  }
}
