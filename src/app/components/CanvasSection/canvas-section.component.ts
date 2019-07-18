import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { posix } from 'path';
import { ImageService } from 'src/app/services/image.service';
import { Image } from 'src/app/interfaces/Models/image';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';

@Component({
  selector: 'app-canvas-section',
  templateUrl: './canvas-section.component.html',
  styleUrls: ['./canvas-section.component.scss']
})
export class CanvasSectionComponent implements OnInit {

  @ViewChild('myCanvas', { static: false }) myCanvas: ElementRef;
  public ctx: CanvasRenderingContext2D;

  drawing: boolean;
  isRubber: boolean;

  // gettedImage: any;  jeszcze nie wiem co dostaję
  // imageId: string;
  userID: "111";   //przekazany od rodzica
  canvasURL: string;
  listobrazow: any;


  constructor(private imageService: ImageService) { }

  ngAfterViewInit(): void {
    this.ctx = (<HTMLCanvasElement>this.myCanvas.nativeElement).getContext('2d');   //tego nie usuwać!!

    let img = new Image;
    img.src = this.canvasURL;
    this.ctx.drawImage(img, 0, 0)
  }

  ngOnInit() {
    // this.imageService.getItemsByUserId(this.userID).subscribe(image => this.gettedImage = image);
    this.imageService.getItems().subscribe(image => this.listobrazow = image);
    console.log(this.listobrazow)
    if (this.listobrazow.length === 0) {return}
    console.log(this.listobrazow[0]["userId"])
    this.canvasURL = this.listobrazow[0]["imageUrl"];
  }

  mouseDown(event: TouchEvent) {
    this.drawing = true;
    this.draw(event);
  }

  mouseUp(event: TouchEvent) {
    this.drawing = false;
    this.ctx.beginPath();
  }

  draw(event: TouchEvent) {
    if (!this.drawing) {
      return
    }
    if (this.isRubber) {
      this.ctx.globalCompositeOperation = "destination-out";
      this.ctx.lineWidth = 120;
    } else {
      this.ctx.globalCompositeOperation = "source-over";
      this.ctx.lineWidth = 10;
    }

    let posX = event.touches[0].clientX - 120;
    let posY = event.touches[0].clientY - 120;

    this.ctx.lineCap = "round";
    this.ctx.strokeStyle = "#5F7891";

    this.ctx.lineTo(posX, posY);
    this.ctx.stroke();
    this.ctx.beginPath();
    this.ctx.moveTo(posX, posY);

    console.log("drawing")
  }

  pencilMode() {
    this.isRubber = false;
  }

  rubberMode() {
    this.isRubber = true;
  }

  clearCanvas() {
    this.ctx.clearRect(0, 0, 840, 800);
  }

  saveCanvas() {
    let canvas = <HTMLCanvasElement>document.getElementById("myCanvas");
    this.canvasURL = canvas.toDataURL();

    this.imageService.insertItem({ userId: this.userID, imageUrl: this.canvasURL }); 
    // this.imageService.updateItem({ userId: this.userID, imageUrl: this.canvasURL }); 
    console.log("zapisuję")
  }

}
