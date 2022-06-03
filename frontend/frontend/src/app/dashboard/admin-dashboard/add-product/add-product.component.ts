import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductServiesService } from 'src/app/services/product-servies.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent implements OnInit {
  addProduct: any;

  constructor(
    private fb: FormBuilder,
    private productService: ProductServiesService,
    private route: Router
  ) {
    this.addProduct = this.fb.group({
      pName: new FormControl('', Validators.required),
      pImage: new FormControl('', Validators.required),
      pDes: new FormControl('', Validators.required),
      pPrice: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {}
  submit() {
    console.log(this.addProduct.value);
    this.productService.postProduct(this.addProduct.value).subscribe((data) => {
      console.log(data);
      this.route.navigate(['/dashboard/adminDashboard']);
    });
  }
}
