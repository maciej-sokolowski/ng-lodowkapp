import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartComponent } from './components/StartSection/start/start.component';
import { RegisterComponent } from './components/RegisterSection/register/register.component';
import { FridgeComponent } from './components/FridgeSection/fridge/fridge.component';
import { MainComponent } from './components/MainSection/main/main.component';
import { YoutubePlayerComponent } from './components/YoutubeSection/youtube-player/youtube-player.component';
import { CanvasSectionComponent } from './components/CanvasSection/canvas-section.component';
import { NotesListComponent } from './components/NotesSection/notes-list/notes-list.component';
import { ActivitiesListComponent } from './components/ActivitiesSection/activities-list/activities-list.component';





const routes: Routes = [
  { path: '', redirectTo: 'start', pathMatch: 'full', data: { animation: 'HomePage' } },
  { path: 'start', component: StartComponent, data: { animation: 'HomePage' } },
  { path: 'register', component: RegisterComponent, data: { animation: 'AboutPage' } },
  { path: 'main', component: MainComponent, data: { animation: 'AboutPage' } },
  { path: 'fridge', component: FridgeComponent, data: { animation: 'FilterPage' } },
  { path: 'youtube', component: YoutubePlayerComponent, data: { animation: 'FilterPage' } },
  { path: 'canvas', component: CanvasSectionComponent, data: { animation: 'FilterPage' } },
  { path: 'notes', component: NotesListComponent, data: { animation: 'FilterPage' } },
  { path: 'activities', component: ActivitiesListComponent, data: { animation: 'FilterPage' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
