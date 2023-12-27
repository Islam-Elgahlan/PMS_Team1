import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ManagerService } from '../../services/manager.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-add-edit-project',
  templateUrl: './add-edit-project.component.html',
  styleUrls: ['./add-edit-project.component.scss']
})
export class AddEditProjectComponent {

  projectId: any;
  viewParam:any
  isUpdatePage: boolean = false;
  projectData: any;

  projectForm = new FormGroup({
    title: new FormControl(null, [Validators.required]),
    description: new FormControl(null, [Validators.required])

  })

  constructor(private _ManagerService: ManagerService, private _ActivatedRoute: ActivatedRoute,
    private _Router: Router, private _ToastrService: ToastrService , 
    ) {
    this.projectId = _ActivatedRoute.snapshot.paramMap.get('id')
    this.viewParam=_ActivatedRoute.snapshot.paramMap.get('params')
      console.log(this.viewParam);
    
    
    
    if (this.projectId) {
      if (this.viewParam) {
        console.log('hi');
        this.viewProjectDataById(this.projectId)
      } else {
        this.isUpdatePage = true;
      this.getProjectDataById(this.projectId);
      }
      
    } else {
      this.isUpdatePage = false
    }
  }

  onSubmit(data: FormGroup) {
    if(this.projectId){

      // Edit
     
        this._ManagerService.editProject(data.value , this.projectId).subscribe((res)=>{
          this._ToastrService.success(res.message, 'Updated ');
          this._Router.navigate(['dashboard/manager/projects'])
          
        }, error => {
          this._ToastrService.error(error.message, 'Error!');
        })
      
    
     
    }else{

      // Add New
     
      this._ManagerService.onAddProject(data.value).subscribe((res) => {
        console.log(res);
        this._ToastrService.success('Project Added', 'Added ');
        this._Router.navigate(['dashboard/manager/projects'])
      
  
      }, error => {
        this._ToastrService.error(error.message, 'Error!');
      })
    }

   


  }

  getProjectDataById(id: number) {
    this._ManagerService.getProjectById(id).subscribe(
      ({
        next: (res) => {
          this.projectData = res;
        },
        error: (err) => {
          console.log(err)
        },
        complete: () => {
          this.projectForm.patchValue({
            title: this.projectData?.title,
            description: this.projectData?.description,

          })
        }
      })

    )

  }
  viewProjectDataById(id: number) {
    this._ManagerService.getProjectById(id).subscribe(
      ({
        next: (res) => {
          this.projectData = res;
        },
        error: (err) => {
          console.log(err)
        },
        complete: () => {
          this.projectForm.patchValue({
            title: this.projectData?.title,
            description: this.projectData?.description,

          })
          this.disableForm()
        }
      })

    )

  }

  disableForm(): void {
    this.projectForm.controls['title'].disable();
    this.projectForm.controls['description'].disable();
    
  }
}
