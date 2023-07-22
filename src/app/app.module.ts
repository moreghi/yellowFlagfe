import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// app per controllo accesso (auth)
import { LoginComponent } from './components/auth/login/login.component';
import { RegistrationComponent } from './components/auth/registration/registration.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { ForgotpasswordComponent } from './components/auth/forgotpassword/forgotpassword.component';
import { SignupConfermeComponent } from './components/auth/signup-conferme/signup-conferme.component';
import { ForgotpasswordConfermeComponent } from './components/auth/forgotpassword-conferme/forgotpassword-conferme.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    SignupComponent,
    ForgotpasswordComponent,
    SignupConfermeComponent,
    ForgotpasswordConfermeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
