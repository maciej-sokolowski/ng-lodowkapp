import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartComponent } from './components/start/start.component';
import { StartBackgroundComponent } from './components/start-background/start-background.component';
import { RegisterComponent } from './components/register/register.component';
import { RegisterinputComponent } from './components/registerinput/registerinput.component';
import { MembersContainer } from './components/members-container/members-container.component';
import { FridgeComponent } from './components/fridge/fridge.component';
import { ProductsComponent } from './components/products/products.component';
import { MainComponent } from './components/main/main.component';
import { VideoComponent } from './components/video/video.component';
import { ColorComponent } from './components/color/color.component';
import { AvatarComponent } from './components/avatar/avatar.component';
import { RegistersummComponent } from './components/registersumm/registersumm.component';

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    RegisterComponent,
    RegisterinputComponent,
    StartBackgroundComponent,
    StartComponent,
    MembersContainer,
    FridgeComponent,
    ProductsComponent,
    MainComponent,
    VideoComponent,
    ColorComponent,
    AvatarComponent,
    RegistersummComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
