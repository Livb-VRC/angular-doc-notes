import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserInputComponent } from './user-input/user-input.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'userInput', component:UserInputComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  static myRoutes: Routes = routes;
 }
