import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  constructor(private Http:HttpClient) { }
  getalluser():Observable<any>{
    return this.Http.get<any>(`${environment.baseUrl}/user`, {
    headers : new HttpHeaders().set('Authorization', 'secrt token')
    })

  }


  getstudent(userId:string):Observable<any>{
    return this.Http.get<any>(`${environment.baseUrl}/user/${userId}`)
  }
}
