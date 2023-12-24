import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor( private _Router: Router){
    
  }
  logOut(){
    localStorage.removeItem('userToken');
    this._Router.navigate(['/auth'])
  }
}
