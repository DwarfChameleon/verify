import { Component, ViewChild, ElementRef } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { ModalServiceService } from '../modal-service.service';
import { SharedServiceService } from '../shared-service.service';
@Component({
  selector: 'app-camera',
  styleUrls:[`./camera.component.scss`],
  template: `
    <video #videoElement id="video"></video>
    <div align="center"><button (click)="takePicture()" id="capture">Capture Image</button></div>
    <canvas #canvasElement style="display: none;"></canvas>
    <img *ngIf="imageSrc" [src]="imageSrc" alt="Captured Image" id="reviewIMG" >
    <div id="captureFunctions" style="display:none"><img src="/assets/ok.png" (click)="upload()" ><img src="/assets/x.png" (click)="reCapture()"> </div>
  `,
})
export class CameraComponent {
  @ViewChild('videoElement') videoElement!: ElementRef;
  @ViewChild('canvasElement') canvasElement!: ElementRef;

  imageSrc: string ='';

  ngAfterViewInit() {
    this.setupCamera();
  }

  async setupCamera() {
    try {
      const video = this.videoElement.nativeElement as HTMLVideoElement;
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      video.srcObject = stream;
      video.play();
    } catch (error) {
      console.error('Error accessing camera:', error);
    }
  }

  takePicture() {
    const video = this.videoElement.nativeElement as HTMLVideoElement;
    const canvas = this.canvasElement.nativeElement as HTMLCanvasElement;
    const context = canvas.getContext('2d');
    const captureElement = document.getElementById('capture');
    const videoElement= document.getElementById('video');
    const operaTionElement=document.getElementById('captureFunctions');
    if (captureElement) {
      captureElement.style.display = 'none';
    }
    if (videoElement) {
      videoElement.style.display = 'none';
    }
    if (operaTionElement) {
      operaTionElement.style.display = 'flex';
    }
    // Set canvas dimensions to match the video element
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    // Draw the current video frame onto the canvas
    context?.drawImage(video, 0, 0, canvas.width, canvas.height);

    // Get the image data from the canvas as a base64-encoded string
    const imageData = canvas.toDataURL('image/png');

    // Set the captured image source
    this.imageSrc = imageData;
  }
  reCapture():void{
   
      this.location.go(this.location.path());
  }
  
 constructor(private router:Router,  private location: Location,
   private modalService: ModalServiceService , private sharedService: SharedServiceService){}
  upload():void {
    /////upload image file s3 bucket
    //////////this.sharedService.setImageData('/assets/ok.png');
 this.modalService.open();
    this.router.navigate(['/idupload']);
  }
  
}