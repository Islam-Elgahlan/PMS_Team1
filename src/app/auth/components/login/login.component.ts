import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private _AuthService: AuthService) {}
  hide: boolean = true;

  loginForm = new FormGroup({
    email: new FormControl(null),
    password: new FormControl(null),
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
      },
      complete: () => {
        this._AuthService.getProfile();
      },
    });
  }
}
