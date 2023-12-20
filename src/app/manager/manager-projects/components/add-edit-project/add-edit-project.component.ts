import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ManagerService } from '../../services/manager.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-edit-project',
  templateUrl: './add-edit-project.component.html',
  styleUrls: ['./add-edit-project.component.scss']
})
export class AddEditProjectComponent {
  projectForm = new FormGroup({
    title: new FormControl(null, [Validators.required]),
    description: new FormControl(null, [Validators.required])

  })

  constructor(private _ManagerService: ManagerService , private _Router:Router , private _ToastrService: ToastrService) { }

  onSubmit(data: FormGroup) {
    this._ManagerService.onAddProject(data.value).subscribe((res)=>{
      console.log(res);
      this._ToastrService.success('Project Added','Added ');
      this._Router.navigate(['dashboard/manager/projects'])

      
    },error =>{
      this._ToastrService.error(error.message, 'Error!');
    })
    


  }
}
