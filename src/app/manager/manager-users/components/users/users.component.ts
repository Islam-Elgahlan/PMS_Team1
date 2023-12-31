import { Component, OnInit } from '@angular/core';
import { IEmployee, ITable } from 'src/app/models/project';
import { HelperService } from 'src/app/services/helper.service';
import { UserService } from '../../services/user.service';
import { PageEvent } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { BlockUserComponent } from './block-user/block-user.component';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subject, debounceTime } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  tableData: IEmployee[] = [];
  searchValue: string = '';
  pageIndex:number = 0
  pageSize: number = 5;
  pageNumber: number = 1;
  tableRes: ITable | any;
  private subject=new Subject<any>;
  constructor(
    private _user: UserService,
    public dialog: MatDialog,
    private _ToastrService: ToastrService,
    
  ) {}
  
  ngOnInit(): void {
    this.onGetAllUsers();
    this.subject.pipe((debounceTime(800))).subscribe({
      next:(res)=>{
        this.onGetAllUsers()
      },
    })
  }

  onGetAllUsers() {
    let params = {
      pageSize: this.pageSize,
      pageNumber: this.pageNumber,
      userName: this.searchValue,
    };
   
    this._user.getAllUsers(params).subscribe({
      next: (res) => {
       
        this.tableRes = res;
        this.tableData = res.data;
    
      },
      error: (err) => {},
      complete: () => {},
    });
  }

  search() {
    console.log(this.searchValue);
    this.subject.next(this.searchValue)
  }

  handlePageEvent(e: PageEvent) {
    console.log(e);
    this.pageSize = e.pageSize
    this.pageNumber = e.pageIndex + 1
    this.onGetAllUsers();
  }
  openBlockDialog(item: IEmployee) {
    const dialogRef = this.dialog.open(BlockUserComponent, {
      data: item,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed', result);
      if (result) {
        this.onBlockUser(result);
      }
    });
  }

  onBlockUser(id: number) {
    this._user.onBlockOrUnblockUser(id).subscribe({
      next: (res) => {
        this._ToastrService.success(
          res.isActivated
            ? 'This user was Unblocked Successfully'
            : 'This user was blocked Successfully',
          'Done'
        );
      
      },
      error: (err) => {
        this._ToastrService.error('Can’tBlock this User', 'Error');
      },
      complete: () => {
        this.onGetAllUsers();
      },
    });
  }
}
