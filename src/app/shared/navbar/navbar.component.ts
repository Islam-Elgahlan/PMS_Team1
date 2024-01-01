import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ChangePasswordComponent } from 'src/app/auth/components/change-password/change-password.component';
import { HelperService } from 'src/app/services/helper.service';
import { LogOutComponent } from './log-out/log-out.component';

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
    const dialogRef = this.dialog.open(LogOutComponent, {
      
    });

    
   
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
//   openBlockDialog(item: IEmployee) {
//     const dialogRef = this.dialog.open(BlockUserComponent, {
//       data: item,
//     });

//     dialogRef.afterClosed().subscribe((result) => {
//       console.log('The dialog was closed', result);
//       if (result) {
//         this.onBlockUser(result);
//       }
//     });
//   }
}

