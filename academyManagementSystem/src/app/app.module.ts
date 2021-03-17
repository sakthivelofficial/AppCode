import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomePageComponent } from './home-page/home-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatSidenavModule, MatListModule, MatButtonModule, MatIconModule, MatMenuModule } from "@angular/material";
import {MatTooltipModule} from '@angular/material/tooltip';
import { HttpClientModule } from '@angular/common/http';
import { AddStudentComponent } from './Students/add-student/add-student.component';
import { ManageStudentsComponent } from './Students/manage-students/manage-students.component';
import { AddCourseComponent } from './Courses/add-course/add-course.component';
import { ManageCourseComponent } from './Courses/manage-course/manage-course.component';
import { NewStaffComponent } from './Staff/new-staff/new-staff.component';
import { ManageStaffComponent } from './Staff/manage-staff/manage-staff.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    RegisterComponent,
    HomePageComponent,
    AddStudentComponent,
    ManageStudentsComponent,
    AddCourseComponent,
    ManageCourseComponent,
    NewStaffComponent,
    ManageStaffComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatMenuModule,
    MatTooltipModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
