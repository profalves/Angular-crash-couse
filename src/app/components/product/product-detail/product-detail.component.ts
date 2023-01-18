import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  public product: string | null | undefined;
  public id?= null;

  constructor(private productService: ProductsService, private route: ActivatedRoute) {
    this.getProductDetail();
  }

  getProductDetail() {
    console.log('ProductDetailComponent',
      this.route.snapshot.paramMap.get('product'),
      typeof this.route.snapshot.paramMap.get('product'));
    const id: string = this.route.snapshot.paramMap.get('product')!;

    // this.product = item
    this.product = this.productService.get(id)!;
  }
}
