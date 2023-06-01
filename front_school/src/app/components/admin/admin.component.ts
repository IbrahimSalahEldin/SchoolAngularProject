import { NavigationEnd, Router } from '@angular/router';
import { Component, OnChanges } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  toggle:boolean=false;
  namePage:String=this.router.url;

  constructor(private router:Router){
    router.events.subscribe((val) => {
      if(val instanceof NavigationEnd){
         //console.log(val.url);
         this.namePage=(val.url.split('/'))[2];
      }
  });
  }

  sidbar(status:boolean)
  {
    console.log(status);
    this.toggle=status;
  }


}
