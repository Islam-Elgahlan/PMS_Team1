import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagerRoutingModule } from './manager-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ManagerComponent } from './components/manager/manager.component';
import { HomeComponent } from './components/home/home.component';


@NgModule({
  declarations: [
    ManagerComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    ManagerRoutingModule,
    SharedModule
  ]
})
export class ManagerModule { }
