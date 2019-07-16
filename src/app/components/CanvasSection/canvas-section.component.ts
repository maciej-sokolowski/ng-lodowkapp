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

    let posX = event.touches[0].clientX;
    let posY = event.touches[0].clientY;

    this.ctx.lineWidth = 10;
    this.ctx.lineCap = "round";
    this.ctx.lineTo(posX, posY);
    this.ctx.stroke();
    this.ctx.beginPath();
    this.ctx.moveTo(posX, posY);

    console.log("drawing")
  }
  
}
