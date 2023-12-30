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
  constructor(private _ManagerService: ManagerService, public dialog: MatDialog, private _toastr: ToastrService,
  ) { }
  pageIndex: number = 0
  view: boolean = true
  pageSize: number = 5;
  pageNumber: number | undefined = 1;
  tableResponse: IProjects | undefined;
  tableData: IProject[] | undefined = [];
  searchValue: string = '';
  ngOnInit() {
    this.onGetAllProjects()
  }
  onGetAllProjects() {
    let params = {
      pageSize: this.pageSize,
      pageNumber: this.pageNumber,
      title : this.searchValue
    }

    this._ManagerService.getAllProjects(params).subscribe((res) => {
      this.tableResponse = res;
      this.tableData = this.tableResponse?.data;
      localStorage.setItem('projectsCount', '')
    }, (error) => {

    })
  }

  openAddDialog(data: any): void {
    console.log(data);

    const dialogRef = this.dialog.open(DeleteItemComponent, {
      data: data,
      width: '30%'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      if (result) {
        this.deleteItem(result.id)
        this.onGetAllProjects()
      }

    });


  }
  deleteItem(id: number) {
    this._ManagerService.deleteProject(id).subscribe({
      next: (res) => {
        console.log(res);

      }, error: (err) => {
        this._toastr.error('Try Again')
      }, complete: () => {
        this._toastr.success('Project deleted Successfully')
      },
    })
  }
  handlePageEvent(e: any) {
    console.log(e);
    this.pageSize = e.pageSize
    this.pageNumber = e.pageIndex + 1
    this.onGetAllProjects()
  }
  search(term: string) {
    this.searchValue = term
    // console.log(term)
    this.onGetAllProjects()
  }
}
