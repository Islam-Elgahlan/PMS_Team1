import { Component } from '@angular/core';
import { ITask, ITasks } from 'src/app/models/project';
import { TaskService } from '../../services/task.service';
import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material/dialog';
import { DeleteItemComponent } from 'src/app/shared/delete-item/delete-item.component';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent {
  
  // tasksList: ITasks[] = [];
  tableResponse: ITasks | undefined;
  tableData: ITask[] | undefined = [];
<<<<<<< HEAD
  pageSize: any;
  pageNumber: any;
  constructor(private _TaskService: TaskService,private _toastr:ToastrService,public dialog:MatDialog) { }
=======
  constructor(private _TaskService: TaskService,private _toastr:ToastrService,public dialog:MatDialog,
    private spinner: NgxSpinnerService) { }
>>>>>>> 366e049e7a112c92f9ff1a10a68dd9110a31ab33
  ngOnInit() {
    this.openTasks();
  }
  openTasks() {
    this.spinner.show()
    this._TaskService.getAllTasks().subscribe({
      next: (res) => {
        console.log(res.data);
        this.tableResponse = res;
        this.tableData = this.tableResponse?.data;
        this.spinner.hide()
      },
      error: (err) => { },
      complete: () => { },
    });
  }

  openAddDialog(data:any): void {
    console.log(data);
    
    const dialogRef = this.dialog.open(DeleteItemComponent, {
     data:data, 
      width:'30%'
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      if(result){
        this.deleteItem(result.id)
        this.openTasks()
      }
      
    });

   
  }
  deleteItem(id:number){
      this._TaskService.deleteTask(id).subscribe({
        next:(res)=>{
          console.log(res);
          
        },error:(err)=>{
    this._toastr.error('Try Again')
        },complete:()=> {
          this._toastr.success('Project deleted Successfully')
        },
      })
  }

  
  handlePageEvent(e:any){
    
    this.pageSize = e.pageSize
    this.pageNumber = e.pageIndex
    console.log(e);
    this.openTasks()
  }
}
