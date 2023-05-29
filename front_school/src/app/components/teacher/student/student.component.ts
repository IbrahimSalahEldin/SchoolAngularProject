import { HttpClient } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { StudendService } from 'src/app/services/student/student.service';




@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit{
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
        this.students = data.documents;
        console.log(this.students);
      })
    }

    // getStudent(id: string){
    //   this.studentService.getstudent(id).subscribe(data=>{
    //     this.student = data;
    //     console.log(this.student);
    //   });
    // }

}
