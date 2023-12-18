import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent {
  constructor(private _AuthService: AuthService) {}
  hide: boolean = true;

  changeForm = new FormGroup({
    
    oldPassword: new FormControl(null),
    newPassword: new FormControl(null),
    confirmNewPassword: new FormControl(null),
  });

  onSubmit(data: FormGroup) {
    console.log(data);
    // this._AuthService.onLogin(data.value).subscribe({
    //   next: (res) => {
    //     console.log(res);
    //     localStorage.setItem('userToken', res.token);
    //   },
    //   error: (err) => {
    //     console.log(err);
    //   },
    //   complete: () => {
    //     this._AuthService.getProfile();
    //   },
    //});
  }
}
