import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss']
})
export class AddStudentComponent implements OnInit {
  AdmissionForm: FormGroup;
  CourseForm: FormGroup;
  constructor( private formBuilder: FormBuilder) { 
    this.AdmissionForm = this.formBuilder.group({
      FirstName: ['', Validators.required],
      LastName: ['', Validators.required],
      ParentName: ['', Validators.required],
      ContactNumber: ['', Validators.required],
      EmailId: ['', Validators.required],
      Address: ['', Validators.required],
      City: ['', Validators.required],
      State: ['', Validators.required],
      Country: ['', Validators.required],
      IsAbroadStudent: ['', Validators.required]
});
this.CourseForm = this.formBuilder.group({
  CoueseName: ['', Validators.required],
  Level: ['', Validators.required],
  Grade: ['', Validators.required],
});
}

  ngOnInit() {
  }

}
