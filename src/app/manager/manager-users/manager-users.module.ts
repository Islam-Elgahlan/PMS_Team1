import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagerUsersRoutingModule } from './manager-users-routing.module';
import { UsersComponent } from './components/users/users.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { BlockUserComponent } from './components/users/block-user/block-user.component';
import { ViewUserComponent } from './components/view-user/view-user.component';


@NgModule({
  declarations: [
    UsersComponent,
    BlockUserComponent,
    ViewUserComponent
  ],
  imports: [
    CommonModule,
    ManagerUsersRoutingModule,
    SharedModule
  ]
})
export class ManagerUsersModule { }
