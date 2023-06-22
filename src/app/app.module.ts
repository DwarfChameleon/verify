import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CameraComponent } from './camera/camera.component';
import { IduploadComponent } from './idupload/idupload.component';
import { ComplimentComponent } from './compliment/compliment.component';
import { ModalComponent } from './modal/modal.component';
import { StepsComponent } from './steps/steps.component';
import { SuccessComponent } from './success/success.component';
import { DobComponent } from './dob/dob.component';
import { ProfileComponent } from './profile/profile.component';
import { GreetingsComponent } from './greetings/greetings.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CameraComponent,
    IduploadComponent,
    ComplimentComponent,
    ModalComponent,
    StepsComponent,
    SuccessComponent,
    DobComponent,
    ProfileComponent,
    GreetingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
