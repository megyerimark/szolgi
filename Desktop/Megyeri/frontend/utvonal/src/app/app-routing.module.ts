import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { ProductComponent } from './product/product.component';
import { ShopComponent } from './shop/shop.component';

const routes: Routes = [
  {path:'product', component: ProductComponent }, 
  {path:'employee', component: EmployeeComponent }, 
  {path:'shop', component: ShopComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
