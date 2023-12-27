import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeProjectsRoutingModule } from './employee-projects-routing.module';
import { ProjectsComponent } from './components/projects/projects.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ProjectsComponent
  ],
  imports: [
    CommonModule,
    EmployeeProjectsRoutingModule,
    SharedModule
  ]
})
export class EmployeeProjectsModule { }
