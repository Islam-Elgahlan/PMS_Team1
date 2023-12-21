import { Component } from '@angular/core';
import { ManagerService } from '../../services/manager.service';
import { IProject, IProjects } from 'src/app/models/project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
constructor(private _ManagerService: ManagerService ){}

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
}
