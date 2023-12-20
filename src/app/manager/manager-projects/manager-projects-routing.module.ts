import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNewProjectComponent } from './components/add-new-project/add-new-project.component';
import { ManagerComponent } from '../components/manager/manager.component';

const routes: Routes = [
  {path:'',component:ManagerComponent},
  {path:'add-new-project' , component:AddNewProjectComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagerProjectsRoutingModule { }
