import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { EditProfileComponent } from '../auth/components/edit-profile/edit-profile.component';

const routes: Routes = [

  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'edit-profile',component:EditProfileComponent},
  {path:'projects',loadChildren: () => import('./manager-projects/manager-projects.module').then(m => m.ManagerProjectsModule)},
  {path:'tasks',loadChildren: () => import('./manager-tasks/manager-tasks.module').then(m => m.ManagerTasksModule)}
  ,{path:'users',loadChildren: () => import('./manager-users/manager-users.module').then(m => m.ManagerUsersModule)}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManagerRoutingModule {}
