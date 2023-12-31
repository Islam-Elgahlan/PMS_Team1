import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { EditProfileComponent } from '../auth/components/edit-profile/edit-profile.component';

const routes: Routes = [

  {path:'',redirectTo:'home',pathMatch:'full'},
  
  {path:'home',component:HomeComponent},
  {path:'edit-profile',component:EditProfileComponent},
  {path:'projects',loadChildren: () => import('./employee-projects/employee-projects.module').then(m => m.EmployeeProjectsModule)},
  {path:'tasks',loadChildren: () => import('./employee-tasks/employee-tasks.module').then(m => m.EmployeeTasksModule)}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
