// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
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
import {MembersContainerComponent} from './components/StartSection/members-container/members-container.component';
import {RegisterinputComponent} from './components/RegisterSection/registerinput/registerinput.component';

import {WidgetsListComponent} from './components/MainSection/widgets-list/widgets-list.component';
import {DotComponent} from './components/FridgeSection/dot/dot.component';
import {ProductCloudComponent} from './components/FridgeSection/product-cloud/product-cloud.component';
import {UsertypeComponent} from './components/RegisterSection/usertype/usertype.component';
import {YoutubePlayerComponent} from './components/YoutubeSection/youtube-player/youtube-player.component';
import {SecureDomPipe} from './components/YoutubeSection/youtube-player/secure-dom.pipe';
import {YoutubeComponent} from './components/MainSection/youtube/youtube.component';
import {CanvasComponent} from './components/MainSection/canvas/canvas.component';
import {CanvasSectionComponent} from './components/CanvasSection/canvas-section.component';
import {EditComponent} from './components/FridgeSection/edit/edit.component';
import {InfoComponent} from './components/FridgeSection/info/info.component';
import {DaysToTodayPipe} from './components/FridgeSection/info/days-to-today.pipe';
import { NotesComponent } from './components/MainSection/notes-popup/notes.component';
import { ListHeaderComponent } from './components/MainSection/list-header/list-header.component';
import { NotesListComponent } from './components/NotesSection/notes-list/notes-list.component';
import { ParentsCanvasComponent } from './components/MainSection/canvas/parents-canvas/parents-canvas.component';
import { ListItemComponent } from './components/FridgeSection/list-item/list-item.component';
import { ContextmenuComponent } from './components/RegisterSection/contextmenu/contextmenu.component';
import { ProductsWidgetComponent } from './components/MainSection/products-widget/products-widget.component';


const fridgeConnectionConfig: SocketIoConfig = { url: 'http://10.254.0.40:3000/', options: {} };

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    RegisterComponent,
    RegisterinputComponent,
    StartComponent,
    MembersContainerComponent,
    FridgeComponent,
    ProductsComponent,
    MainComponent,
    CameraComponent,
    ColorComponent,
    AvatarComponent,
    WeatherComponent,
    TopBarComponent,
    RegistersummComponent,
    WidgetsListComponent,
    DotComponent,
    ProductCloudComponent,
    UsertypeComponent,
    YoutubePlayerComponent,
    SecureDomPipe,
    YoutubeComponent,
    CanvasComponent,
    CanvasSectionComponent,
    NotesComponent,
    ListHeaderComponent,
    NotesListComponent,
    EditComponent,
    InfoComponent,
    DaysToTodayPipe,
    ParentsCanvasComponent,
    ListItemComponent,
    ContextmenuComponent,
    ProductsWidgetComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    SocketIoModule.forRoot(fridgeConnectionConfig),
    ReactiveFormsModule,
  ],
  providers: [WeatherService],

  bootstrap: [AppComponent]
})
export class AppModule {
}
