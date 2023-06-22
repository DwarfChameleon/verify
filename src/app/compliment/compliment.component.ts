import { Component,ElementRef,ViewChild  } from '@angular/core';
import { Router } from '@angular/router';
import { ModalServiceService } from '../modal-service.service';
import { SharedServiceService } from '../shared-service.service';
@Component({
  selector: 'app-compliment',
  templateUrl: './compliment.component.html',
  styleUrls: ['./compliment.component.scss']
})
export class ComplimentComponent {
  imageData: { [key: string]: string } = {};
  [x: string]: any;
  
 showPopup = false;

 /////upld box1
 greetings= 'Welcome';
 user: string ='James';
 messages: string ='Additional Information has been requested by Test Dealership to complete the loan approval process. Please provide the following:';
 requestTitle: string='Requested Documents';
 opt1TitleName: string='Drivers License';
 opt1Note: string='Valid state issued Identification card';

  /////upld box1
  opt1TitleName2: string='Pay Studs';
  opt1Note2: string='Pay stub, bank account statements or w2s to show income';
 
  /////upld box1
  opt1TitleName3: string='Proof Of Insurance';
  opt1Note3: string='Proof of vehicle insurance in case of accident of damage';
 

 togglePopup() {
  this.showPopup = !this.showPopup;
}


@ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;
selectedImage: File | null = null;

onFileSelected(event: any) {
  this.selectedImage = event.target.files[0];
  console.log(this.selectedImage);
  // Perform further actions with the selected image
}

openFilePicker() {
  this.fileInput.nativeElement.click();
}
constructor(private router:Router, private modalService: ModalServiceService, private sharedService: SharedServiceService){}
openCamera(){
  this.router.navigate(['/camera']);
}
isModalOpen(): boolean {
  return this.modalService.isOpen;
}
closeModal(): void {
  this.router.navigate(['/success'])
}

//////update image
ngOnInit(): void {
  this['imageData ']= this.sharedService.getImageData();

}
}
