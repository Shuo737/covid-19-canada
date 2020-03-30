import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { ProductsSolutionsComponent } from './products-solutions.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { NgImageSliderModule } from 'ng-image-slider';


@NgModule({
  declarations: [ProductsSolutionsComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    RouterModule,
    NgImageSliderModule
  ],
  exports: [ProductsSolutionsComponent]
})
export class ProductsSolutionsModule {}
