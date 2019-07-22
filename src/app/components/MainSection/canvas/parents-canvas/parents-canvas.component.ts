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

  isDraging: boolean;

  startPozX: number;
  currentPozX: number;
  currentPozXAbs: number;
  transition: boolean;
  carouselCounter: number = 1;

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


  //events functions

  drag(event: TouchEvent) {
    this.isDraging = true;
    this.transition = false;
    this.startPozX = event.touches[0].clientX;
  }

  noDrag() {
    this.isDraging = false;
    this.transition = true;
    if (this.currentPozXAbs < 400) {
      this.currentPozX = 0;
      this.currentPozXAbs = this.currentPozX;
    } else {
      // let a = this.imagesUrls.splice(0, 1);
      // this.imagesUrls.push(a[0]);
      // this.assignImages();
      this.currentPozX = 0;
      this.currentPozXAbs = this.currentPozX;
      if (this.carouselCounter < 3) {
        this.carouselCounter += 1;
      } else {
        this.carouselCounter = 1;
      }
    }
    console.log(this.carouselCounter)
  }

  dragImage(event: TouchEvent) {
    this.currentPozX = event.touches[0].clientX - this.startPozX;
    this.currentPozXAbs = Math.abs(this.currentPozX)
    if (this.currentPozXAbs > 410) {
      this.currentPozXAbs = 410;
    }
  }


  //styles for animation

  topImgDragStyle() {
    let styles = {
      "left": this.currentPozX + "px",
    }
    return styles;
  }
  
  middleImgDragStyle() {
    let styles = {
      "background-color": `rgb(${235 + (this.currentPozXAbs / 21)}, ${235 + (this.currentPozXAbs / 21)}, ${235 + (this.currentPozXAbs / 21)})`,
      "width": `${390 + (this.currentPozXAbs / 14)}px`,
      "height": `${360 + (this.currentPozXAbs / 21)}px`,
      "top": `${40 - (this.currentPozXAbs / 10)}px`,
      "left": `${15 - (this.currentPozXAbs / 28)}px`
    }
    return styles;
  }
  
  bottomImgDragStyle() {
    let styles = { 
      "background-color": `rgb(${210 + (this.currentPozXAbs / 21)}, ${210 + (this.currentPozXAbs / 21)}, ${210 + (this.currentPozXAbs / 21)})`,
      "width": `${360 + (this.currentPozXAbs / 14)}px`,
      "height": `${340 + (this.currentPozXAbs / 21)}px`,
      "top": `${80 - (this.currentPozXAbs / 10)}px`,
      "left": `${30 - (this.currentPozXAbs / 28)}px`
    }
    return styles;
  }

  top() {
    if (this.carouselCounter === 1) {
      return this.topImgDragStyle()
    } else if (this.carouselCounter === 2) {
      return this.bottomImgDragStyle()
    } else {
      return this.middleImgDragStyle()
    }
  }

  middle() {
    if (this.carouselCounter === 1) {
      return this.middleImgDragStyle()
    } else if (this.carouselCounter === 2) {
      return this.topImgDragStyle()
    } else {
      return this.bottomImgDragStyle()
    }
  }

  bottom() {
    if (this.carouselCounter === 1) {
      return this.bottomImgDragStyle()
    } else if (this.carouselCounter === 2) {
      return this.middleImgDragStyle()
    } else {
      return this.topImgDragStyle()
    }
  }

  //classes to change

  classes1() {
    return {
    'transition': this.transition,
    'img-top': this.carouselCounter === 1,
    'img-middle': this.carouselCounter === 3,
    'img-bottom': this.carouselCounter === 2
    }
  }

  classes2() {
    return {
    'transition': this.transition,
    'img-top': this.carouselCounter === 2,
    'img-middle': this.carouselCounter === 1,
    'img-bottom': this.carouselCounter === 3
    }
  }

  classes3() {
    return {
    'transition': this.transition,
    'img-top': this.carouselCounter === 3,
    'img-middle': this.carouselCounter === 2,
    'img-bottom': this.carouselCounter === 1
    }
  }

  // classes1 = {
  //   'transition': this.transition,
  //   'img-top': this.carouselCounter === 1,
  //   'img-middle': this.carouselCounter === 3,
  //   'img-bottom': this.carouselCounter === 2
  // }

  // classes2 = {
  //   'transition': this.transition,
  //   'img-top': this.carouselCounter === 2,
  //   'img-middle': this.carouselCounter === 1,
  //   'img-bottom': this.carouselCounter === 3
  // }

  // classes3 = {
  //   'transition': this.transition,
  //   'img-top': this.carouselCounter === 3,
  //   'img-middle': this.carouselCounter === 2,
  //   'img-bottom': this.carouselCounter === 1
  // } 

}
