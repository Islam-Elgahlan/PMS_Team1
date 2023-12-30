import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ChangePasswordComponent } from 'src/app/auth/components/change-password/change-password.component';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  constructor(private _Router: Router, private _HelperService: HelperService,
    public dialog: MatDialog) {

  }
  ngOnInit() {
    this.onGetCurrentUser()
  }
  logOut() {
    localStorage.removeItem('userToken');
    this._Router.navigate(['/auth'])
  }
  currentUser :any;
  onGetCurrentUser() {
    this._HelperService.getCurrentUser().subscribe((res) => {
      // console.log(res)
      this.currentUser = res;
      console.log(this.currentUser.imagePath)
    })
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ChangePasswordComponent, {
      data: {},
      width:'40%'
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      // if(result){
      //   this.onRequestRestPassword(result)
      // }
      
    });
  }
}
