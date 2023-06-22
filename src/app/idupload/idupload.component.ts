import { Component } from '@angular/core';

@Component({
  selector: 'app-idupload',
  templateUrl: './idupload.component.html',
  styleUrls: ['./idupload.component.scss']
})
export class IduploadComponent {
showPopup = false;
togglePopup() {
  this.showPopup = !this.showPopup;
}
}
