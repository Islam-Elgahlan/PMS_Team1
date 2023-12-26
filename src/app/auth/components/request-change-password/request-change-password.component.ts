import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-request-change-password',
  templateUrl: './request-change-password.component.html',
  styleUrls: ['./request-change-password.component.scss']
})
export class RequestChangePasswordComponent {
  constructor(private _AuthService: AuthService,private _toastr:ToastrService,private _router:Router ,
    private spinner: NgxSpinnerService) {}
  hide: boolean = true;

  requestForm = new FormGroup({
    email: new FormControl(null,[Validators.required,Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)]),
    
  });

  onSubmit(data: FormGroup) {
    console.log(data.value);
    this.spinner.show()
    this._AuthService.requestChangePassword(data.value).subscribe({
      next: (res) => {
        console.log(res);
        this._toastr.success('Please Check Your E-mail')
         localStorage.setItem('email',data.value.email)
      },
      error: (err) => {
        console.log(err);
        this._toastr.error(err.error.message)
      },
      complete: () => {
       this._router.navigate(['/auth/reset-password'])
       this.spinner.hide()
       
      },
    });
  }
}
