import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeGuard } from '../Guards/employee.guard';
import { ManagerGuard } from '../Guards/manager.guard';
import { ManagerModule } from '../manager/manager.module';
import { EmployeeModule } from '../employee/employee.module';

const routes: Routes = [
  
  {path:'',component:DashboardComponent, children:[
    
    {
      path:"manager",canActivate:[ManagerGuard],loadChildren: () => import('../manager/manager.module').then(m => m.ManagerModule)
      },
    {
      path:"employee",canActivate:[EmployeeGuard],loadChildren: () => import('../employee/employee.module').then(m => m.EmployeeModule)
      }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
