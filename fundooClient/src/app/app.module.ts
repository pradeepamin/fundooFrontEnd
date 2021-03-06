import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';

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
import { IconsComponent } from './icons/icons.component';
import {MatChipsModule} from '@angular/material/chips';

import { MainnoteComponent } from './mainnote/mainnote.component';
import { EditnoteComponent } from './editnote/editnote.component';
import {MatDialogModule} from '@angular/material/dialog';
import { ArchivenoteComponent } from './archivenote/archivenote.component';
import { TrashComponent } from './trash/trash.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import { CollaboratorComponent } from './collaborator/collaborator.component';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { BehaviorSubject } from 'rxjs';
import { MatFileUploadModule } from 'angular-material-fileupload';
import { AmazingTimePickerModule } from 'amazing-time-picker';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent, 
    InputFundooComponent, ForgotPasswordComponent, ResetPasswordComponent, 
    DashboardComponent, DashhComponent, CreatenoteComponent, CardsComponent, 
    IconsComponent, MainnoteComponent, EditnoteComponent, ArchivenoteComponent, 
    TrashComponent, CollaboratorComponent
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
    MatButtonToggleModule,
    MatChipsModule,
    MatDialogModule,
    MatTooltipModule,
    OwlDateTimeModule, 
    OwlNativeDateTimeModule,
    MatFileUploadModule,
    NgxMaterialTimepickerModule,
    AmazingTimePickerModule
  ],

entryComponents:[
  EditnoteComponent,
  CollaboratorComponent
],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
