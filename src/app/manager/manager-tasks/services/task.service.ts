import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITask } from 'src/app/models/project';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private _HttpClient:HttpClient ) { }

  // onAddTask(data:ITask):Observable<any>{
  //   return this._HttpClient.post('Task' , data)
  // }
  getAllTasks():Observable<any>{
    return this._HttpClient.get('Task/manager')
  }
  // getTaskById(id:number):Observable<any>{
  //   return this._HttpClient.get(`Task/${id}`);
  // }
  // editTask( data:any , id: number ):Observable<any>{
  //   return this._HttpClient.put(`Task/${id}` , data);
  // }
}
