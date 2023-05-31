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
//   student:any;

//   constructor(private activatedRoute : ActivatedRoute){
//     this.activatedRoute.paramMap.subscribe((paramMap) => {
//       this.student = paramMap.get('id') || '';
//   })


// }


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






}
