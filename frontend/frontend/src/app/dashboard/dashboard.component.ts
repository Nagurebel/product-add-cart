import { Component, OnInit } from '@angular/core';
import { ProductServiesService } from '../services/product-servies.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  productData: any;
  constructor(private productService: ProductServiesService) {}

  ngOnInit() {
    this.getData();
  }
  getData() {
    this.productService.getProduct().subscribe((data) => {
      this.productData = data.products;
      console.log(this.productData);
    });
  }
}
