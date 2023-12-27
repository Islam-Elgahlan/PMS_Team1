import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeTasksRoutingModule } from './employee-tasks-routing.module';
import { TasksComponent } from './components/tasks/tasks.component';
import {DragDropModule} from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    TasksComponent
  ],
  imports: [
    CommonModule,
    EmployeeTasksRoutingModule,
    DragDropModule
  ]
})
export class EmployeeTasksModule { }
