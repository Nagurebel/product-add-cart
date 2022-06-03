import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './admin-dashboard/add-product/add-product.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { EditProductComponent } from './admin-dashboard/edit-product/edit-product.component';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  {
    path: 'userDashboard',
    component: DashboardComponent,
  },
  {
    path: 'adminDashboard',
    component: AdminDashboardComponent,
  },
  {
    path: 'addProd',
    component: AddProductComponent,
  },
  {
    path: 'editProd',
    component: EditProductComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
