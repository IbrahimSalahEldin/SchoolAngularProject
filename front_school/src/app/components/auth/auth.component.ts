
import { Component,OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  error:boolean=false
  userData?:any
  message?:string=''
 constructor(private _AuthService:AuthService ,private _Router:Router){}

 ngOnInit() : void{}

 loginForm =new FormGroup({
 email:new FormControl(null,[Validators.required]),
 password:new FormControl(null, [Validators.required ]),
})
submitloginForm(loginForm:FormGroup){
  
 // this._AuthService.login(loginForm.value).subscribe((Response)=>{
 //   if(Response.id){
 //     this.userData = Response;
 //     localStorage.setItem('token',Response.token);
 //     localStorage.setItem('isLogin',"true");
 //     this._AuthService.saveCurrentUser();
 //     this._Router.navigate(['/home']);
 //   }
 //   else {
 //     console.log("xxxxxxxxxxxx")
 //     this.error=true;
 //   }
 // })

 this._AuthService.login(loginForm.value).subscribe({
   next: (Response)=>{
     this.userData = Response;
     localStorage.setItem('token',Response.token);
     localStorage.setItem('isLogin',"true");
     localStorage.setItem('isUser',"true");
     this._AuthService.saveCurrentUser();
     this._Router.navigate(['/home']);
   },
   error:()=>{
     this.message="Email or Password is not valid";
     this.error=true;
     setTimeout(() => {
       this.error=false;
     }, 4000);
   }
 })
}

}
