import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RequestChangePasswordComponent } from './components/request-change-password/request-change-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { RegisterComponent } from './components/register/register.component';
import { VerifyComponent } from './components/verify/verify.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';

const routes: Routes = [
  {path:'' , redirectTo:'login' , pathMatch:'full'},
  {path:'login' , component:LoginComponent},
  {path:'edit-profile' , component:EditProfileComponent},
  {path:'register' , component:RegisterComponent},
  {path:'verify' , component:VerifyComponent},
  {path:'request-change' , component:RequestChangePasswordComponent},
  {path:'reset-password' , component:ResetPasswordComponent},
  {path:'change-password' , component:ChangePasswordComponent},
  {path:'verify' , component:VerifyComponent},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
