import { Component, inject, OnInit } from '@angular/core';
import { ProductsServiceService } from '../../api/products-service.service';
import { Product } from '../../../models/Product';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {

  private _products = inject(ProductsServiceService)

  products: Product[] = [];

  loading: boolean = true;

  ngOnInit(): void {
    this._products.getAllProducts().subscribe(data => {
      this.products = data;
      this.loading = false;
    })
  }

}
