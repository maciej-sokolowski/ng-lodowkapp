import { Component, OnInit, Input } from '@angular/core';
import { ImageService } from 'src/app/services/image.service';
import { Image } from 'src/app/interfaces/Models/image';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss']
})
export class CanvasComponent implements OnInit {

  @Input() currentUser: any;
  userType: string;
  userId: string;
  allImages: Image[];
  myImage: Image;
  myImageUrl: string;

  isChild: boolean;  

  constructor(private imageService: ImageService) { }

  ngOnInit() {
    this.userTypeVerification();
    this.userImageVerification();
  }

  userTypeVerification(){
    this.userType = this.currentUser[0]["type"];
    this.userId = this.currentUser[0]["id"];

    if (this.userType === "CHILDREN") {
      this.isChild = true;
    } else {
      this.isChild = false;
    }
    console.log(this.currentUser)
  }

  userImageVerification() {
    this.imageService.getItems().subscribe(items => this.allImages = items);
    this.myImage = this.allImages.find(item => item["userId"] === this.userId);
    if (this.myImage) {
      this.myImageUrl = this.myImage["imageUrl"];
    }
    console.log(this.allImages);
    console.log(this.myImage);
  }



}

