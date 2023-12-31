import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAddEditTask, ITask } from 'src/app/models/project';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private _HttpClient:HttpClient ) { }

  onAddTask(data:IAddEditTask):Observable<any>{
    return this._HttpClient.post('Task', data)
  }
  getAllTasks(data:any):Observable<any>{
    return this._HttpClient.get('Task/manager',{params:data})
  }
  getTaskById(id:number):Observable<any>{
    return this._HttpClient.get(`Task/${id}`);
  }
  editTask( data:any , id: number ):Observable<any>{
    return this._HttpClient.put(`Task/${id}` , data);
  }
  deleteTask(  id: number ):Observable<any>{
    return this._HttpClient.delete(`Task/${id}`);
  }
}
