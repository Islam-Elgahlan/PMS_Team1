import { Component } from '@angular/core';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private _HelperService:HelperService){}
  ngOnInit(): void {
    this.onGetCurrentUser()
  }
  userName :any;
  onGetCurrentUser() {
    this._HelperService.getCurrentUser().subscribe((res) => {
      // console.log(res)
      this.userName = res.userName;
      // console.log(this.currentUser.imagePath)
    })
  }
}
