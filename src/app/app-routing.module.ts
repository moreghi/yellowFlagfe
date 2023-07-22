
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// componenti Utente
// auth
import { LoginComponent } from './components/auth/login/login.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { ForgotpasswordComponent } from './components/auth/forgotpassword/forgotpassword.component';
import { RegistrationComponent } from './components/auth/registration/registration.component';
import { ForgotpasswordConfermeComponent } from './components/auth/forgotpassword-conferme/forgotpassword-conferme.component';
import { SignupConfermeComponent } from './components/auth/signup-conferme/signup-conferme.component';
import { Page404Component } from './components/page404/page404.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'forgotpassword',
    component: ForgotpasswordComponent
  },
  {
    path: 'registration',
    component: RegistrationComponent
  },
  {
    path: 'forgotpasswordConferme',
    component: ForgotpasswordConfermeComponent
  },
  {
    path: 'signupConferme',
    component: SignupConfermeComponent
  },
  {
    path: 'page404',
    component: Page404Component
  },

  {
    path: '',
    redirectTo: 'login',  //home   //  jumbotron
    pathMatch: 'full'
  },

  //  ultimo
  {
    path: '**',
    redirectTo: 'page404',
    pathMatch: 'full'
  },






];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
