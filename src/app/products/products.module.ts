import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { RouterModule, Routes } from '@angular/router';
import { RoleGuard } from '../shared/guard/role.guard';
import { ProductsComponent } from './products.component';

const routes: Routes = [
  
    { path: 'list', component: ListComponent,
      canActivate : [RoleGuard] },
  
    { path: 'add', component: AddComponent,
      canActivate : [RoleGuard] }
];

@NgModule({
  declarations: [
    AddComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})

export class ProductsModule { }
