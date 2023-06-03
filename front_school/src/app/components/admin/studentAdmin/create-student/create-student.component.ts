import { Component, OnInit } from '@angular/core';
import { AbstractControl,FormBuilder,FormGroup,FormControl,Validators } from '@angular/forms';
import { StudendService } from 'src/app/services/student/student.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {
  studentForm!: FormGroup;
  error:boolean=false
  message?:string=''
  selectedImage!:File;
  isAdded:boolean=false;
  constructor(private formBuilder: FormBuilder,private studentService:StudendService,private    _Router:Router) { }

  ngOnInit() {
    
    this.studentForm =this?.formBuilder.group({
      name: new FormControl(null,[Validators.minLength(20),Validators.maxLength(50),Validators.required]),
      ssn:new FormControl(null,[Validators.required,Validators.minLength(14)]),
      address:new FormControl(null, [Validators.required,Validators.minLength(8)]),
      academic_year:new FormControl(null, [ Validators.required ]),
      class:new FormControl(null, [ Validators.required ]),
      father_description:new FormControl(null, [ Validators.required ]),
      img : new FormControl('')
    });


  }
  uploadImage(event: any) {
    this.selectedImage=event.target.files[0];
   }


   onSubmit(){

    const formData = new FormData();
    formData.append('name', this.studentForm.get('name')?.value);
    formData.append('ssn', this.studentForm.get('ssn')?.value);
    formData.append('address', this.studentForm.get('address')?.value);
    formData.append('academic_year', this.studentForm.get('academic_year')?.value);
    formData.append('class', this.studentForm.get('class')?.value);
    formData.append('father_description', this.studentForm.get('father_description')?.value);

    
    if(this.selectedImage)
    formData.append("img", this.selectedImage, this.selectedImage.name);
   
   
    this.studentService.addstudents(formData).subscribe({
      next: (Response)=>{
        this._Router.navigate(['/admin/student']);
      },
      error:()=>{
        this.message="User Already Exist";
        this.error=true;
        this._Router.navigate(['/admin/student']);
        setTimeout(() => {
          this.error=false;
        }, 4000);
      }
    })
   
   }
  }

