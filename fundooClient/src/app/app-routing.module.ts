import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { InputFundooComponent } from './input-fundoo/input-fundoo.component';
import { FullscreenOverlayContainer } from '@angular/cdk/overlay';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { DashhComponent } from './dashh/dashh.component';
import { CreatenoteComponent } from './createnote/createnote.component';
import { CardsComponent } from './cards/cards.component';




// const routes: Routes = [
//   { 
//     path: '', component: LoginComponent
//    },
// ];
const routes: Routes = [
  {                                          // removed square bracket
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
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
    path: 'resetPassword/:token',
    component: ResetPasswordComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'inputfundoo',
    component: InputFundooComponent
  },

  {
    path: 'dashh',
    component: DashhComponent
  },

  {
    path: 'createnote',
    component: CreatenoteComponent
  }, 
  {
    path: 'cards',
    component: CardsComponent
  }

];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
