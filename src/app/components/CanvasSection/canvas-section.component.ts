import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ImageService } from 'src/app/services/image.service';
import { Image } from 'src/app/interfaces/Models/image';
import { UserService } from 'src/app/services/user.service';
import { filter } from 'rxjs/operators';
import { User } from 'src/app/interfaces/Models/user';

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

  users: User[];
  loggedUser: User;
  userId: string;

  imageId: string;
  myImage: Image[];
  canvasUrl: string;


  constructor(private imageService: ImageService, private usersService: UserService) { }

  ngAfterViewInit(): void {
    this.ctx = (<HTMLCanvasElement>this.myCanvas.nativeElement).getContext('2d');   //tego nie usuwać!!

    if (this.canvasUrl) {
      let img = new Image;
      img.src = this.canvasUrl;
      this.ctx.drawImage(img, 0, 0)
    }
  }


  ngOnInit() {
    this.usersService.getItems().subscribe(item => this.users = item);
    this.loggedUser = this.users.find(item => item.isLogged === true);
    this.userId = this.loggedUser["id"];
    

    this.imageService.getItemsByUserId(this.userId).subscribe(image => this.myImage = image);
    this.imageId = this.userId;
  }

  mouseDown(event: TouchEvent) {
    this.drawing = true;
    this.draw(event);
    console.log("touch down")
  }

  mouseUp(event: TouchEvent) {
    this.drawing = false;
    this.ctx.beginPath();
    console.log("touch up")
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
    console.log("pencil mode")
  }

  rubberMode() {
    this.isRubber = true;
    console.log("rubber mode")
  }

  clearCanvas() {
    this.ctx.clearRect(0, 0, 840, 800);
    console.log("clear")
  }


  saveCanvas() {
    let canvas = <HTMLCanvasElement>document.getElementById("myCanvas");
    this.canvasUrl = canvas.toDataURL();

    // this.imageService.updateItem({id: this.imageId, userId: this.userId, imageUrl: this.canvasUrl }); 
    this.imageService.insertItem({id: this.imageId, userId: this.userId, imageUrl: this.canvasUrl }); 
    console.log("save")
    console.log(this.canvasUrl)
  }

}
