import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductServiesService } from 'src/app/services/product-servies.service';
import { MatDialog } from '@angular/material/dialog';
import { EditProductComponent } from './edit-product/edit-product.component';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css'],
})
export class AdminDashboardComponent implements OnInit {
  productData: any;
  constructor(
    private productService: ProductServiesService,
    private route: Router,
    public dialoug: MatDialog,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getData();
  }
  getData() {
    this.productService.getProduct().subscribe((data) => {
      this.productData = data.products;
      console.log(this.productData);
    });
  }

  editProduct(value: any) {
    const dialogRef = this.dialoug.open(EditProductComponent, {
      height: '70%',
      width: '50%',
      data: value,
    });
    dialogRef.afterClosed().subscribe((res) => {
      console.log(`Dialog result: ${res}`);
      if (res === 'update') {
        this.getData();
      }
    });
  }

  deleteProduct(id: any) {
    this.productService.deleteProduct(id).subscribe((data) => {
      console.log(data);
      this.getData();
    });
  }
}
