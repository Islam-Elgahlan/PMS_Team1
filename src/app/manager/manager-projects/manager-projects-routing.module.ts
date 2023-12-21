import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagerComponent } from '../components/manager/manager.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { AddEditProjectComponent } from './components/add-edit-project/add-edit-project.component';

const routes: Routes = [
  {path: '' , component:ProjectsComponent},
  {path:'projects' , component:ProjectsComponent},
  {path:'add-edit-project' , component:AddEditProjectComponent},
  {path:'edit/:id' , component:AddEditProjectComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagerProjectsRoutingModule { }
