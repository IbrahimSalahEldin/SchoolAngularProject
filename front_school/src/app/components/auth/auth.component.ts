
import { Component } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
// import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
 error?:boolean=false;
  userData?:any;
  message?:string='';
 constructor(private _AuthService:AuthService ,private _Router:Router){}

 loginForm =new FormGroup({
 email:new FormControl(null,[Validators.required]),
 password:new FormControl(null, [Validators.required ]),
})
submitloginForm(loginForm:FormGroup){
  
 this._AuthService.login(loginForm.value).subscribe({
 
   next: (Response)=>{
     this.userData = Response;

     
     if(Response.role==true){
      localStorage.setItem('token',Response.token);
      localStorage.setItem('isLogin',"true");
      localStorage.setItem('isAdmin',"true");
      this._AuthService.saveCurrentUser();
      this._Router.navigate(['admin']);
     }
     else{
      localStorage.setItem('token',Response.token);
      localStorage.setItem('isLogin',"true");
      localStorage.setItem('isAdmin',"true");
      this._AuthService.saveCurrentUser();
      this._Router.navigate(['Teacher']);
    }
   },
   error:()=>{
     this.message="Email or Password is not valid";
     this.error=true;
     setTimeout(() =>{
       this.error=false;
     }, 4000);
   }
 })
}

}
