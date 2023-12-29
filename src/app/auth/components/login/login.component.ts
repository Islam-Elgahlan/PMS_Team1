import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(
    private _AuthService: AuthService,
    private _ToastrService: ToastrService,
    private route: Router,
    
    
  ) {}
  hide: boolean = true;

  loginForm = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/)
    ]),
  });

  onSubmit(data: FormGroup) {
    console.log(data);
   
    this._AuthService.onLogin(data.value).subscribe({
      next: (res) => {
        console.log(res);
        localStorage.setItem('userToken', res.token);

      },
      error: (err) => {
        console.log(err);
        this._ToastrService.error(err.error.message, 'Error!');

      },
      complete: () => {
        this._AuthService.getProfile();
        this.route.navigate(['/dashboard']);

        this._ToastrService.success(localStorage.getItem('userName')!,'Hello ');
      },
    });
  }
}
