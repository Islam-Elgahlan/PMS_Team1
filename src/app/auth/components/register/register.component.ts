import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../services/auth.service';
import { VerifyComponent } from '../verify/verify.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  constructor(
    private _AuthService: AuthService,
    private _ToastrService: ToastrService,
    private _Router: Router,
    public _MatDialog: MatDialog,
  ) { }
  hide: boolean = true;
  confirmHide: boolean = true;

  imgSrc: any;
  registerForm = new FormGroup({
    userName: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    country: new FormControl(null, [Validators.required]),
    phoneNumber: new FormControl(null, [Validators.required , Validators.minLength(11) , Validators.maxLength(13)]),
    profileImage: new FormControl(null),
    password: new FormControl(null, [Validators.required ,Validators.minLength(3)]),
    confirmPassword: new FormControl(null, [Validators.required]),
    
  },
  {
    validators: this.matchValidator('password', 'confirmPassword')
  })

  matchValidator(controlName: string, matchingControlName: string): ValidatorFn {
    return (abstractControl: AbstractControl) => {
        const control = abstractControl.get(controlName);
        const matchingControl = abstractControl.get(matchingControlName);

        if (matchingControl!.errors && !matchingControl!.errors?.['confirmedValidator']) {
            return null;
        }

        if (control!.value !== matchingControl!.value) {
          const error = { confirmedValidator: 'Passwords do not match.' };
          matchingControl!.setErrors(error);
          return error;
        } else {
          matchingControl!.setErrors(null);
          return null;
        }
    }
  }


  onRegister(data: FormGroup) {
    let myData = new FormData()
    let myMap = new Map(Object.entries(data.value))
    for (const [key, value] of myMap) {
      myData.append(key, data.value[key])
    }
    // myData.append('profileImage', this.imgSrc, this.imgSrc.name);
console.log(data.value)
// this._AuthService.register(myData).subscribe((res) => {
//   this._ToastrService.success(data.value.email, 'Welcome');
//   localStorage.setItem('email' , data.value.email)
//   this.openDialog()
//   // console.log(res)
  
// },
//   error => {
//     this._ToastrService.error(error.error.message, 'Error in Registeration');
//   })


// this.openDialog()

  }


  // openDialog(): void {
  //   const dialogRef = this._MatDialog.open(VerifyComponent, {
  //     data: {},
  //     width: '40%',
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log(result);
  //     if(result){
  //       // this.onResetRequest(result)
  //     }
  //   });
  // }

}
