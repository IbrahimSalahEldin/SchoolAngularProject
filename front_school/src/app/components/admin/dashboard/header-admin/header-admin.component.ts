import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-header-admin',
  templateUrl: './header-admin.component.html',
  styleUrls: ['./header-admin.component.css']
})
export class HeaderAdminComponent {
  firstName:String|null;
  lastName:string|null;
  @Output()status: EventEmitter<boolean> =  new EventEmitter();
   isShow:boolean;
  constructor(private auth:AuthService,private router:Router)
  {
    this.isShow=true;
    this.firstName=localStorage.getItem('fName');
    this.lastName=localStorage.getItem('lName');
  }


   toggle()
   {
    this.isShow=!this.isShow;
    this.status.emit(!this.isShow);
   }

   logout()
   {
    this.auth.logout();
    this.router.navigate(['/']);
   }
}
