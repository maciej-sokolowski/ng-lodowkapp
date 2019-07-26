import { Component, OnInit, HostBinding } from '@angular/core';
import { ProductService } from './services/product.service';
import { PushNotificationService } from './services/push-notification.service';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from './animations';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    slideInAnimation
  ]
})
export class AppComponent implements OnInit {

  constructor(private prService: ProductService, private notifyService: PushNotificationService) {
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

  ngOnInit(): void {
    this.notifyAboutExpired();
    setInterval(() => this.notifyAboutExpired(), 3600000);
  }

  notifyAboutExpired() {
    this.prService.getExpiredItems().subscribe(items => this.notifyService.notifyAboutExpiredProducts([items]));
  }


}
