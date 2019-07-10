import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    RegisterComponent,
    RegisterinputComponent,
    StartBackgroundComponent,
    MembersContainer,
    FridgeComponent,
    ProductsComponent,
    MainComponent,
    VideoComponent,
    ColorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
