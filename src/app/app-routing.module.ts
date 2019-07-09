import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {StartComponent} from './components/start/start.component';
import {RegisterComponent} from './components/register/register.component';

const routes: Routes = [
  {path: '', redirectTo: 'start', pathMatch: 'full'},
  {path: 'start', component: StartComponent},
  {path: 'register', component: RegisterComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
