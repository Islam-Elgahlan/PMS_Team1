import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagerProjectsRoutingModule } from './manager-projects-routing.module';
import { AddNewProjectComponent } from './components/add-new-project/add-new-project.component';
import { ProjectsComponent } from './components/projects/projects.component';


@NgModule({
  declarations: [
    AddNewProjectComponent,
    ProjectsComponent
  ],
  imports: [
    CommonModule,
    ManagerProjectsRoutingModule
  ]
})
export class ManagerProjectsModule { }
