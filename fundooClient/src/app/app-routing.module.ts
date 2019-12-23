import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { InputFundooComponent } from './input-fundoo/input-fundoo.component';
import { FullscreenOverlayContainer } from '@angular/cdk/overlay';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';



// const routes: Routes = [
//   { 
//     path: '', component: LoginComponent
//    },
// ];
const routes: Routes = [
  {                                          // removed square bracket
    path: '',
    redirectTo: 'login',
    pathMatch:'full'
  }, 
  {
    path: 'login',
    component: LoginComponent
  },
 
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'forgotPassword',
    component: ForgotPasswordComponent
  },
  {
    path: 'resetPassword',
    component: ResetPasswordComponent
  }

];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
