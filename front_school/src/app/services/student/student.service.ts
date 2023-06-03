import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class StudendService {

 
  constructor(private httpClient:HttpClient) { }

  
  get(url: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    });

    return this.httpClient.get(`${url}`, {
      headers
    });

  }

  
  addstudents(data:any): Observable<any>{
    console.log('success');
    return this.httpClient.post(`${environment.baseUrl}/student/`,data )
   }

  getAllstudents():Observable<any>{
    return this.httpClient.get<any>(`${environment.baseUrl}/student`)
  }


  getstudent(studentId:string):Observable<any>{
      return this.httpClient.get<any>(`${environment.baseUrl}/student/${studentId}`)
    }

}




