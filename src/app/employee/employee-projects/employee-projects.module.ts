import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeProjectsRoutingModule } from './employee-projects-routing.module';
import { ProjectsComponent } from './components/projects/projects.component';


@NgModule({
  declarations: [
    ProjectsComponent
  ],
  imports: [
    CommonModule,
    EmployeeProjectsRoutingModule
  ]
})
export class EmployeeProjectsModule { }
