import { Component } from '@angular/core';
import { ITask, ITasks } from 'src/app/models/project';
import { TaskService } from '../../services/task.service';
import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material/dialog';
import { DeleteItemComponent } from 'src/app/shared/delete-item/delete-item.component';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent {
  
  // tasksList: ITasks[] = [];
  tableResponse: ITasks | undefined;
  tableData: ITask[] | undefined = [];
  status: string = ''
  viewFlag:boolean=true
  pageIndex : number = 0
  pageSize: number = 5;
  pageNumber: number | undefined = 1;
  searchValue: string = '';

  constructor(private _taskService: TaskService,private _toastr:ToastrService,public dialog:MatDialog,
    ) { }
  ngOnInit() {
    this.openTasks();
  }
  openTasks() {
    let params = {
      pageSize: this.pageSize,
      pageNumber: this.pageNumber,
      status: this.status,
      title : this.searchValue
    }
    this._taskService.getAllTasks(params).subscribe({
      next: (res) => {
        console.log(res.data);
        this.tableResponse = res;
        this.tableData = this.tableResponse?.data;
     
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
      this._taskService.deleteTask(id).subscribe({
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
    
    console.log(e);
    this.pageSize = e.pageSize
    this.pageNumber = e.pageIndex + 1
    this.openTasks()
  }
  search(term: string) {
    this.searchValue = term
    // console.log(term)
    this.openTasks();
  }
 
}
