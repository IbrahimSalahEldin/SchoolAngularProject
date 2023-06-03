import { HttpClient } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { StudendService } from 'src/app/services/student/student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-admin',
  templateUrl: './student-admin.component.html',
  styleUrls: ['./student-admin.component.css']
})
export class StudentAdminComponent  implements OnInit{
  students?:any;
  student:any;
  isEdit:boolean=false;
  eStudent!:any;

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

    deleteStudent(id:string)
    {
      this.studentService.deleteStudent(id).subscribe(data=>{
       
      })
    }

    showStudent(student:any)
    {
      this.eStudent=student;
    }

    receivedEditUser(e:any)
    {
      this.isEdit=e;
      this.getstudents();
    }

}


