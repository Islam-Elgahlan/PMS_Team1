import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent {
 
  hide: boolean = true;
  hide1: boolean = true;
  hide2: boolean = true;


  constructor(private _AuthService: AuthService,private _toastrService:ToastrService,
    public dialogRef: MatDialogRef<ChangePasswordComponent>) {}
  changeForm = new FormGroup({
    
    oldPassword: new FormControl(null,[Validators.required,Validators.pattern(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/)]),
    newPassword: new FormControl(null,[Validators.required,Validators.pattern(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/)]),
    confirmNewPassword: new FormControl(null,[Validators.required]),
  }, { validators: this.matchPassword });
  matchPassword(form: any) {
    let password = form.get('newPassword');
    let confirmPassword = form.get('confirmNewPassword');
    if (password.value == confirmPassword.value) {
      return null
    } else {
      confirmPassword?.setErrors({ invalid: 'notMatch' });
      return { invalid: 'notMatch' }

    }
  }


  
  changeForm = new FormGroup({
    
    


  onSubmit(data: FormGroup) {
    console.log(data);
    this._AuthService.changePassword(data.value).subscribe({
      next: (res) => {
        console.log(res);
        this._toastrService.success(res.message)
       
      },
      error: (err) => {
        console.log(err);
        this._toastrService.warning(err.error.message)
      },complete:()=>{
        this.onClose()
      }
    });
  }
  onClose():void{
    this.dialogRef.close();
  }
}
