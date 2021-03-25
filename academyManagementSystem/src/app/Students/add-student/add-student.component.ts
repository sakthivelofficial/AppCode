import { CourseDetailsClient } from "./../../../api-client/api";
import {
  AfterViewInit,
  Component,
  OnInit,
  TemplateRef,
  ViewChild,
} from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import {
  getMatIconFailedToSanitizeLiteralError,
  MatDialog,
} from "@angular/material";
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
export class AddStudentComponent implements OnInit, AfterViewInit {
  AdmissionForm: FormGroup;
  CourseForm: FormGroup;
  studentinfo: Student;
  course = new StudentCourse();
  insertstudent = new InsertStudent();
  courses = [];
  levels = [];
  grades = [];
  coursefee = 0;
  studentCountry;
  classCount = [8, 16, 32];
  @ViewChild("success", { static: true }) success: TemplateRef<any>;
  @ViewChild("failure", { static: true }) failure: TemplateRef<any>;

  constructor(
    private studentsclient: StudentsClient,
    private courseClient: CourseDetailsClient,
    private dialog: MatDialog
  ) {}
  isAbroadStudent = false;
  ngAfterViewInit(): void {}
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
    this.insertstudent.student.country = this.studentCountry;
    this.course.isCompleted = false;
    this.insertstudent.courses = [];
    this.insertstudent.courses.push(this.course);
    this.studentsclient
      .insertStudentAdmission(this.insertstudent)
      .subscribe((res) => {
        if (res == 0) {
          this.dialog.open(this.success);
        } else {
          this.dialog.open(this.failure);
        }
      });
  }
  CheckNRI() {
    if (this.studentCountry.includes("India")) {
      this.isAbroadStudent = false;
    } else {
      this.isAbroadStudent = true;
    }
  }

  setCourseFee() {
    if (
      this.course.gradeId &&
      this.course.courseId &&
      this.course.classCount &&
      this.course.levelId
    ) {
      this.courseClient
        .getFeesbyCourseID(
          this.course.courseId,
          this.course.gradeId,
          this.course.levelId,
          this.course.classCount,
          this.isAbroadStudent
        )
        .subscribe((res) => {
          if (res > 0) {
            this.coursefee = res;
          }
        });
    }
  }
}
