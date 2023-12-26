<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
=======
import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { EmployeeService } from 'src/app/employee/services/employee.service';
import { IEProject, IEProjects, IProject, IProjects } from 'src/app/models/project';
import { MatDialog } from '@angular/material/dialog';
>>>>>>> f4d0576d116508e4cff4e13077551b300cacf6c3

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
<<<<<<< HEAD
export class ProjectsComponent {}
=======
export class ProjectsComponent {

  constructor(private _EmployeeService: EmployeeService, private _toastr: ToastrService) { }
  view: boolean = true
  pageSize: number = 5;
  pageNumber: number | undefined = 1;
  tableResponse: IEProjects | undefined;
  tableData: IEProject[] | undefined = [];
  ngOnInit() {
    this.onGetAllProjects()
  }
  numberOfTasks : number = 0 
  onGetAllProjects() {
    let params = {
      pageSize: this.pageSize,
      pageNumber: this.pageNumber,
    }

    this._EmployeeService.getAllProjects(params).subscribe((res) => {
      this.tableResponse = res;
      this.tableData = this.tableResponse?.data;
      // console.log(this.tableResponse?.data);
      
       
    })
  }

 

  handlePageEvent(e:any){
    
    this.pageSize = e.pageSize
    this.pageNumber = e.pageIndex
    console.log(e);
    this.onGetAllProjects()
  }
}
>>>>>>> f4d0576d116508e4cff4e13077551b300cacf6c3
