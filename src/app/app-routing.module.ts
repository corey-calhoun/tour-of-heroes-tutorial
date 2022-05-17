import { NgModule } from '@angular/core';
import { HeroesComponent } from "./heroes/heroes.component";
import { RouterModule, Routes } from "@angular/router";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {HeroDetailComponent} from "./hero-detail/hero-detail.component";


// Route Configuration - defines the routes for the application
const routes: Routes = [
  { path: 'heroes', component: HeroesComponent },
  {path: 'detail/:id', component: HeroDetailComponent},
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
