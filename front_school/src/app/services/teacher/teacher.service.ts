import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  constructor(private Http:HttpClient) { }


  addUser(data:any): Observable<any>{
    console.log('success');
    return this.Http.post(`${environment.baseUrl}/user/`,data )
   }


  getalluser():Observable<any>{
    return this.Http.get<any>(`${environment.baseUrl}/user`, {
    headers : new HttpHeaders().set('Authorization', 'secrt token')
    })

  }


  getuser(userId:string):Observable<any>{
    return this.Http.get<any>(`${environment.baseUrl}/user/${userId}`)
  }
  
  editUser(data: any, userId: any): Observable<any> {
    return this.Http.put<any>(`${environment.baseUrl}/user/${userId}`, data);
  }
  deleteUser(userId:string):Observable<any>{
    return this.Http.delete<any>(`${environment.baseUrl}/user/${userId}`);
  }
}
