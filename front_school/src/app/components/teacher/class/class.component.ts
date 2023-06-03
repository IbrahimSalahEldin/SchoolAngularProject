import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudendService } from 'src/app/services/student/student.service';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent {
  students?:any;
  firstYear: any[] = []; 
  secondYear:any[] = [];
  thirdYear:any[] = [];


constructor(private http:HttpClient ,private studentService:StudendService){

}
ngOnInit(): void {
 this.getstudents();
}


getstudents() {
  this.studentService.getAllstudents().subscribe(data => {
    this.students = data;
    for (var i = 0; i < this.students.length; i++) {
      if (this.students[i].academic_year == "first") {
        this.firstYear.push(this.students[i]);
      }
      else if(this.students[i].academic_year == "second"){
        this.secondYear.push(this.students[i]);
      }
      else{
       this.thirdYear.push(this.students[i]);
      }
    }
  })
}






}
