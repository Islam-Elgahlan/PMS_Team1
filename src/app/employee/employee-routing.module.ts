import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [

  {path:'',redirectTo:'home',pathMatch:'full'},
  
  {path:'tasks',loadChildren: () => import('./employee-tasks/employee-tasks.module').then(m => m.EmployeeTasksModule)}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
