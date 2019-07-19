import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../youtube-player/youtube.service';

@Component({
  selector: 'app-youtube-player',
  templateUrl: './youtube-player.component.html',
  styleUrls: ['./youtube-player.component.scss']
})
export class YoutubePlayerComponent implements OnInit {

  videos = [];
  videoSelected: any;
  initialVideoId = '?listType=playlist&list=UUJFp8uSYCjXOMnkUyb3CQ3Q';

  constructor(private youtubeService: YoutubeService) {

    this.youtubeService.getVideos()
      .subscribe(videos => {
        this.videos = videos
      })
  }

  ngOnInit() {
  }

  getVideoId() {
    return this.videoSelected ? this.videoSelected.resourceId.videoId : this.initialVideoId;
  }

  loadMore() {
    this.youtubeService.getVideos()
      .subscribe(videos => this.videos.push.apply(this.videos, videos));
  }

  watchVideo(video: any) {
    this.videoSelected = video;
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
}
