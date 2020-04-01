import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { MatCardModule } from '@angular/material/card';
import { Covid19DataStoreService } from './convid-19-data.store.service';
import { HttpClientModule } from '@angular/common/http';
import { CdkTableModule } from '@angular/cdk/table';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { IndividualTableModule } from '../individual-table/individual-table.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BarChartComponent } from './bar-chart.component';
import { AreaChartComponent } from './new-area-chart.component';


@NgModule({
  declarations: [HomeComponent, BarChartComponent, AreaChartComponent],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    CdkTableModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    NgxChartsModule,
    RouterModule,
    IndividualTableModule,
    HttpClientModule,
  ],
  providers: [Covid19DataStoreService, BarChartComponent, AreaChartComponent],
  exports: [HomeComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class HomeModule {}
