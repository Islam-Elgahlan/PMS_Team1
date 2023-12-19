import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagerProjectsRoutingModule } from './manager-projects-routing.module';
import { AddNewProjectComponent } from './components/add-new-project/add-new-project.component';


@NgModule({
  declarations: [
    AddNewProjectComponent
  ],
  imports: [
    CommonModule,
    ManagerProjectsRoutingModule
  ]
})
export class ManagerProjectsModule { }
