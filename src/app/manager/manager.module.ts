import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagerRoutingModule } from './manager-routing.module';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'projects',loadChildren: () => import('./m-projects/m-projects.module').then(m => m.MProjectsModule)},
  {path:'tasks',loadChildren: () => import('./m-tasks/m-tasks.module').then(m => m.MTasksModule)}
];


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    ManagerRoutingModule,
    SharedModule,
     RouterModule.forChild(routes)
  ]
})
export class ManagerModule { }
