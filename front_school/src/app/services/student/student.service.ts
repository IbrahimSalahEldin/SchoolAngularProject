import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class StudendService {




  
  constructor( private Http:HttpClient ){}

  // addstudents(data :any):Observable<any>{
    // return this.Http.post<any>(`${environment.baseUrl}/student/`, {
    // headers : new HttpHeaders().set('Authorization', 'secrt token')
    // })
    
  // }
  addstudents(data:any): Observable<any>{
    return this.Http.post(`${environment.baseUrl}/student`,data)
  }

  getAllstudents():Observable<any>{
    return this.Http.get<any>(`${environment.baseUrl}/student`, {
    headers : new HttpHeaders().set('Authorization', 'secrt token')
    })

  }


  getstudent(studentId:string):Observable<any>{
      return this.Http.get<any>(`${environment.baseUrl}/student/${studentId}`)
    }





}




