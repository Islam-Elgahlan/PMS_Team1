import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProject } from 'src/app/models/project';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  constructor(private _HttpClient:HttpClient) { }

  onAddProject(data:IProject):Observable<any>{
    return this._HttpClient.post('Project' , data)
  }
  getAllProjects():Observable<any>{
    return this._HttpClient.get('Project')
  }
  getProjectById(id:number):Observable<any>{
    return this._HttpClient.get(`Project/${id}`);
  }
  editProject( data:any , id: number ):Observable<any>{
    return this._HttpClient.put(`Project/${id}` , data);
  }
}
