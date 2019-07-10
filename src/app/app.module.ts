import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartComponent } from './components/StartSection/start/start.component';
import { RegisterComponent } from './components/RegisterSection/register/register.component';
import { RegisterinputComponent } from './components/RegisterSection/registerinput/registerinput.component';
import { StartBackgroundComponent } from './components/StartSection/start-background/start-background.component';
import { FridgeComponent } from './components/FridgeSection/fridge/fridge.component';
import { ProductsComponent } from './components/FridgeSection/products/products.component';
import { MainComponent } from './components/MainSection/main/main.component';
import { VideoComponent } from './components/FridgeSection/video/video.component';
import { ColorComponent } from './components/RegisterSection/color/color.component';

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    RegisterComponent,
    RegisterinputComponent,
    StartBackgroundComponent,
    FridgeComponent,
    ProductsComponent,
    MainComponent,
    VideoComponent,
    ColorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
