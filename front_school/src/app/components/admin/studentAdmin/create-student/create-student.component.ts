import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StudendService } from 'src/app/services/student/student.service';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {
  studentForm!: FormGroup;
  selectedImage!:File;

  constructor(private formBuilder: FormBuilder,private _studentService:StudendService) { }

  ngOnInit() {
    this.studentForm = this.formBuilder.group({
      name: ['', Validators.required],
      img: ['', Validators.required],
      ssn: ['', Validators.required],
      address: ['', Validators.required],
      academic_year : ['', Validators.required],
      class: ['', Validators.required],
      father_description: ['', Validators.required],
    });

  }
  uploadImage(event: any) {
    this.selectedImage=event.target.files[0];
   }


  onSubmit() {
  
      const formData = new FormData();
      formData.append('name', this.studentForm.value.name);
      formData.append('img', this.selectedImage,this.selectedImage.name);
      formData.append('ssn', this.studentForm.value.ssn);
      formData.append('academic_year', this.studentForm.value.academic_year);
      formData.append('address', this.studentForm.value.address);
      formData.append('class', this.studentForm.value.class);
      formData.append('father_description', this.studentForm.value.father_description);

      
      this._studentService.addstudents(formData).subscribe(
       
        (response) => {
          console.log("fffff");
          console.log(this.studentForm.value.name );
        },
        (error) => {

          console.log(this.studentForm.value.name);
        }
      );
    }
  }

