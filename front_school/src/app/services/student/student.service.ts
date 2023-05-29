import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class StudendService {




  
  constructor( private Http:HttpClient ){}


// getBooksByStatus(status:string,userID:string):Observable<any>{
//   return this.Http.get<Book[]>(`${environment.baseUrl}/home/page/1/?${status}?${userID}` ,{
//     headers: new HttpHeaders().set('Authorization','secrt token')
//   })
// }

  getAllstudents():Observable<any>{
    return this.Http.get<any>(`${environment.baseUrl}/student`, {
    headers : new HttpHeaders().set('Authorization', 'secrt token')
    })
  }


  getstudent(studentId:string):Observable<any>{
      return this.Http.get<any>(`${environment.baseUrl}/student/${studentId}`)
    }

  
  

}




