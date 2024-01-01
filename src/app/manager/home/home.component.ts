import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { HelperService } from 'src/app/services/helper.service';
import { ManagerService } from '../manager-projects/services/manager.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  taskCount: any;
  totalTasks: number = 0 ;
  totalProjects :number = 0 ;
  constructor(private _HelperService: HelperService , private _ManagerService:ManagerService ) {}
  ngOnInit(): void {
    this.getTaskCount();
    this.onGetCurrentUser();
    this.onGetAllProjects();
  }
  getTaskCount() {
    this._HelperService.getTaskCount().subscribe({
      next: (res) => {
        
        this.taskCount = res;
        this.totalTasks = this.taskCount.toDo + this.taskCount.inProgress + this.taskCount.done ;
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

  onGetAllProjects() {
    let params = {
      pageSize: 1000,
      pageNumber: 1,
    }

    this._ManagerService.getAllProjects(params).subscribe((res) => {
      this.totalProjects = res.totalNumberOfRecords;
    })
  }
}
