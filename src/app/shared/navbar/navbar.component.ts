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
  role :string |undefined = localStorage.getItem('role')?.toLowerCase();
  constructor(private _Router: Router, private _HelperService: HelperService,
    public dialog: MatDialog) {

  }
  ngOnInit() {
    this.onGetCurrentUser()
  }
  logOut() {
    localStorage.removeItem('userToken');
    localStorage.removeItem('role');
    localStorage.removeItem('userName');
    localStorage.removeItem('userEmail');
    this._Router.navigate(['/auth'])
  }
  currentUser :any;
  onGetCurrentUser() {
    this._HelperService.getCurrentUser().subscribe((res) => {
      
      this.currentUser = res;
     
    })
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ChangePasswordComponent, {
      data: {},
      width:'40%'
    });
  
    dialogRef.afterClosed().subscribe(result => {
     
      // if(result){
      //   this.onRequestRestPassword(result)
      // }
      
    });
  }
}
