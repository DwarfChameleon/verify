import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {

  private imageData: string ='/assets/x.png';

  setImageData(image: string): void {
    this.imageData = image;
  }

  getImageData(): string {
    return this.imageData;
  }
}
