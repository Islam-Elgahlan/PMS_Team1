import { Component } from '@angular/core';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  userName :any;
  constructor(private _HelperService:HelperService){}
  ngOnInit(): void {
    this.onGetCurrentUser()
  }

  onGetCurrentUser() {
    this._HelperService.getCurrentUser().subscribe((res) => {
      
      this.userName = res.userName;
  
    })
  }
}
