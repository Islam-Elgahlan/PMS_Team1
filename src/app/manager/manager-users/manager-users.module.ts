import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagerUsersRoutingModule } from './manager-users-routing.module';
import { UsersComponent } from './components/users/users.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    UsersComponent
  ],
  imports: [
    CommonModule,
    ManagerUsersRoutingModule,
    SharedModule
  ]
})
export class ManagerUsersModule { }
