import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  loginForm: FormGroup;
  constructor( 
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService:AuthenticationService
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      UserName: ['', Validators.required],
      Password: ['', Validators.required]
  });
  }

  gotoRegister()
  {
    this.router.navigate(['/Register']);
  }

  LoginuserDetails()
  {
    this.authenticationService.ValidateLoginDetails(this.loginForm.value).subscribe(result=>
      {
      if(result!=500)
      {
        alert("Welcome to the Application");
        this.router.navigate(['/homePage']);
      }
      else
      {
        alert("Invalid credentials");
      }
    },
    err=>
    {
      alert("Invalid credentials");
    });
  }
}
