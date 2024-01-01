import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { HelperService } from 'src/app/services/helper.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  taskCount: any;
  projectsCount = localStorage.getItem('projectsCount');
  tasksCount = localStorage.getItem('tasksCount');
  // usersCount = localStorage.getItem('usersCount');
  constructor(private _HelperService: HelperService) {}
  ngOnInit(): void {
    this.getTaskCount();
    this.onGetCurrentUser();
  }
  getTaskCount() {
    this._HelperService.getTaskCount().subscribe({
      next: (res) => {
        console.log(res);
        this.taskCount = res;
      },

      error: (err) => {},
      complete: () => {
        this.chart = new Chart('canvas', {
          type: 'doughnut',
          data: {
            labels: ['ToDo', 'InProgress', 'Done'],
            datasets: [
              {
                label: 'Number',
                data: [
                  this.taskCount.toDo,
                  this.taskCount.inProgress,
                  this.taskCount.done,
                ],
                backgroundColor: ['gray', '#EAB56D', '#009247'],
                hoverOffset: 4,
              },
            ],
          },
        });
      },
    });
  }

  userName: any;
  chart: any = [];
  onGetCurrentUser() {
    this._HelperService.getCurrentUser().subscribe((res) => {
      // console.log(res)
      this.userName = res.userName;
      // console.log(this.currentUser.imagePath)
    });
  }
}
