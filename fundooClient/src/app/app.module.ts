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
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

import {MatCardModule,MatInputModule,MatButtonModule,MatFormFieldModule,MatToolbarModule,
        MatExpansionModule,MatTabsModule,MatCheckboxModule,MatIconModule, MatSelectModule,
        MatSnackBarModule,MatMenuModule} from '@angular/material';
import {MatListModule} from '@angular/material/list';
import {FlexLayoutModule} from '@angular/flex-layout';
import { InputFundooComponent } from './input-fundoo/input-fundoo.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { DashboardComponent } from './dashboard/dashboard.component';
// import { DashComponent } from './dash/dash.component';
import { DashhComponent } from './dashh/dashh.component';
import { CreatenoteComponent } from './createnote/createnote.component';
import { CardsComponent } from './cards/cards.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent, 
    InputFundooComponent, ForgotPasswordComponent, ResetPasswordComponent, 
    DashboardComponent, DashhComponent, CreatenoteComponent, CardsComponent
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
    MatExpansionModule,MatTabsModule,MatCheckboxModule,MatIconModule,MatMenuModule,
    FormsModule,
    ReactiveFormsModule,
    ShowHidePasswordModule,
    HttpClientModule,
    CommonModule,
    MatProgressBarModule,
    MatSnackBarModule,
    MatSidenavModule,
    FlexLayoutModule,
    MatListModule,
    MDBBootstrapModule,
    MatButtonToggleModule
  
    
  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
