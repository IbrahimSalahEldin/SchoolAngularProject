import { HttpClient } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { TeacherService } from 'src/app/services/teacher/teacher.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  users?:any;
  user?:any;
  isEdit:boolean=false;
  eUser!:any;
  constructor(private http:HttpClient ,private _TeacherService:TeacherService ,private _Router:Router ){

  }
  ngOnInit(): void {
   this.getstudents();
  }


  getstudents()
    {
      this._TeacherService.getalluser().subscribe(data=>{
        this.users = data;
        console.log(this.users);
      })
    }


    deleteUser(id:string)
    {
      this._TeacherService.deleteUser(id).subscribe(data=>{
       
      })
      this._Router.navigate(['/admin/user']);
    }

    showUser(user:any)
    {
      this.eUser=user;
    }

    receivedEditUser(e:any)
    {
      this.isEdit=e;
      this.getstudents();
    }

}
