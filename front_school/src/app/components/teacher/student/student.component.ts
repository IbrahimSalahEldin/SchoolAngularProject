import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService }  from 'src/app/services/student/student.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit{
  students!:any;
 
 
  constructor(private Api: ApiService, private http: HttpClient){

  }
  ngOnInit(): void {
   this.getBooks();
  }

  
  getBooks()
    {
      this.Api.get(`${environment.baseUrl}/home/all/page/${this.page}`).subscribe(data=>{
        this.students=data.data;
       
     
        this.totalPages=data.pages.totalPages;
        this._pagination=[...Array(this.totalPages).keys()];
      })
    }
}
