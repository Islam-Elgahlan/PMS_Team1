import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private _HttpClient: HttpClient) {}

  getAllUsers(params: any): Observable<any> {
    return this._HttpClient.get('Users/Manager', { params: params });
  }
  getUser(id:number): Observable<any> {
    return this._HttpClient.get(`Users/${id}`);
  }
  onBlockOrUnblockUser(id: number): Observable<any> {
    return this._HttpClient.put(`Users/${id}`,{})
  }
}
