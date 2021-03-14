import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http:HttpClient) { }
  PostRegisterDetails(Registerdetails): Observable<any>{
    return this.http.post("https://localhost:44363/api/Authentication/UserDetailsRegister",Registerdetails);
  }
  ValidateLoginDetails(userdetails): Observable<any>{
    return this.http.post("https://localhost:44363/api/Authentication/ValidateUserProfile",userdetails);
  }
}
