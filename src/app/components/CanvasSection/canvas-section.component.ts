import {Component, OnInit, ViewChild, ElementRef, AfterViewInit} from '@angular/core';
import {ImageService} from 'src/app/services/image.service';
import {Image} from 'src/app/interfaces/Models/image';
import {UserService} from 'src/app/services/user.service';
import {filter} from 'rxjs/operators';
import {User} from 'src/app/interfaces/Models/user';

@Component({
  selector: 'app-canvas-section',
  templateUrl: './canvas-section.component.html',
  styleUrls: ['./canvas-section.component.scss']
})
export class CanvasSectionComponent implements OnInit, AfterViewInit {

  @ViewChild('myCanvas', {static: false}) myCanvas: ElementRef;
  public ctx: CanvasRenderingContext2D;

  drawing: boolean;
  isRubber: boolean;

  users: User[];
  loggedUser: User;
  userId: string;

  allImages: Image[];
  myImage: Image;
  canvasUrl: string;

  isEmpty: boolean;

  constructor(private imageService: ImageService, private usersService: UserService) {
  }

  ngAfterViewInit(): void {
    this.ctx = (<HTMLCanvasElement> this.myCanvas.nativeElement).getContext('2d');
    this.drawPreviousPicture();
  }


  ngOnInit() {
    this.userVerification();
    this.previousImageVerification();
  }

  userVerification() {
    this.usersService.getItems().subscribe(items => this.users = items);
    this.loggedUser = this.users.find(item => item['isLogged'] === true);
    this.userId = this.loggedUser['id'];
  }

  previousImageVerification() {
    this.imageService.getItems().subscribe(items => this.allImages = items);
    this.myImage = this.allImages.find(item => item.userId === this.userId);
    if (this.myImage) {
      this.canvasUrl = this.myImage['imageUrl'];
    }
  }

  drawPreviousPicture() {
    if (this.canvasUrl) {
      let img = new Image;
      img.src = this.canvasUrl;
      this.ctx.drawImage(img, 0, 0);
    }
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
      return;
    }
    if (this.isRubber) {
      this.ctx.globalCompositeOperation = 'destination-out';
      this.ctx.lineWidth = 120;
    } else {
      this.ctx.globalCompositeOperation = 'source-over';
      this.ctx.lineWidth = 10;
    }

    let posX = event.touches[0].clientX - 120;
    let posY = event.touches[0].clientY - 120;

    this.ctx.lineCap = 'round';
    this.ctx.strokeStyle = '#5F7891';

    this.ctx.lineTo(posX, posY);
    this.ctx.stroke();
    this.ctx.beginPath();
    this.ctx.moveTo(posX, posY);
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

  isCanvasEmpty(item) {
    let context = item.getContext('2d');
    let buffer = new Uint32Array(
      context.getImageData(0, 0, item.width, item.height).data.buffer
    );
    return this.isEmpty = !buffer.some(color => color !== 0);
  }

  saveCanvas() {
    this.imageService.deleteItem({userId: this.userId, imageUrl: this.canvasUrl});
    let canvas = <HTMLCanvasElement> document.getElementById('myCanvas');
    this.isCanvasEmpty(canvas);
    this.canvasUrl = canvas.toDataURL();
    this.imageService.insertItem({userId: this.userId, imageUrl: this.canvasUrl, isEmpty: this.isEmpty});
  }

}
