import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-request-change-password',
  templateUrl: './request-change-password.component.html',
  styleUrls: ['./request-change-password.component.scss']
})
export class RequestChangePasswordComponent {
  constructor(private _AuthService: AuthService) {}
  hide: boolean = true;

  requestForm = new FormGroup({
    email: new FormControl(null),
   
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
    
    //   },
    // });
  }
}
