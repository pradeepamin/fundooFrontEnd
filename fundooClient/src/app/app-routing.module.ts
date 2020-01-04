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
import { IconsComponent } from './icons/icons.component';
import { MainnoteComponent } from './mainnote/mainnote.component';
import { ArchivenoteComponent } from './archivenote/archivenote.component';
import { TrashComponent } from './trash/trash.component';
import { CollaboratorComponent } from './collaborator/collaborator.component';



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
    path: 'icons',
    component: IconsComponent
  },
   {
    path: 'cards',
    component: CardsComponent
  },{
    path: 'collaborator',
    component: CollaboratorComponent
  },
   
  // {
  //   path: 'archivenote',component: ArchivenoteComponent TrashComponent
  // },

  {
    path: 'dashboard', component: DashboardComponent,
    children:
      [
        { path: 'mainnote', component: MainnoteComponent },
        { path: 'archivenote', component: ArchivenoteComponent },
        { path: 'trash', component: TrashComponent },

        { path: '', redirectTo: 'main', pathMatch: 'full' }
      ]
  }

];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
