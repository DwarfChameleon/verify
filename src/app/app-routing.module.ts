import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CameraComponent } from './camera/camera.component';
import { IduploadComponent } from './idupload/idupload.component';
import { ComplimentComponent } from './compliment/compliment.component';
import { StepsComponent } from './steps/steps.component';
import { SuccessComponent } from './success/success.component';
import { DobComponent } from './dob/dob.component';
import { GreetingsComponent } from './greetings/greetings.component';
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [
  {path:'', redirectTo: 'steps', pathMatch: 'full' },
  {path: 'idupload', component:IduploadComponent},
  {path: 'camera',component:CameraComponent},
  {path: 'compliment', component:ComplimentComponent},
  {path:'steps', component:StepsComponent},
  {path: 'success', component:SuccessComponent},
  {path: 'dob', component:DobComponent},
  {path: 'greetings', component:GreetingsComponent},
  {path: 'profile', component:ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
