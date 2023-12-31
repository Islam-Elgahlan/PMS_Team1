import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private _HttpClient:HttpClient) { }

  getAllProjects(data:any):Observable<any>{
    return this._HttpClient.get('Project/Employee',{params : data} )
  }
  getMyAssignedTasks(data:any):Observable<any>{
    return this._HttpClient.get('Task',{params : data} )
  }
  changeTaskStatus(id:number,status:string):Observable<any>{
    return this._HttpClient.put(`Task/${id}/change-status`,{"status":status} )
  }

}
