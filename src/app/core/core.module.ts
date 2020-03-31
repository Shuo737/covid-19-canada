import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { NavComponent } from './components/nav/nav.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { HomeModule } from './components/home/home.module';
import { ProductsSolutionsModule } from './components/products_solutions/products-solutions.module';
import { ClientsPartnersModule } from './components/clients-partners/clients-partners.module';
import { AboutModule } from './components/about/about.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { IndividualTableModule } from './components/individual-table/individual-table.module';


@NgModule({
  declarations: [NavigationBarComponent, NavComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatSidenavModule,
    RouterModule,
    IndividualTableModule,
    HomeModule,
    ProductsSolutionsModule,
    ClientsPartnersModule,
    AboutModule,
  ],
  exports: [NavigationBarComponent, NavComponent]
})
export class CoreModule {}
