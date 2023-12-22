import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagerTasksRoutingModule } from './manager-tasks-routing.module';
import { TasksComponent } from './components/tasks/tasks.component';
import { AddEditTaskComponent } from './components/add-edit-task/add-edit-task.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    TasksComponent,
    AddEditTaskComponent
  ],
  imports: [
    CommonModule,
    ManagerTasksRoutingModule,
    SharedModule
  ]
})
export class ManagerTasksModule { }
