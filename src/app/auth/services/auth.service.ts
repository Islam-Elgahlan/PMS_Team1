import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { Observable } from 'rxjs';
import { iLogin } from 'src/app/models/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  role: string | null = '';
  constructor(private _HttpClient: HttpClient) {
    if(localStorage.getItem('userToken')!==null){
      this.getProfile()
    }
  }

  getProfile() {
    let encoded: any = localStorage.getItem('userToken');
    let decoded: any = jwtDecode(encoded);
    localStorage.setItem('role', decoded.userGroup);
    localStorage.setItem('userName', decoded.userName);
    this.getRole()
    console.log(decoded);
  }

  getRole() {
    if (
      localStorage.getItem('userToken') !== null &&
      localStorage.getItem('role')
    ) {
      this.role = localStorage.getItem('role');
    }
  }
  onLogin(data: iLogin): Observable<any> {
    return this._HttpClient.post('Users/Login', data);
  }
  register(data:any):Observable<any>{
    return this._HttpClient.post('Users/Register' , data)
  }
  requestChangePassword(data:string):Observable<any>{
    return this._HttpClient.post('Users/Reset/Request' , data)
  }
  resetPassword(data:any):Observable<any>{
    return this._HttpClient.post('Users/Reset' , data)
  }
  changePassword(data:any):Observable<any>{
    return this._HttpClient.put('Users/ChangePassword' , data)
  }
}
