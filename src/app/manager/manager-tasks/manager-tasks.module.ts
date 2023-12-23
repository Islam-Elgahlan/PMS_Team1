import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagerTasksRoutingModule } from './manager-tasks-routing.module';
import { TasksComponent } from './components/tasks/tasks.component';
import { AddEditTaskComponent } from './components/add-edit-task/add-edit-task.component';
import { SharedModule } from 'src/app/shared/shared.module';
import {  RouterModule, Routes } from '@angular/router';


const routes:Routes=[
  {path:'',component:TasksComponent},
  {path:'add',component:AddEditTaskComponent},



]

@NgModule({
  declarations: [
    TasksComponent,
    AddEditTaskComponent
  ],
  imports: [
    CommonModule,
    ManagerTasksRoutingModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class ManagerTasksModule { }
