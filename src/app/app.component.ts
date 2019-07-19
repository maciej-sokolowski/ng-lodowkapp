import {Component, OnInit} from '@angular/core';
import {ProductService} from './services/product.service';
import {PushNotificationService} from './services/push-notification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private prService: ProductService, private notifyService: PushNotificationService) {
  }

  ngOnInit(): void {
    this.notifyAboutExpired();
    setInterval(() => this.notifyAboutExpired(), 3600000);
  }

  notifyAboutExpired() {
    this.prService.getExpiredItems().subscribe(items => this.notifyService.notifyAboutExpiredProducts([items]));
  }


}
