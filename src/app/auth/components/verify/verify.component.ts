import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.scss'],
})
export class VerifyComponent {
  hide: any;
  hideRequiredMarker:boolean=true;
  
  constructor(
    private _AuthService: AuthService,
    private router: Router,
    private _ToastrService: ToastrService,
   
  ) {}
 

  verifyForm = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    code: new FormControl(null, [Validators.required]),
  });

  onSubmit(data: FormGroup) {
    
    this._AuthService.onVerify(data.value).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => {
        this._ToastrService.error('Error', 'Incorrect');
        console.log(err);
      },
      complete: () => {
        this._ToastrService.success('Account verified successully', 'Success');
        this.router.navigate(['/auth/login']);
       
      },
    });
  }
}
