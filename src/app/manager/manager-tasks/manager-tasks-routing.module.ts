import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasksComponent } from './components/tasks/tasks.component';
import { AddEditTaskComponent } from './components/add-edit-task/add-edit-task.component';

const routes: Routes = [
  {path: '' , component:TasksComponent},
  {path:'tasks' , component:TasksComponent},
  {path:'add-edit-task' , component:AddEditTaskComponent},
  {path:'edit/:id' , component:AddEditTaskComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagerTasksRoutingModule { }
