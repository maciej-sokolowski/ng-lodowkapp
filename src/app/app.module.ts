// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
// Components
import { AppComponent } from './app.component';
import { StartComponent } from './components/StartSection/start/start.component';
import { RegisterComponent } from './components/RegisterSection/register/register.component';
import { FridgeComponent } from './components/FridgeSection/fridge/fridge.component';
import { ProductsComponent } from './components/FridgeSection/products/products.component';
import { MainComponent } from './components/MainSection/main/main.component';
import { VideoComponent } from './components/FridgeSection/video/video.component';
import { ColorComponent } from './components/RegisterSection/color/color.component';
import { RegistersummComponent } from './components/RegisterSection/registersumm/registersumm.component';
import { AvatarComponent } from './components/avatar/avatar.component';
import { WeatherComponent } from './components/weather/weather.component';
import { WeatherService } from './components/weather/weather.service';
import { MembersContainer } from './components/StartSection/members-container/members-container.component';
import { RegisterinputComponent } from './components/RegisterSection/registerinput/registerinput.component';


@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    RegisterComponent,
    RegisterinputComponent,


    StartComponent,
    MembersContainer,
    FridgeComponent,
    ProductsComponent,
    MainComponent,
    VideoComponent,
    ColorComponent,
    AvatarComponent,
    WeatherComponent,
    RegistersummComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
