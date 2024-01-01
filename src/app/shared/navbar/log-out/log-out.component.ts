import { Dialog, DialogRef } from '@angular/cdk/dialog';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-out',
  templateUrl: './log-out.component.html',
  styleUrls: ['./log-out.component.scss']
})
export class LogOutComponent implements OnInit {

  constructor( public DialogRef: MatDialogRef<LogOutComponent>, private _Router:Router) { }

  ngOnInit() {
  }
  onNoClick(): void {
    this.DialogRef.close();
    
  }
  onLogout(){
    localStorage.removeItem('userToken');
    localStorage.removeItem('role');
    localStorage.removeItem('userName');
    localStorage.removeItem('userEmail');
    this._Router.navigate(['/auth']);
    this.DialogRef.close();
   
  }
  
  
}
