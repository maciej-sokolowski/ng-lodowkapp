import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {StartComponent} from './components/StartSection/start/start.component';
import {RegisterComponent} from './components/RegisterSection/register/register.component';
import {FridgeComponent} from './components/FridgeSection/fridge/fridge.component';


const routes: Routes = [
  {path: '', redirectTo: 'start', pathMatch: 'full'},
  {path: 'start', component: StartComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'fridge', component: FridgeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
