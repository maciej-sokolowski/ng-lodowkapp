import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartComponent } from './components/start/start.component';
import { RegisterComponent } from './components/register/register.component';
import { RegisterinputComponent } from './components/registerinput/registerinput.component';
import { MembersContainer } from './components/members-container/members-container.component';
import { FridgeComponent } from './components/fridge/fridge.component';
import { ProductsComponent } from './components/products/products.component';
import { MainComponent } from './components/main/main.component';
import { VideoComponent } from './components/video/video.component';
import { ColorComponent } from './components/color/color.component';
import { AvatarComponent } from './components/avatar/avatar.component';
import { WeatherComponent } from './components/weather/weather.component';
import { WeatherService } from './components/weather/weather.service';

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    RegisterComponent,
    RegisterinputComponent,
    MembersContainer,
    FridgeComponent,
    ProductsComponent,
    MainComponent,
    VideoComponent,
    ColorComponent,
    AvatarComponent,
    WeatherComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
