import { Component, OnInit } from '@angular/core';
import { AbstractControl,FormBuilder,FormGroup,FormControl,Validators } from '@angular/forms';
// import { AuthService } from '../../../services/user/auth.service';
import {TeacherService} from '../../../../services/teacher/teacher.service'
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  passwordRegex = '^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$'
  error:boolean=false
  message?:string=''
  selectedImage!:File;
  isAdded:boolean=false;
  registerForm!: FormGroup;
  constructor(private _TeacherService:TeacherService,private _Router:Router, private fb: FormBuilder){}
  passwordMatching(){}
  ngOnInit() : void{

      this.registerForm =this?.fb.group({
      name: new FormControl(null,[Validators.minLength(20),Validators.maxLength(50),Validators.required]),
      email:new FormControl(null,[Validators.pattern('^[a-zA-Z0-9_.+]+(?<!^[0-9]*)@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$'),
      Validators.email,Validators.required]),
      password:new FormControl(null, [Validators.required,Validators.minLength(8)]),
      role:new FormControl(null, [ Validators.required ]),
      img : new FormControl('')
    });
    // ,[passwordMatch("password","confirmPassword")]
  }

  uploadImage(event: any) {
    this.selectedImage=event.target.files[0];
   }

submitRegisterForm(){

 const formData = new FormData();
 formData.append('name', this.registerForm.get('name')?.value);
 formData.append('email', this.registerForm.get('email')?.value);
 formData.append('password', this.registerForm.get('password')?.value);
 formData.append('role', this.registerForm.get('role')?.value);
 
 if(this.selectedImage)
 formData.append("img", this.selectedImage, this.selectedImage.name);


 this._TeacherService.addUser(formData).subscribe({
   next: (Response)=>{
     this._Router.navigate(['/admin/user']);
   },
   error:()=>{
     this.message="User Already Exist";
     this.error=true;
     this._Router.navigate(['/admin/user']);
     setTimeout(() => {
       this.error=false;
     }, 4000);
   }
 })

}
}
