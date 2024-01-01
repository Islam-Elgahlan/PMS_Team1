
import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/employee/services/employee.service';
import {
  CdkDrag,
  CdkDragDrop,
  CdkDropList,
  CdkDropListGroup,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit{

  todo:any[]=[]
  inprogress:any[]=[]
  done:any[]=[]
  id:any;
  constructor(private _employeeService:EmployeeService,private _toastr:ToastrService){}
  ngOnInit(): void {
    this.getMyTasks()
  }

getMyTasks(){
  let params={
    pageSize:100,
    pageNumber:1
  }
  this._employeeService.getMyAssignedTasks(params).subscribe({
    next:(res)=>{
     
      for (let task of res.data) {
        
        if(task.status == 'ToDo'){
        this.todo.push(task)

        }else if (task.status == 'InProgress') {
          this.inprogress.push(task)
        } else {
          this.done.push(task)
        }
        
        
      }
    },error:(err)=>{

    },complete:()=> {
      
    },
  })
}
 
  drop(event: CdkDragDrop<string[]>) {
   
    const draggedItemId = event.item.data; 
    // id
    
    this._employeeService.changeTaskStatus(draggedItemId,event.container.id).subscribe({
      next:(res)=>{
      
        this._toastr.success(`Task Adedd to ${res.status}`)
      },error:(err)=>{

      },complete:()=>{
        
      }
    })
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

}
