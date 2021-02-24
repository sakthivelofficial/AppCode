import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
{path: '', component:LoginPageComponent} ,
{path: 'Login', component:LoginPageComponent,	pathMatch: 'full'
},
{path: 'Register', component:RegisterComponent},
{path: 'homePage', component:HomePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
