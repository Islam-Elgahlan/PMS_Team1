import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TaskService } from '../../services/task.service';
import { HelperService } from 'src/app/services/helper.service';
import { ManagerService } from 'src/app/manager/manager-projects/services/manager.service';
import { IEmployee, IProject } from 'src/app/models/project';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-add-edit-task',
  templateUrl: './add-edit-task.component.html',
  styleUrls: ['./add-edit-task.component.scss']
})
export class AddEditTaskComponent {
  taskId: any;
  isUpdatePage: boolean = false;
  taskData: any;
  projects: IProject [] = []
  users: IEmployee [] =[]
  viewTask:any;

  taskForm = new FormGroup({
    title: new FormControl(null, [Validators.required]),
    description: new FormControl(null, [Validators.required]),
    projectId: new FormControl(null, [Validators.required]),
    employeeId: new FormControl(null, [Validators.required])

  })

  constructor(private _TaskService: TaskService, private _ActivatedRoute: ActivatedRoute,
    private _Router: Router, private _ToastrService: ToastrService , private _HelperService:HelperService , 
    private _ManagerService:ManagerService,
    private spinner: NgxSpinnerService) {
    this.taskId = _ActivatedRoute.snapshot.paramMap.get('id')
    this.viewTask = _ActivatedRoute.snapshot.paramMap.get('params')
    if (this.taskId) {
      if (this.viewTask) {
        console.log('hi');
        this.viewTaskDataById(this.taskId)
      } else {
      this.isUpdatePage = true;
      this.getTaskDataById(this.taskId);}
    } else {
      this.isUpdatePage = false
    }
  }

ngOnInit(){
  this.onGetAllUSers();
  this.onGetMyProjects();
  
}

  onSubmit(data: FormGroup) {
    if(this.taskId){

      // Edit
      this.spinner.show()
      this._TaskService.editTask(data.value , this.taskId).subscribe((res)=>{
        this._ToastrService.success(res.message, 'Updated ');
        this._Router.navigate(['dashboard/manager/tasks'])
        this.spinner.hide()
      }, error => {
        this._ToastrService.error(error.message, 'Error!');
      })
    }else{

      // Add New
      this._TaskService.onAddTask(data.value).subscribe((res) => {
        console.log(res);
        this._ToastrService.success('Task Added', 'Added ');
        this._Router.navigate(['dashboard/manager/tasks'])
  
  
      }, error => {
        this._ToastrService.error(error.error.message, 'Error!');
      })
    }

   


  }

  viewTaskDataById(id: number) {
    this._TaskService.getTaskById(id).subscribe(
      ({
        next: (res) => {
          this.taskData = res;
        },
        error: (err) => {
          console.log(err)
        },
        complete: () => {
          this.taskForm.patchValue({
            title: this.taskData?.title,
            description: this.taskData?.description,
            projectId: this.taskData?.project.id,
            employeeId: this.taskData?.employee.id,
          })
          console.log(this.taskData?.project.id);
this.disableForm()
        }
      })

    )

  }
  disableForm(): void {
    this.taskForm.controls['title'].disable();
    this.taskForm.controls['description'].disable();
    this.taskForm.controls['projectId'].disable();
    this.taskForm.controls['employeeId'].disable();
    
  }
  getTaskDataById(id: number) {
    this._TaskService.getTaskById(id).subscribe(
      ({
        next: (res) => {
          this.taskData = res;
        },
        error: (err) => {
          console.log(err)
        },
        complete: () => {
          this.taskForm.patchValue({
            title: this.taskData?.title,
            description: this.taskData?.description,
            projectId: this.taskData?.project.id,
            employeeId: this.taskData?.employee.id,
          })
          console.log(this.taskData?.project.id);

        }
      })

    )

  }
  onGetAllUSers(){
    this._HelperService.getAllUsers().subscribe((res)=>{
      // console.log(res.data);
      this.users = res.data
      console.log(this.users);
      
    })
  }
  onGetMyProjects(){
    this._ManagerService.getAllProjects({params : {pageSize:1000 ,pageNumber:1}}).subscribe((res)=>{
      // console.log(res.data);
      this.projects = res.data
      console.log(this.projects);
      
    })
  }
}
