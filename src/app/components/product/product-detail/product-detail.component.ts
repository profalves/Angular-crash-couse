import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  public product: string | null | undefined;

  constructor(private route: ActivatedRoute, private router: Router, private productsService: ProductsService) {
    this.getProduct();
  }

  getProduct() {
    const id: string = this.route.snapshot.paramMap.get('id')!;

    this.product = this.productsService.getProduct(id);
  }

  backToHome() {
    this.router.navigate(['']);
  }

}
