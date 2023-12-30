import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { ActivatedRoute } from '@angular/router';
import { IEmployee } from 'src/app/models/project';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.scss']
})
export class ViewUserComponent implements OnInit {
  userId:any;
  userInfo:any
constructor(private _userService:UserService,private _activateRoute:ActivatedRoute){
  this.userId=_activateRoute.snapshot.paramMap.get('id')

 
}
  ngOnInit(): void {
 this.getuserById(this.userId)
  }
getuserById(id:number){
  this._userService.getUser(id).subscribe({
    next:(res)=>{
      console.log(res);
      this.userInfo=res
      
    },
  })
}
 
}
