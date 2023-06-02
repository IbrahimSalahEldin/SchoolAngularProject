import { HttpClient } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { StudendService } from 'src/app/services/student/student.service';

@Component({
  selector: 'app-student-admin',
  templateUrl: './student-admin.component.html',
  styleUrls: ['./student-admin.component.css']
})
export class StudentAdminComponent  implements OnInit{
  students?:any;
  student:any;

  constructor(private http:HttpClient ,private studentService:StudendService){

  }
  ngOnInit(): void {
   this.getstudents();
  }

  
  getstudents()
    {
      this.studentService.getAllstudents().subscribe(data=>{
        this.students = data;
        console.log(this.students);
      })
    }

}
