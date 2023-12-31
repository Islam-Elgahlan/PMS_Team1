import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './components/users/users.component';
import { ViewUserComponent } from './components/view-user/view-user.component';

const routes: Routes = [
  {path: '' , component:UsersComponent},
  {path:'users' , component:UsersComponent},
  {path:'viewUser/:id' , component:ViewUserComponent},
  // {path:'add-edit-task' , component:AddEditTaskComponent},
  // {path:'edit/:id' , component:AddEditTaskComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagerUsersRoutingModule { }
