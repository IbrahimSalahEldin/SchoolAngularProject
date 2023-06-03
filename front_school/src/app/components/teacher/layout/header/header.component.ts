import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  name:String|null;
 
  constructor(private auth:AuthService,private router:Router)
  {
    this.name=localStorage.getItem('name');
  }
  logout()
  {
   this.auth.logout();
  }
}
