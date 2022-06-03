import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { EditProductComponent } from './admin-dashboard/edit-product/edit-product.component';
import { AddProductComponent } from './admin-dashboard/add-product/add-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShareModule } from '../share/share.module';

@NgModule({
  declarations: [
    DashboardComponent,
    AdminDashboardComponent,
    EditProductComponent,
    AddProductComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ShareModule,
  ],
})
export class DashboardModule {}
