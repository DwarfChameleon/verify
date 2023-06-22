import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.scss']
})
export class StepsComponent {
stepsHeading ='Request For Additional information';
stepsNote='Additional Information has been requested by Test Dealership to complete the loan approval process. Please provide the following:';
stepsInst ='Steps to submiit additional information:';
additionalInfo='Please Complete the steps below to provide the needed document';
stepsGuide='Request For Additional information:';
step1=' Complete a quick verification to protect your identity';
step2=' Review and provide the additional documents required';
step3=' Submit the requested documents to complete the application process';
 userString: string ='James';
 userSwitch = `Not ${this.userString} ? Click here`;
constructor(private router:Router){}
verify(){
  this.router.navigate(['/dob']);
}
}
