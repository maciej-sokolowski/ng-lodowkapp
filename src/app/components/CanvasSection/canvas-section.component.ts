import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { posix } from 'path';

@Component({
  selector: 'app-canvas-section',
  templateUrl: './canvas-section.component.html',
  styleUrls: ['./canvas-section.component.scss']
})
export class CanvasSectionComponent implements OnInit {

  @ViewChild('myCanvas', {static: false}) myCanvas: ElementRef;
  public ctx: CanvasRenderingContext2D;

  drawing: boolean;
  isRubber: boolean;
  
  constructor() { }

  ngAfterViewInit(): void {
    this.ctx = (<HTMLCanvasElement>this.myCanvas.nativeElement).getContext('2d');
  }
  
  ngOnInit() {
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
      this.ctx.globalCompositeOperation="destination-out";
      this.ctx.lineWidth = 120;
    } else {
      this.ctx.globalCompositeOperation="source-over";
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
  
}
