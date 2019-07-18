import { Component, OnInit } from '@angular/core';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss']
})
export class CanvasComponent implements OnInit {

  myImage: any;
  images: any;
  userType: string = "CHILDREN";  //może dostanie z dashboardu
  userId: string;   //dostanie z dasboardu
  myImageUrl: string;


  isChild: boolean;    //ustala się po otrzymaniu userType

  constructor(private imageService: ImageService) { }

  ngOnInit() {
    if (this.userType === "CHILDREN") {
      this.isChild = true;
    } else {
      this.isChild = false;
    }

    if (this.isChild) {
      this.myImage = this.imageService.getItemsByUserId(this.userId);
      this.myImageUrl = this.myImage["imageUrl"];
    }
  }



}

