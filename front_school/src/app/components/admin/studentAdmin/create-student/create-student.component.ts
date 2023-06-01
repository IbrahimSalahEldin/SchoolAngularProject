import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { StudendService } from 'src/app/services/student/student.service';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {
  studentForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient,private studentService:StudendService) { }

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

  onSubmit() {
    if (this.studentForm.valid) {
      const formData = new FormData();
      formData.append('name', this.studentForm.value.name);
      formData.append('img', this.studentForm.value.img);
      formData.append('ssn', this.studentForm.value.ssn);
      formData.append('academic_year', this.studentForm.value.academic_year);
      formData.append('address', this.studentForm.value.address);
      formData.append('class', this.studentForm.value.class);
      formData.append('address', this.studentForm.value.father_description);

      this.studentService.addstudents().subscribe(
        (response) => {
          // Handle the response from the Node.js project
        },
        (error) => {
          // Handle any errors
        }
      );
    }
  }
}

