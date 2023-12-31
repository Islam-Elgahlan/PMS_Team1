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
  hide: boolean = true;
  hideRequiredMarker:boolean=true;
  constructor(
    private _AuthService: AuthService,
    private _ToastrService: ToastrService,
    private route: Router,
    
    
  ) {}
 

  loginForm = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)]),
    password: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/)
    ]),
  });

  onSubmit(data: FormGroup) {
    
    this._AuthService.onLogin(data.value).subscribe({
      next: (res) => {
      
        localStorage.setItem('userToken', res.token);

      },
      error: (err) => {
       
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
