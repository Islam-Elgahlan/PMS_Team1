import { Component } from '@angular/core';
import { ITask } from 'src/app/models/project';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent {
  tasksList: ITask[] = [];
  constructor(private _TaskService: TaskService) {}
  ngOnInit() {
    this.openTasks();
  }
  openTasks() {
    this._TaskService.getAllTasks().subscribe({
      next: (res) => {
        console.log(res);
        this.tasksList = res.data;
      },
      error: (err) => {},
      complete: () => {},
    });
  }
}
