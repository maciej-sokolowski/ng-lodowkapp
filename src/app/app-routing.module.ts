<<<<<<< HEAD
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartComponent } from './components/StartSection/start/start.component';
import { RegisterComponent } from './components/RegisterSection/register/register.component';
import { FridgeComponent } from './components/FridgeSection/fridge/fridge.component';
import { YoutubeComponent } from './components/MainSection/youtube-widget/youtube-content/youtube.component';
import { MainComponent } from './components/MainSection/main/main.component'


const routes: Routes = [
  { path: '', redirectTo: 'start', pathMatch: 'full' },
  { path: 'start', component: StartComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'fridge', component: FridgeComponent },
  { path: 'youtube', component: YoutubeComponent },
  { path: 'main', component: MainComponent },

=======
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {StartComponent} from './components/StartSection/start/start.component';
import {RegisterComponent} from './components/RegisterSection/register/register.component';
import {FridgeComponent} from './components/FridgeSection/fridge/fridge.component';
import {MainComponent} from './components/MainSection/main/main.component';


const routes: Routes = [
  {path: '', redirectTo: 'start', pathMatch: 'full'},
  {path: 'start', component: StartComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'main', component: MainComponent},
  {path: 'fridge', component: FridgeComponent},
>>>>>>> 16b9fcdadea18861853dfa2444964f929cab4282
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
