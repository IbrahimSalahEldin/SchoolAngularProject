import { HttpClient } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { StudendService } from 'src/app/services/student/student.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit{
  students?:any;
  student:any;
  studentId!: string;

  constructor(private ActivatedRoute: ActivatedRoute, private studentService:StudendService){
    this.ActivatedRoute.paramMap.subscribe((paramMap) => {
      this.studentId = paramMap.get('id') || '';
    });
  }

  ngOnInit(): void {
   this.getStudent(this.studentId);
  }




  
  // getstudents()
  //   {
  //     this.studentService.getAllstudents().subscribe(data=>{
  //       this.students = data;
  //     })
  //   }

    getStudent(id: string){
      this.studentService.getstudent(id).subscribe(data=>{
        this.student = data;
        console.log(this.student);
      });
    }
  }

