import { Component, OnInit } from '@angular/core';
import { ImageService } from 'src/app/services/image.service';
import { Image } from 'src/app/interfaces/Models/image';

@Component({
  selector: 'app-parents-canvas',
  templateUrl: './parents-canvas.component.html',
  styleUrls: ['./parents-canvas.component.scss']
})
export class ParentsCanvasComponent implements OnInit {

  images: Image[];
  imagesUrls: any;
  topImgSrc: string;
  middleImgSrc: string;
  bottomImgSrc: string;

  constructor(private imageService: ImageService) { }

  ngOnInit() {
    this.getImages();
    this.assignImages();
  }

  getImages() {
    this.imageService.getItems().subscribe(items => this.images = items);
    this.imagesUrls = this.images.map(item => item["imageUrl"]);
    console.log(this.images)
    console.log(this.imagesUrls)
  }

  assignImages() {
    this.topImgSrc = this.imagesUrls[0];
    this.middleImgSrc = this.imagesUrls[1];
    this.bottomImgSrc = this.imagesUrls[2];
  }

}
