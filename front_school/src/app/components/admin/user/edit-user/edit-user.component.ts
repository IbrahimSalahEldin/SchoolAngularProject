import { Component, EventEmitter, Output, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { TeacherService } from 'src/app/services/teacher/teacher.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit , OnChanges{
  @Input()user:any;
  selectedImage!:File;
  editUser:FormGroup;
  @Output()isEdit: EventEmitter<boolean> =   new EventEmitter();

  constructor(private fb: FormBuilder, private _TeacherService: TeacherService) {
    this.editUser = fb.group(
      {
        name: new FormControl(null,[Validators.minLength(20),Validators.maxLength(50),Validators.required]),
        email:new FormControl(null,[Validators.pattern('^[a-zA-Z0-9_.+]+(?<!^[0-9]*)@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$'),
        Validators.email,Validators.required]),
        password:new FormControl(null, [Validators.required,Validators.minLength(8)]),
        role:new FormControl(null, [ Validators.required ]),
        img : new FormControl('')
      });
    }

    ngOnChanges(): void {
      this.user();
      console.log(this.user);
    }
  
    ngOnInit(): void {}

    User()
    {
      this.editUser.get('name')?.setValue(this.user?.name);
      this.editUser.get('email')?.setValue(this.user?.email);
      this.editUser.get('password')?.setValue(this.user?.password);
      this.editUser.get('role')?.setValue(this.user?.role);
      //this.editBook.get('image')?.setValue(this.book?.img);
    }
    uploadImage(event: any) {
      this.selectedImage=event.target.files[0];
     }

     edit() {

      let formdata= new FormData();
      formdata.append("name", this.name?.value);
      formdata.append("email", this.email?.value);
      formdata.append("password", this.password?.value);
      formdata.append("role", this.role?.value);
  
      if(this.selectedImage)
      formdata.append("img",this.selectedImage,this.selectedImage.name);

  
  
      this._TeacherService.editUser(formdata , this.user._id).subscribe({
        next:()=>{
  
          this.isEdit.emit(true);
          setTimeout(() => {
            this.isEdit.emit(false);
          }, 3000);
        },
        error:()=>
        {
  
        }
      });
  
    }
    get name() {
      return this.editUser.get('name');
    }
  
    get email() {
      return this.editUser.get('email');
    }
  
    get password() {
      return this.editUser.get('password');
    }
  
    get role() {
      return this.editUser.get('role');
    }
  
    get img()
    {
      return this.editUser.get("img");
    }
}
