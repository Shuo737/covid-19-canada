import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './core/components/home/home.component';
import { ProductsSolutionsComponent } from './core/components/products_solutions/products-solutions.component';
import { HOME, SOLUTIONS_PRODUCTS, CLIENTS_PARTNERS, ABOUT } from './urls';
import { ClientsPartnersComponent } from './core/components/clients-partners/clients-partners.component';
import { AboutComponent } from './core/components/about/about.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', component: HomeComponent},
  {path: `${SOLUTIONS_PRODUCTS}`, pathMatch: 'full', component: ProductsSolutionsComponent},
  {path: `${CLIENTS_PARTNERS}`, pathMatch: 'full', component: ClientsPartnersComponent},
  {path: `${ABOUT}`, pathMatch: 'full', component: AboutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
