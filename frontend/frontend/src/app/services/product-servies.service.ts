import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.dev';
import { Products } from '../model/model';

@Injectable({
  providedIn: 'root',
})
export class ProductServiesService {
  constructor(private http: HttpClient) {}
  url = environment.PRODUCT_URL;

  getProduct() {
    return this.http.get<{
      error: boolean;
      message: string;
      products: Products[];
    }>(`${this.url}getproducts`);
  }

  postProduct(data: any) {
    return this.http.post<{
      error: boolean;
      message: string;
      products: Products;
    }>(`${this.url}add-product`, data);
  }

  editProduct(id: any, data: any) {
    return this.http.put<{
      error: boolean;
      message: string;
      products: Products;
    }>(`${this.url}edit-product?_id=${id}`, data);
  }

  deleteProduct(id: any) {
    return this.http.delete(`${this.url}delete-product?_id=${id}`);
  }
}
