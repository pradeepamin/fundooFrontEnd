import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './register/register.component';
import { ShowHidePasswordModule } from 'ngx-show-hide-password';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatSidenavModule} from '@angular/material/sidenav';

import {MatCardModule,MatInputModule,MatButtonModule,MatFormFieldModule,MatToolbarModule,
        MatExpansionModule,MatTabsModule,MatCheckboxModule,MatIconModule, MatSelectModule,
        MatSnackBarModule} from '@angular/material';
import { InputFundooComponent } from './input-fundoo/input-fundoo.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { DashboardComponent } from './dashboard/dashboard.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent, 
    InputFundooComponent, ForgotPasswordComponent, ResetPasswordComponent, DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatExpansionModule,MatTabsModule,MatCheckboxModule,MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    ShowHidePasswordModule,
    HttpClientModule,
    CommonModule,
    MatProgressBarModule,
    MatSnackBarModule,
    MatSidenavModule
    
    
  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
