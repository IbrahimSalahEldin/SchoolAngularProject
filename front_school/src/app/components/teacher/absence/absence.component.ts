import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { StudendService } from 'src/app/services/student/student.service';

@Component({
  selector: 'app-absence',
  templateUrl: './absence.component.html',
  styleUrls: ['./absence.component.css']
})
export class AbsenceComponent {
  students?:any;

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