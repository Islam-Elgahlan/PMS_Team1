import { Component } from '@angular/core';
import { ITask, ITasks } from 'src/app/models/project';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent {
  // tasksList: ITasks[] = [];
  tableResponse: ITasks | undefined;
  tableData: ITask[] | undefined = [];
  constructor(private _TaskService: TaskService) { }
  ngOnInit() {
    this.openTasks();
  }
  openTasks() {
    this._TaskService.getAllTasks().subscribe({
      next: (res) => {
        console.log(res.data);
        this.tableResponse = res;
        this.tableData = this.tableResponse?.data;
      },
      error: (err) => { },
      complete: () => { },
    });
  }
}
