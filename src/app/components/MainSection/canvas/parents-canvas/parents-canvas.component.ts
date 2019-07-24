import {Component, OnInit} from '@angular/core';
import {ImageService} from 'src/app/services/image.service';
import {Image} from 'src/app/interfaces/Models/image';

@Component({
  selector: 'app-parents-canvas',
  templateUrl: './parents-canvas.component.html',
  styleUrls: ['./parents-canvas.component.scss']
})
export class ParentsCanvasComponent implements OnInit {

  isEmpty: boolean;

  images: Image[];
  imagesUrls: string[];
  imgSrc1: string;
  imgSrc2: string;
  imgSrc3: string;

  isDraging = false;

  startPozX = 0;
  currentPozX = 0;
  currentPozXAbs = 0;
  transition = false;
  carouselCounter = 1;

  constructor(private imageService: ImageService) {
  }

  ngOnInit() {
    this.getImages();
    this.assignImages();
  }

  getImages() {
    this.imageService.getItems().subscribe(items => this.images = items);
    this.imagesUrls = this.images.filter(item => item['isEmpty'] === false).map(item => item['imageUrl']);
    if (this.imagesUrls.length === 0) {
      this.isEmpty = true;
    } else {
      this.isEmpty = false;
    }
  }

  assignImages() {
    if (this.carouselCounter === 1) {
      this.imgSrc1 = this.imagesUrls[0];
      this.imgSrc2 = this.imagesUrls[1];
      this.imgSrc3 = this.imagesUrls[2];
    } else if (this.carouselCounter === 2) {
      this.imgSrc1 = this.imagesUrls[2];
      this.imgSrc2 = this.imagesUrls[0];
      this.imgSrc3 = this.imagesUrls[1];
    } else {
      this.imgSrc1 = this.imagesUrls[1];
      this.imgSrc2 = this.imagesUrls[2];
      this.imgSrc3 = this.imagesUrls[0];
    }
  }

  //events functions

  drag(event: TouchEvent) {
    this.isDraging = true;
    this.transition = false;
    this.startPozX = event.touches[0].clientX;
  }

  carouselIncrement(cards) {
    if (this.carouselCounter < cards) {
      this.carouselCounter += 1;
    } else {
      this.carouselCounter = 1;
    }
  }

  noDrag() {
    this.isDraging = false;
    this.transition = true;

    if (this.currentPozXAbs < 420) {
      this.currentPozX = 0;
      this.currentPozXAbs = this.currentPozX;
    } else {
      this.currentPozX = 0;
      this.currentPozXAbs = this.currentPozX;

      if (this.imagesUrls.length > 2) {
        this.carouselIncrement(3);
        setTimeout(() => {
          let a = this.imagesUrls.splice(0, 1);
          this.imagesUrls.push(a[0]);
          this.assignImages();
        }, 400);
      } else {
        this.carouselIncrement(2);
      }
    }
  }

  dragImage(event: TouchEvent) {
    if (this.imagesUrls.length > 1) {
      this.currentPozX = event.touches[0].clientX - this.startPozX;
      this.currentPozXAbs = Math.abs(this.currentPozX);
      if (this.currentPozXAbs > 420) {
        this.currentPozXAbs = 420;
      }
    }
  }

  //styles for animation

  topImgDragStyle() {
    let styles = {
      'left': this.currentPozX + 'px',
      'transform': `skewY(${-this.currentPozX / 60}deg)`
    };
    return styles;
  }

  middleImgDragStyle() {
    let styles = {
      'background-color': `rgb(${235 + (this.currentPozXAbs / 21)}, ${235 + (this.currentPozXAbs / 21)}, ${235 + (this.currentPozXAbs / 21)})`,
      'width': `${390 + (this.currentPozXAbs / 14)}px`,
      'height': `${360 + (this.currentPozXAbs / 21)}px`,
      'top': `${40 - (this.currentPozXAbs / 10)}px`,
      'left': `${15 - (this.currentPozXAbs / 28)}px`
    };
    return styles;
  }

  bottomImgDragStyle() {
    let styles = {
      'background-color': `rgb(${210 + (this.currentPozXAbs / 21)}, ${210 + (this.currentPozXAbs / 21)}, ${210 + (this.currentPozXAbs / 21)})`,
      'width': `${360 + (this.currentPozXAbs / 14)}px`,
      'height': `${340 + (this.currentPozXAbs / 21)}px`,
      'top': `${80 - (this.currentPozXAbs / 10)}px`,
      'left': `${30 - (this.currentPozXAbs / 28)}px`
    };
    return styles;
  }

  //assign styles for animation

  top() {
    if (this.carouselCounter === 1) {
      return this.topImgDragStyle();
    } else if (this.carouselCounter === 2 && this.imagesUrls.length > 2) {
      return this.bottomImgDragStyle();
    } else {
      return this.middleImgDragStyle();
    }
  }

  middle() {
    if (this.carouselCounter === 1) {
      return this.middleImgDragStyle();
    } else if (this.carouselCounter === 2) {
      return this.topImgDragStyle();
    } else {
      return this.bottomImgDragStyle();
    }
  }

  bottom() {
    if (this.carouselCounter === 1) {
      return this.bottomImgDragStyle();
    } else if (this.carouselCounter === 2) {
      return this.middleImgDragStyle();
    } else {
      return this.topImgDragStyle();
    }
  }

  //classes to change

  classes1() {
    return {
      'transition': this.transition,
      'img-top': this.carouselCounter === 1,
      'img-middle': this.carouselCounter === 2 && this.imagesUrls.length < 3 || this.carouselCounter === 3,
      'img-bottom': this.carouselCounter === 2 && this.imagesUrls.length > 2
    };
  }

  classes2() {
    return {
      'transition': this.transition,
      'img-top': this.carouselCounter === 2,
      'img-middle': this.carouselCounter === 1,
      'img-bottom': this.carouselCounter === 3
    };
  }

  classes3() {
    return {
      'transition': this.transition,
      'img-top': this.carouselCounter === 3,
      'img-middle': this.carouselCounter === 2,
      'img-bottom': this.carouselCounter === 1
    };
  }
}
