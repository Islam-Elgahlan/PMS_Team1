import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LoginComponent } from 'src/app/auth/components/login/login.component';
import { IEmployee } from 'src/app/models/project';

@Component({
  selector: 'app-block-user',
  templateUrl: './block-user.component.html',
  styleUrls: ['./block-user.component.scss']
})
export class BlockUserComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<BlockUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IEmployee,
  ) {}

  ngOnInit() {
    console.log(this.data);
    
  }
  onNoClick(): void {
    this.dialogRef.close();
    
  }

}
