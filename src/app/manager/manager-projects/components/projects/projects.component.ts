import { Component } from '@angular/core';
import { ManagerService } from '../../services/manager.service';
import { IProject, IProjects } from 'src/app/models/project';
import { MatDialog } from '@angular/material/dialog';
import { DeleteItemComponent } from 'src/app/shared/delete-item/delete-item.component';
import { ToastrService } from 'ngx-toastr';
import { Subject, debounceTime } from 'rxjs';


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
  searchValue: string = '';
  private subject=new Subject<any>;
  
  constructor(private _managerService: ManagerService, public dialog: MatDialog, private _toastr: ToastrService,
  ) { }

  ngOnInit() {
    this.onGetAllProjects()
    this.subject.pipe((debounceTime(800))).subscribe({
      next:(res)=>{
        this.onGetAllProjects()
      },
    })
  }

  onGetAllProjects() {
    let params = {
      pageSize: this.pageSize,
      pageNumber: this.pageNumber,
      title : this.searchValue
    };
    ;
    this._managerService.getAllProjects(params).subscribe({
      next: (res) => {
        this.tableResponse = res;
        this.tableData = this.tableResponse?.data;
        localStorage.setItem('projectsCount', '')
    }, (error) => {
;
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
    this._managerService.deleteProject(id).subscribe({
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
  search(term: string) {
    this.searchValue = term
    this.subject.next(this.searchValue)
  }
}
