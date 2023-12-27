import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './components/projects/projects.component';
import { MatDialog } from '@angular/material/dialog';


const routes: Routes = [
  {path: '' , component:ProjectsComponent},
  {path:'projects' , component:ProjectsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeProjectsRoutingModule { }
