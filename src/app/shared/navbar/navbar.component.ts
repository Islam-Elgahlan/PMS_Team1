import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  constructor(private _Router: Router, private _HelperService: HelperService) {

  }
  ngOnInit() {
    this.onGetCurrentUser()
  }
  logOut() {
    localStorage.removeItem('userToken');
    this._Router.navigate(['/auth'])
  }
  currentUser :any;
  onGetCurrentUser() {
    this._HelperService.getCurrentUser().subscribe((res) => {
      // console.log(res)
      this.currentUser = res;
      console.log(this.currentUser.imagePath)
    })
  }

}
