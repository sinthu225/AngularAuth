import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';


import { LoginComponent } from './login/login.component';
import { EmailComponent } from './email/email.component';
import { SignupComponent } from './signup/signup.component';
import { MembersComponent } from './members/members.component';

import { AuthGuard } from './auth.service';
import { routes } from './app.routes';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


export const firebaseConfig = {
  apiKey: 'AIzaSyANCVr8VLPEwUM1zqOq0K_leSmDt84ldl8',
  authDomain: 'angular4-d3fdd.firebaseapp.com',
  databaseURL: 'https://angular4-d3fdd.firebaseio.com',
  storageBucket: '',
  messagingSenderId: '655113400254'
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmailComponent,
    SignupComponent,
    MembersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    routes,
    BrowserAnimationsModule

  ],
  providers: [ AuthGuard ],
  bootstrap: [AppComponent]
})
export class AppModule { }
