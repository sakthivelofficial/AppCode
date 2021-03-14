import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  RegisterForm: FormGroup;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private authenticationService:AuthenticationService

  ) { }

  ngOnInit() {
    this.RegisterForm = this.formBuilder.group({
      FirstName: ['', Validators.required],
      LastName: ['', Validators.required],
      Phonenumber: ['', Validators.required],
      Email: ['', Validators.required],
      SelectedCourse: ['', Validators.required]
  });
  }
  gotologinpage()
  {
    this.router.navigate(['/Login']);
  }
  submituserDetails()
  {
    this.authenticationService.PostRegisterDetails(this.RegisterForm.value).subscribe(result=>
      {
        alert("User Added Successfully");
      });
  }
}
