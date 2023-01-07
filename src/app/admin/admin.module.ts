import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { NewClienteComponent } from './clientes/new-cliente/new-cliente.component';
import { ListClientComponent } from './clientes/list-cliente/list-client.component';
import { EditClienteComponent } from './clientes/edit-cliente/edit-cliente.component';
import { LayoutComponent } from './layout/layout.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatMenuTrigger } from '@angular/material/menu';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    NewClienteComponent,
    ListClientComponent,
    EditClienteComponent,
    LayoutComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule
  
  ]
})
export class AdminModule { }
