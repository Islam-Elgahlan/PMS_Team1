import { Component } from '@angular/core';
import { ManagerService } from '../../services/manager.service';
import { IProject, IProjects } from 'src/app/models/project';
import { MatDialog } from '@angular/material/dialog';
import { DeleteItemComponent } from 'src/app/shared/delete-item/delete-item.component';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  constructor(
    private _ManagerService: ManagerService,
    public dialog: MatDialog,
    private _toastr: ToastrService,
    private spinner: NgxSpinnerService
  ) {}
  view: boolean = true;
  pageSize: number = 5;
  pageNumber: number | undefined = 1;
  tableResponse: IProjects | undefined;
  tableData: IProject[] | undefined = [];
  ngOnInit() {
    this.onGetAllProjects();
  }
  onGetAllProjects() {
    let params = {
      pageSize: this.pageSize,
      pageNumber: this.pageNumber,
    };
    this.spinner.show();
    this._ManagerService.getAllProjects(params).subscribe({
      next: (res) => {
        this.tableResponse = res;
        this.tableData = this.tableResponse?.data;
        this.spinner.hide();
        localStorage.setItem(
          'projectsCount',
          JSON.stringify(res.totalNumberOfRecords)
        );
      },
      error: (err) => {},
      complete: () => {
       
      },
    });
  }

  openAddDialog(data: any): void {
    console.log(data);

    const dialogRef = this.dialog.open(DeleteItemComponent, {
      data: data,
      width: '30%',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      console.log(result);
      if (result) {
        this.deleteItem(result.id);
        this.onGetAllProjects();
      }
    });
  }
  deleteItem(id: number) {
    this._ManagerService.deleteProject(id).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => {
        this._toastr.error('Try Again');
      },
      complete: () => {
        this._toastr.success('Project deleted Successfully');
      },
    });
  }
  handlePageEvent(e: any) {
    this.pageSize = e.pageSize;
    this.pageNumber = e.pageIndex;
    console.log(e);
    this.onGetAllProjects();
  }
}
