import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagerProjectsRoutingModule } from './manager-projects-routing.module';
import { ProjectsComponent } from './components/projects/projects.component';
import { AddEditProjectComponent } from './components/add-edit-project/add-edit-project.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ProjectsComponent,
    AddEditProjectComponent
  ],
  imports: [
    CommonModule,
    ManagerProjectsRoutingModule,
    SharedModule
  ]
})
export class ManagerProjectsModule { }
