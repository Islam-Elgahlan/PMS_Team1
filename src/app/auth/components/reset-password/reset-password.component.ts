import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent {
  constructor(private _AuthService: AuthService, private _toastr: ToastrService, private _router: Router,
    private spinner: NgxSpinnerService) { }

  hide: boolean = true;

  resetForm = new FormGroup({
    email: new FormControl(localStorage.getItem('email'), [Validators.required, Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)]),
    seed: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required, Validators.pattern(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/)]),
    confirmPassword: new FormControl(null, [Validators.required]),
  }, { validators: this.matchPassword });


  matchPassword(form: any) {
    let password = form.get('password');
    let confirmPassword = form.get('confirmPassword');
    if (password.value == confirmPassword.value) {
      return null
    } else {
      confirmPassword?.setErrors({ invalid: 'notMatch' });
      return { invalid: 'notMatch' }

    }
  }
  onSubmit(data: FormGroup) {
    console.log(data);
    this.spinner.show()
    this._AuthService.resetPassword(data.value).subscribe({
      next: (res) => {
        console.log(res);

      },
      error: (err) => {
        console.log(err);
        this._toastr.error(err.error.message)
      },
      complete: () => {
        this._router.navigate(['/auth/login'])
        this.spinner.hide()
      },
    });
  }
}
