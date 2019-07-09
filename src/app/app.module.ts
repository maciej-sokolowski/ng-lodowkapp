import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartComponent } from './components/start/start.component';
import { RegisterComponent } from './components/register/register.component';
import { ColorComponentComponent } from './components/color-component/color-component.component';

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    RegisterComponent,
    ColorComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
