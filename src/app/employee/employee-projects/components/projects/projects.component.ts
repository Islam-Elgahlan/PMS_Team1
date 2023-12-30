import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { EmployeeService } from 'src/app/employee/services/employee.service';

import {IEProject,IEProjects,} from 'src/app/models/project';
import { MatDialog } from '@angular/material/dialog';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  view: boolean = true;
  pageIndex:number = 0
  pageSize: number = 5;
  pageNumber: number | undefined = 1;
  tableResponse: IEProjects | undefined;
  tableData: IEProject[] | undefined = [];
  
  constructor(
    private _EmployeeService: EmployeeService,
    private _toastr: ToastrService,
    private spinner: NgxSpinnerService
  ) {}
  
  ngOnInit() {
    this.onGetAllProjects();
  }
  numberOfTasks: number = 0;
  onGetAllProjects() {
    let params = {
      pageSize: this.pageSize,
      pageNumber: this.pageNumber,
    }
    this.spinner.show();

    this._EmployeeService.getAllProjects(params).subscribe((res) => {
      this.tableResponse = res;
      this.tableData = this.tableResponse?.data;
    
      // console.log(this.tableResponse?.data);
    });
  }

  handlePageEvent(e: any) {
    console.log(e);
    this.pageSize = e.pageSize
    this.pageNumber = e.pageIndex + 1
    this.onGetAllProjects();
  }
}
