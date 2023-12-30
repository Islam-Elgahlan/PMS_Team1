import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { HelperService } from 'src/app/services/helper.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent {
  hide: boolean = true;
  confirmHide: boolean = true;
  currentUser: any;
  imgSrc: any;
 
  constructor(private _AuthService: AuthService, private _ToastrService: ToastrService,
    private _Router: Router, private _HelperService: HelperService,
    private spinner: NgxSpinnerService) { }
  ngOnInit() {
    this.onGetCurrentUser()
  }

  updateForm = new FormGroup(
    {
      userName: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      country: new FormControl(null, [Validators.required]),
      phoneNumber: new FormControl(null, [
        Validators.required,
        Validators.minLength(11),
        Validators.maxLength(13),
      ]),
      profileImage: new FormControl(null),
      confirmPassword: new FormControl(null, [Validators.required]),
    },
  );


  onEdit(data: FormGroup) {
    let myData = new FormData();
    let myMap = new Map(Object.entries(data.value));
    for (const [key, value] of myMap) {
      myData.append(key, data.value[key]);
    }

    if (this.imgSrc == null) {
      // No Action
    } else {
      myData.append('profileImage', this.imgSrc, this.imgSrc.name);
    }
    // console.log(myData)
    // console.log(data.value)
    this.spinner.show()
    this._AuthService.onEditProfile(myData).subscribe(
      (res) => {
        this._ToastrService.success('Updated', 'Updated');
        this._Router.navigate(['/dashboard']);
        this.spinner.hide()
      },
      (error) => {
        this._ToastrService.error(error.error.message, 'Error in Update');
      }
    );
  }

  onGetCurrentUser() {
    this._HelperService.getCurrentUser().subscribe((res) => {
      this.currentUser = res;
      // console.log(this.currentUser)
      this.imgSrc = 'http://upskilling-egypt.com:3003/' + this.currentUser.imagePath
      this.updateForm.patchValue({
        userName: this.currentUser?.userName,
        email: this.currentUser?.email,
        country: this.currentUser?.country,
        phoneNumber: this.currentUser?.phoneNumber,
        confirmPassword: this.currentUser?.confirmPassword,
      })
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
