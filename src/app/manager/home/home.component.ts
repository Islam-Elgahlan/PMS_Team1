import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { HelperService } from 'src/app/services/helper.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
<<<<<<< HEAD
export class HomeComponent implements OnInit {
  constructor(private _helper: HelperService) {}
  taskCount: any;
  getTaskCount() {
    this._helper.getTaskCount().subscribe({
      next: (res) => {
=======
export class HomeComponent implements OnInit{
  
  constructor(private _HelperService:HelperService){}
 taskCount:any;
  getTaskCount(){
    this._HelperService.getTaskCount().subscribe({
      next:(res)=>{
>>>>>>> f4d0576d116508e4cff4e13077551b300cacf6c3
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
  ngOnInit(): void {
<<<<<<< HEAD
    this.getTaskCount();
  }

  userName = localStorage.getItem('userName');
  chart: any = [];
=======
    this.getTaskCount()
    this.onGetCurrentUser()
  }

  userName :any;
  chart:any=[]
  onGetCurrentUser() {
    this._HelperService.getCurrentUser().subscribe((res) => {
      // console.log(res)
      this.userName = res.userName;
      // console.log(this.currentUser.imagePath)
    })
  }

>>>>>>> f4d0576d116508e4cff4e13077551b300cacf6c3
}
