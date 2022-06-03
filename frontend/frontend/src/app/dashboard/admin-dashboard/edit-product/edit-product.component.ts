import { Component, Inject, OnInit } from '@angular/core';
import { inject } from '@angular/core/testing';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductServiesService } from 'src/app/services/product-servies.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css'],
})
export class EditProductComponent implements OnInit {
  productEdit: any;
  constructor(
    private fb: FormBuilder,
    private productService: ProductServiesService,
    @Inject(MAT_DIALOG_DATA) public editData: any,
    private closeMat: MatDialogRef<EditProductComponent>
  ) {
    this.productEdit = this.fb.group({
      pName: new FormControl('', [Validators.required]),
      pPrice: new FormControl('', [Validators.required]),
      pImage: new FormControl('', [Validators.required]),
      pDes: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    if (this.editData) {
      this.productEdit.controls['pName'].setValue(this.editData.pName);
      this.productEdit.controls['pPrice'].setValue(this.editData.pPrice);
      this.productEdit.controls['pImage'].setValue(this.editData.pImage);
      this.productEdit.controls['pDes'].setValue(this.editData.pDes);
    }
  }

  EditProduct() {
    this.productService
      .editProduct(this.editData._id, this.productEdit.value)
      .subscribe((data) => {
        console.log(data);
        if (!data.error) {
          this.closeMat.close('update');
        }
      });
  }
}
