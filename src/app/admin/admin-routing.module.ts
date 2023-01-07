import { LayoutModule } from '@angular/cdk/layout';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditClienteComponent } from './clientes/edit-cliente/edit-cliente.component';
import { ListClientComponent } from './clientes/list-cliente/list-client.component';
import { NewClienteComponent } from './clientes/new-cliente/new-cliente.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path:'',
    component: LayoutComponent,
    children: [
      {
        path:'client',
        component: ListClientComponent, 
      },
      {
        path:'client/new',
        component:NewClienteComponent
      },
      {  
        path:'client/:id/edit',
        component:EditClienteComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
