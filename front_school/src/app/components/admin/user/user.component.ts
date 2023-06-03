import { HttpClient } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { TeacherService } from 'src/app/services/teacher/teacher.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  users?:any;
  constructor(private http:HttpClient ,private _TeacherService:TeacherService){

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
}
