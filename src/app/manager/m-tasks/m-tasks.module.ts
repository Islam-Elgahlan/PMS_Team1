import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MTasksComponent } from './m-tasks/m-tasks.component';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes=[
  {path:'',component:MTasksComponent}
]

@NgModule({
  declarations: [
    MTasksComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class MTasksModule { }
