import { Component, EventEmitter, Output,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { HttpClient } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { TeacherService } from 'src/app/services/teacher/teacher.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  name:String|null;
  
 
  constructor(private auth:AuthService,private router:Router,private ActivatedRoute: ActivatedRoute, private _TeacherService:TeacherService)
  {
    this.name=localStorage.getItem('name');
  }
  logout()
  {
   this.auth.logout();
  }
}
