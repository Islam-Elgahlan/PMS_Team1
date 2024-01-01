import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagerRoutingModule } from './manager-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home/home.component';




@NgModule({
  declarations: [

    HomeComponent
  ],
  imports: [
    CommonModule,
    ManagerRoutingModule,
    SharedModule,
  ]
})
export class ManagerModule { }
