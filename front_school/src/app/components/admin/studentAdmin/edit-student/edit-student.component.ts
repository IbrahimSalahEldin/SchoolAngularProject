import { Component, EventEmitter, Output, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl,AbstractControl  } from '@angular/forms';
import { StudendService } from 'src/app/services/student/student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit , OnChanges{
  @Input()student:any;
  selectedImage!:File;
  editStudent:FormGroup;
  @Output()isEdit: EventEmitter<boolean> =   new EventEmitter();

  constructor(private fb: FormBuilder, private _TeacherService: StudendService) {
    this.editStudent = fb.group(
      {
        name: new FormControl(null,[Validators.minLength(20),Validators.maxLength(50),Validators.required]),
        ssn:new FormControl(null,[Validators.required,Validators.minLength(14)]),
        address:new FormControl(null, [Validators.required,Validators.minLength(8)]),
        academic_year:new FormControl(null, [ Validators.required ]),
        class:new FormControl(null, [ Validators.required ]),
        father_description:new FormControl(null, [ Validators.required ]),
        absent: new FormControl(null, [Validators.required, this.validateAbsent]),
        img : new FormControl('')
      });
    }

    ngOnChanges(): void {
      this.student();
      console.log(this.student);
    }
  
    ngOnInit(): void {}

    validateAbsent(control: AbstractControl): { [key: string]: any } | null {
      const absentValue = control.value;
      if (absentValue && absentValue > 12) {
        return { absentLimitExceeded: true };
      }
      return null;
    }

    User()
    {
      this.editStudent.get('name')?.setValue(this.student?.name);
      this.editStudent.get('email')?.setValue(this.student?.ssn);
      this.editStudent.get('password')?.setValue(this.student?.address);
      this.editStudent.get('academic_year')?.setValue(this.student?.academic_year);
      this.editStudent.get('class')?.setValue(this.student?.class);
      this.editStudent.get('father_description')?.setValue(this.student?.father_description);
      this.editStudent.get('absent')?.setValue(this.student?.absent);
    
    }
    uploadImage(event: any) {
      this.selectedImage=event.target.files[0];
     }

     edit() {

      let formdata= new FormData();
      formdata.append("name", this.name?.value);
      formdata.append("ssn", this.ssn?.value);
      formdata.append("address", this.address?.value);
      formdata.append("academic_year", this.academic_year?.value);
      formdata.append("class", this.class?.value);
      formdata.append("father_description", this.father_description?.value);
      formdata.append("absent", this.absent?.value);
  
      if(this.selectedImage)
      formdata.append("img",this.selectedImage,this.selectedImage.name);

  
  
      this._TeacherService.editStudent(formdata , this.student._id).subscribe({
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
      return this.editStudent.get('name');
    }
  
    get ssn() {
      return this.editStudent.get('ssn');
    }
  
    get address() {
      return this.editStudent.get('address');
    }
  
    get academic_year() {
      return this.editStudent.get('academic_year');
    }
    get class() {
      return this.editStudent.get('class');
    }
    get father_description() {
      return this.editStudent.get('father_description');
    }
    get absent() {
      return this.editStudent.get('absent');
    }
  
    get img()
    {
      return this.editStudent.get("img");
    }
}

