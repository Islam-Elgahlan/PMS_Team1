import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { EmployeeService } from 'src/app/employee/services/employee.service';
import { IProject, IProjects } from 'src/app/models/project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  constructor(private _employee: EmployeeService, public dialog: MatDialog, private _toastr: ToastrService) { }
  view: boolean = true
  pageSize: number = 10;
  pageNumber: number | undefined = 1;
  tableResponse: IProjects | undefined;
  tableData: IProject[] | undefined = [];
  ngOnInit() {
    this.onGetAllProjects()
    console.log('hi');
    
  }
  onGetAllProjects() {
    console.log('lll');
    
    let params = {
      pageSize: this.pageSize,
      pageNumber: this.pageNumber,
    }
console.log(params);

    this._employee.getAllProjects(params).subscribe((res) => {
      this.tableResponse = res;
      this.tableData = this.tableResponse?.data;
      console.log(res);
      console.log(this.tableData);
      
    })
  }

 
  handlePageEvent(e:any){
    
    this.pageSize = e.pageSize
    this.pageNumber = e.pageIndex
    console.log(e);
    this.onGetAllProjects()
  }
}
