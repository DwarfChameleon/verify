import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators, AbstractControl, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-dob',
  templateUrl: './dob.component.html',
  styleUrls: ['./dob.component.scss']
})
export class DobComponent {
  dateOfBirthForm!: FormGroup;
  submitted = false;
  title = 'Verify Identity';
  months: string[] = [];
  days: number[] = [];
  years: number[] = [];
  currentYear: number ;
  isVerified = false;
  
  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.currentYear = new Date().getFullYear();
  }

  ngOnInit() {
    this.months = this.generateMonthList();
    this.days = this.generateDayList();
    
    this.dateOfBirthForm = this.formBuilder.group({
      year: ['', [Validators.required, Validators.pattern(/^\d{4}$/), this.yearRangeValidator(1960, this.currentYear)]],
      day: ['', Validators.required],
      month: ['', Validators.required],
      phoneInput: ['', Validators.required]
    });
    if (this.dateOfBirthForm.valid) {
      this.isVerified = true;
      
    } else {
      this.isVerified = false;
    }
  }

  private yearRangeValidator(min: number, max: number): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const year = Number(control.value);
      if (isNaN(year) || year < min || year > max) {
        return { 'yearRange': true };
      }
      else{

           return Error('Invalid date');
      }
   
    };
  }

  generateDayList(): number[] {
    const daysInMonth = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDate();
    const dayArray = Array.from({ length: daysInMonth }, (_, index) => index + 1);
    return dayArray;
  }

  generateMonthList(): string[] {
    const monthNames: string[] = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    return monthNames;
  }
  
  verifyAcct() {
    this.submitted = true;
    const data = this.dateOfBirthForm.value;
    console.log(data);
    this.router.navigate(['/idupload']);
    
  }
  
    isFormValid(): boolean | string {return true;}

}
