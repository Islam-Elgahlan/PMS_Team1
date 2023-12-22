import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagerTasksRoutingModule } from './manager-tasks-routing.module';
import { TasksComponent } from './components/tasks/tasks.component';
import { AddEditTaskComponent } from './components/add-edit-task/add-edit-task.component';


@NgModule({
  declarations: [
    TasksComponent,
    AddEditTaskComponent
  ],
  imports: [
    CommonModule,
    ManagerTasksRoutingModule
  ]
})
export class ManagerTasksModule { }
