import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Student, StudentsClient,StudentCourse, InsertStudent } from 'src/api-client/api';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss']
})
export class AddStudentComponent implements OnInit {
  AdmissionForm: FormGroup;
  CourseForm: FormGroup;
  studentinfo : Student;
  insertstudent :any = {};
  studentcourseinfo : StudentCourse;
  constructor( private formBuilder: FormBuilder, private studentsclient:StudentsClient) { 
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
      //IsAbroadStudent: ['', Validators.required]
});
this.CourseForm = this.formBuilder.group({
  CoueseName: ['', Validators.required],
  Level: ['', Validators.required],
  Grade: ['', Validators.required],
});
}
isLinear = true;
  ngOnInit() {
  }
  submitadmissiondetails()
  {
    this.insertstudent.firstName = this.AdmissionForm.get('FirstName').value;
    this.insertstudent.lastName = this.AdmissionForm.get('LastName').value;
    this.insertstudent.parentName = this.AdmissionForm.get('ParentName').value;
    this.insertstudent.contactNumber = this.AdmissionForm.get('ContactNumber').value;
    this.insertstudent.emailId = this.AdmissionForm.get('EmailId').value;
    this.insertstudent.address = this.AdmissionForm.get('Address').value;
    this.insertstudent.city = this.AdmissionForm.get('City').value;
    this.insertstudent.state = this.AdmissionForm.get('State').value;
    this.insertstudent.state = this.AdmissionForm.get('Country').value;
    this.insertstudent.mappingId = 1;
    this.insertstudent.studentID = 2;
    this.insertstudent.courseId = 3;
    this.insertstudent.levelId = 2;
    this.insertstudent.isCompleted = false;
    this.studentsclient.insertStudentAdmission(this.insertstudent).subscribe();
  }
}
