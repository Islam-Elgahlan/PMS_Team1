<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
=======
import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { EmployeeService } from 'src/app/employee/services/employee.service';
import { IEProject, IEProjects, IProject, IProjects } from 'src/app/models/project';
import { MatDialog } from '@angular/material/dialog';
<<<<<<< HEAD
>>>>>>> f4d0576d116508e4cff4e13077551b300cacf6c3
=======
import { NgxSpinnerService } from 'ngx-spinner';
>>>>>>> 366e049e7a112c92f9ff1a10a68dd9110a31ab33

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
<<<<<<< HEAD
export class ProjectsComponent {}
=======
export class ProjectsComponent {

  constructor(private _EmployeeService: EmployeeService, private _toastr: ToastrService ,private spinner: NgxSpinnerService) { }
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
    this.spinner.show();
    this._EmployeeService.getAllProjects(params).subscribe((res) => {
      this.tableResponse = res;
      this.tableData = this.tableResponse?.data;
      this.spinner.hide();
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
