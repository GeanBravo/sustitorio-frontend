import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { IndexComponent } from './index/index.component';
import { MaterialModule } from '../material/material.module';
import { CreditosComponent } from './creditos/creditos.component';
import {MatSelectModule} from "@angular/material/select";
import {FormsModule} from "@angular/forms";

import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    LayoutComponent,
    IndexComponent,
    CreditosComponent,
  ],
  imports: [
    HttpClientModule,

    CommonModule,
    HomeRoutingModule,
    MaterialModule,
    MatSelectModule,
    FormsModule,
  ]
})
export class HomeModule { }
