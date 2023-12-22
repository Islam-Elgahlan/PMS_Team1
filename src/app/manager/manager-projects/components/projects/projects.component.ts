import { Component } from '@angular/core';
import { ManagerService } from '../../services/manager.service';
import { IProject, IProjects } from 'src/app/models/project';
import { MatDialog } from '@angular/material/dialog';
import { DeleteItemComponent } from 'src/app/shared/delete-item/delete-item.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
constructor(private _ManagerService: ManagerService,public dialog: MatDialog,private _toastr:ToastrService ){}

  pageSize: number = 10;
  pageNumber: number | undefined = 1;
  tableResponse: IProjects | undefined;
  tableData: IProject[] | undefined = [];
  ngOnInit() {
    this.onGetAllProjects()
  }
  onGetAllProjects(){
    this._ManagerService.getAllProjects().subscribe((res)=>{
      this.tableResponse =res;
      this.tableData = this.tableResponse?.data;
    })
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
        this.onGetAllProjects()
      }
      
    });

   
  }
  deleteItem(id:number){
      this._ManagerService.deleteProject(id).subscribe({
        next:(res)=>{
          console.log(res);
          
        },error:(err)=>{
    this._toastr.error('Try Again')
        },complete:()=> {
          this._toastr.success('Project deleted Successfully')
        },
      })
  }
}