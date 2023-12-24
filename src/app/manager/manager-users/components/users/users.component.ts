import { Component, OnInit } from '@angular/core';
import { IEmployee, ITable } from 'src/app/models/project';
import { HelperService } from 'src/app/services/helper.service';
import { UserService } from '../../services/user.service';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit{
  tableData:IEmployee[]=[]
constructor(private _user:UserService){

}
searchValue:string=''
pageSize:number=200;
pageNumber:number=1;
tableRes:ITable | any;
  ngOnInit(): void {
    this.onGetAllUsers()
  }


onGetAllUsers(){
  let params={
pageSize:this.pageSize,
pageNumber:this.pageNumber,
userName:this.searchValue
  }
  this._user.getAllUsers(params).subscribe({
    next:(res)=>{
      console.log(res);
      this.tableRes=res
      this.tableData=res.data
    },error:(err)=>{

    },complete:()=> {
      
    },
  })
}

search(){
  console.log(this.searchValue);
  this.onGetAllUsers()
}

handlePageEvent(e:PageEvent){
  console.log(e);
  this.pageSize=e.pageSize;
  // this.pageNumber=this.tableRes.pageNumber;
  this.pageNumber=e.pageIndex;
  
  this.onGetAllUsers()
  }
}
