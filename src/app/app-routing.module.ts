import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './products/add/add.component';
import { ListComponent } from './products/list/list.component';
import { ProductsComponent } from './products/products.component';
import { LoginComponent } from './shared/components/login/login.component';
import { PagenotfoundComponent } from './shared/components/pagenotfound/pagenotfound.component';
import { AuthGuard } from './shared/guard/auth.guard';
import { RoleGuard } from './shared/guard/role.guard';

const routes: Routes = [
  // { path: 'login', component: LoginComponent },

  // { path: 'products', component: ProductsComponent,
  //   canActivate : [AuthGuard],
  //   children : [
  //   { path: 'list', component: ListComponent,
  //     canActivate: [RoleGuard]},
  
  //   { path: 'add', component: AddComponent }
  // ] },

  // { path: '',   redirectTo: '/login', pathMatch: 'full' }, 

  // { path: '**', component: PagenotfoundComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
