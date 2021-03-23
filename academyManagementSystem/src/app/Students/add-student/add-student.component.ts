import { CourseDetailsClient } from "./../../../api-client/api";
import { AfterViewInit, Component, OnInit, TemplateRef, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { getMatIconFailedToSanitizeLiteralError, MatDialog } from "@angular/material";
import {
  Student,
  StudentsClient,
  StudentCourse,
  InsertStudent,
} from "src/api-client/api";

@Component({
  selector: "app-add-student",
  templateUrl: "./add-student.component.html",
  styleUrls: ["./add-student.component.scss"],
})
export class AddStudentComponent implements OnInit,AfterViewInit {
  AdmissionForm: FormGroup;
  CourseForm: FormGroup;
  studentinfo: Student;
  insertstudent = new InsertStudent();
  courses = [];
  levels = [];
  grades = [];
  coursefee = 0;
  classCount = [8,16,32];
  @ViewChild('success', { static: true }) success: TemplateRef<any>;
  @ViewChild('failure', { static: true }) failure: TemplateRef<any>;

  constructor(
    private formBuilder: FormBuilder,
    private studentsclient: StudentsClient,
    private courseClient: CourseDetailsClient,
    private dialog: MatDialog
  ) {
    this.AdmissionForm = this.formBuilder.group({
      FirstName: ["", Validators.required],
      LastName: ["", Validators.required],
      ParentName: ["", Validators.required],
      ContactNumber: [null, Validators.required],
      EmailId: ["", Validators.required],
      Address: ["", Validators.required],
      City: ["", Validators.required],
      State: ["", Validators.required],
      Country: ["", Validators.required],
      IsAbroadStudent: [null, Validators.required]
    });
    this.CourseForm = this.formBuilder.group({
      CoueseName: [null, Validators.required],
      Level: [null, Validators.required],
      Grade: [null, Validators.required],
      classcount: [null, Validators.required],
    });
  }
  isAbroadStudent = false;
  ngAfterViewInit(): void {
  }
  isLinear = true;
  countries = [
    "India",
    "US",
    "UK",
    "Singapore",
    "Malaysia",
    "Dubai",
    "Australia",
  ];
  ngOnInit() {
    this.insertstudent.student = new Student();
    this.insertstudent.courses = [];
    this.courseClient.getCourseDetails().subscribe((res) => {
      this.courses = res.courses;
      this.grades = res.grades;
      this.levels = res.levels;
    });
  }
  submitadmissiondetails() {
    this.insertstudent.student.firstName = this.AdmissionForm.get(
      "FirstName"
    ).value;
    this.insertstudent.student.lastName = this.AdmissionForm.get(
      "LastName"
    ).value;
    this.insertstudent.student.parentName = this.AdmissionForm.get(
      "ParentName"
    ).value;
    this.insertstudent.student.contactNumber = Number(
      this.AdmissionForm.get("ContactNumber").value
    );
    this.insertstudent.student.emailId = this.AdmissionForm.get(
      "EmailId"
    ).value;
    this.insertstudent.student.address = this.AdmissionForm.get(
      "Address"
    ).value;
    this.insertstudent.student.city = this.AdmissionForm.get("City").value;
    this.insertstudent.student.state = this.AdmissionForm.get("State").value;
    this.insertstudent.student.state = this.AdmissionForm.get("Country").value;

    var course = new StudentCourse();
    course.gradeId = Number(this.CourseForm.get("CoueseName").value);
    course.courseId = Number(this.CourseForm.get("Level").value);
    course.levelId = Number(this.CourseForm.get("Grade").value);
    course.isCompleted = false;
    this.insertstudent.courses.push(course);
    this.studentsclient.insertStudentAdmission(this.insertstudent).subscribe(
      res => {
        if(res == 0){
          this.dialog.open(this.success);
        } else {
          this.dialog.open(this.failure);
        }
      }
    );
  }
  CheckNRI(){
    let country = this.AdmissionForm.get("Country").value;
    if(country.includes('India')){
      this.isAbroadStudent = false;
    } else {
      this.isAbroadStudent = true;
    }
  }
}
