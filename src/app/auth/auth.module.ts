import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SharedModule } from '../shared/shared.module';
import { RequestChangePasswordComponent } from './components/request-change-password/request-change-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { VerifyComponent } from './components/verify/verify.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    RequestChangePasswordComponent,
    ResetPasswordComponent,
    ChangePasswordComponent,
    VerifyComponent,
    EditProfileComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
     SharedModule,
  ],
  

  
})
export class AuthModule { }
