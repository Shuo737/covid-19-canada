import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './core/components/home/home.component';
import { INDIVIDUAL_DETAIL, ABOUT } from './urls';
import { AboutComponent } from './core/components/about/about.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', component: HomeComponent},
  {path: `${INDIVIDUAL_DETAIL}`, pathMatch: 'full', component: HomeComponent},
  {path: `${ABOUT}`, pathMatch: 'full', component: AboutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
