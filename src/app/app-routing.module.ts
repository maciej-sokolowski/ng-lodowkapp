import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartComponent } from './components/StartSection/start/start.component';
import { RegisterComponent } from './components/RegisterSection/register/register.component';
import { FridgeComponent } from './components/FridgeSection/fridge/fridge.component';
import { MainComponent } from './components/MainSection/main/main.component';
import { YoutubePlayerComponent } from './components/YoutubeSection/youtube-player/youtube-player.component';
import { CanvasSectionComponent } from './components/CanvasSection/canvas-section.component';
import { NotesListComponent } from './components/NotesSection/notes-list/notes-list.component';
import { AuthGuard } from './guards/auth.guard'
import { ActivitiesListComponent } from './components/ActivitiesSection/activities-list/activities-list.component';
import { ParentAuthGuard } from './guards/parent-auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'start', pathMatch: 'full' },
  // { path: '**', component: StartComponent },
  { path: 'start', component: StartComponent },
  { path: 'register', component: RegisterComponent, canActivate: [ParentAuthGuard] },
  { path: 'main', component: MainComponent, canActivate: [AuthGuard] },
  { path: 'fridge', component: FridgeComponent, canActivate: [AuthGuard] },
  { path: 'youtube', component: YoutubePlayerComponent, canActivate: [AuthGuard] },
  { path: 'canvas', component: CanvasSectionComponent, canActivate: [AuthGuard] },
  { path: 'notes', component: NotesListComponent, canActivate: [AuthGuard] },
  { path: 'activities', component: ActivitiesListComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
