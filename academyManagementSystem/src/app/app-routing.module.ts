import { ManageFeeComponent } from './Fees/manage-fee/manage-fee.component';
import { AddFeeComponent } from './Fees/add-fee/add-fee.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManageStaffComponent } from "./Staff/manage-staff/manage-staff.component";
import { NewStaffComponent } from "./Staff/new-staff/new-staff.component";
import { ManageCourseComponent } from "./Courses/manage-course/manage-course.component";
import { AddCourseComponent } from "./Courses/add-course/add-course.component";
import { ManageStudentsComponent } from "./Students/manage-students/manage-students.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomePageComponent } from "./home-page/home-page.component";
import { LoginPageComponent } from "./login-page/login-page.component";
import { RegisterComponent } from "./register/register.component";
import { AddStudentComponent } from "./Students/add-student/add-student.component";

const routes: Routes = [
  { path: "", redirectTo:'Login', pathMatch: "full"},
  { path: "Login", component: LoginPageComponent },
  { path: "Register", component: RegisterComponent },
  {
    path: "homePage",
    component: HomePageComponent,
    children: [
      { path: "", redirectTo:'Dashboard',pathMatch: "full" },
      { path: "Dashboard", component: DashboardComponent },
      { path: "Students/AddStudent", component: AddStudentComponent },
      { path: "Students/ManageStudents", component: ManageStudentsComponent },
      { path: "Courses/AddCourse", component: AddCourseComponent },
      { path: "Courses/ManageCourse", component: ManageCourseComponent },
      { path: "Staff/AddStaff", component: NewStaffComponent },
      { path: "Staff/ManageStaff", component: ManageStaffComponent },
      { path: "Fee/AddFee", component: AddFeeComponent },
      { path: "Fee/ManageFees", component: ManageFeeComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
