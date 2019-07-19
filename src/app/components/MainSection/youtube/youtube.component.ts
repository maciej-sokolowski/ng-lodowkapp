import { Component, OnInit } from '@angular/core';
import { YoutubeWidgetService } from './youtube-widget.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';



@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.scss']
})
export class YoutubeComponent implements OnInit {

  videos: any[];
  thumbnail: string;
  dataFromApi: boolean;

  channelId = 'UCJFp8uSYCjXOMnkUyb3CQ3Q';
  maxResult = 1;

  private subscribe: Subject<any> = new Subject();
  constructor(private youTubeService: YoutubeWidgetService) { }

  ngOnInit() {
    this.getThumbnail();
    this.updateThumbnail();
  }

  getThumbnail() {
    this.videos = [];

    this.youTubeService
      .getThumbnail(this.channelId, this.maxResult)
      .pipe(takeUntil(this.subscribe))
      .subscribe(lista => {
        this.thumbnail = lista['items'][0].snippet.thumbnails.medium.url;
        this.dataFromApi = true;
      })
  }

  updateThumbnail() {
    setInterval(() => {
      this.getThumbnail();
    }, 60000)
  }



}
