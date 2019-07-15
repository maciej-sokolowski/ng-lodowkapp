// Modules
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {SocketIoModule, SocketIoConfig} from 'ngx-socket-io';
// Components
import {AppComponent} from './app.component';
import {StartComponent} from './components/StartSection/start/start.component';
import {RegisterComponent} from './components/RegisterSection/register/register.component';
import {FridgeComponent} from './components/FridgeSection/fridge/fridge.component';
import {ProductsComponent} from './components/FridgeSection/products/products.component';
import {MainComponent} from './components/MainSection/main/main.component';
import {CameraComponent} from './components/FridgeSection/camera/camera.component';
import {ColorComponent} from './components/RegisterSection/color/color.component';
import {RegistersummComponent} from './components/RegisterSection/registersumm/registersumm.component';
import {AvatarComponent} from './components/avatar/avatar.component';
import {WeatherComponent} from './components/MainSection/weather/weather.component';
import {WeatherService} from './components/MainSection/weather/weather.service';
import {TopBarComponent} from './components/MainSection/top-bar/top-bar.component';
import {MembersContainer} from './components/StartSection/members-container/members-container.component';
import {RegisterinputComponent} from './components/RegisterSection/registerinput/registerinput.component';
import { DotComponent } from './components/FridgeSection/dot/dot.component';
import { ProductCloudComponent } from './components/FridgeSection/product-cloud/product-cloud.component';


const fridgeConnectionConfig: SocketIoConfig = {url: 'http://10.254.0.40:3000/', options: {}};

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
    CameraComponent,
    ColorComponent,
    AvatarComponent,
    WeatherComponent,
    TopBarComponent,
    RegistersummComponent,
    DotComponent,
    ProductCloudComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    SocketIoModule.forRoot(fridgeConnectionConfig)
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
