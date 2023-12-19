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
    private route: Router,
    public _MatDialog: MatDialog,
  ) { }
  hide: boolean = true;
  confirmHide: boolean = true;

  imgSrc: any;
  registerForm = new FormGroup({
    userName: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    country: new FormControl(null, [Validators.required]),
    phoneNumber: new FormControl(null, [Validators.required, Validators.minLength(11), Validators.maxLength(13)]),
    // profileImage: new FormControl(null),
    password: new FormControl(null, [Validators.required, Validators.minLength(3)]),
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


  onSubmit(data: FormGroup) {
    let myData = new FormData()
    let myMap = new Map(Object.entries(data.value))
    for (const [key, value] of myMap) {
      myData.append(key, data.value[key])
      this._AuthService.onRegister(myData).subscribe({
        next: (res: any) => {
          console.log(res);
        },
        error: (err: any) => {
          console.log(err);
          this._ToastrService.error('Error', 'Incorrect');
        },
        complete: () => {
          // this.openDialog();
          this._ToastrService.success('registered Successfully', 'Success');
          this.route.navigate(['/auth/verify']);
        },
      });
    }

    if(this.imgSrc == null){
      // No Action
    }else{
      myData.append('profileImage', this.imgSrc, this.imgSrc.name);
    }
    
    // console.log(data.value)
    
    this._AuthService.register(myData).subscribe((res) => {
      this._ToastrService.success(data.value.email, 'Check yor Email to Verify');
      localStorage.setItem('email', data.value.email)
      this._Router.navigate(['/auth/verify'])
     

    },
      error => {
        this._ToastrService.error(error.error.message, 'Error in Registeration');
      })
  }

  files: File[] = [];

  onSelect(event: any) {
    console.log(event.addedFiles[0].name);
    this.imgSrc = event.addedFiles[0];
    this.files.push(...event.addedFiles);
  }

  onRemove(event: any) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }


}
