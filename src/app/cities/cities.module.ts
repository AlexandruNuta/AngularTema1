import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CitiesRoutingModule } from './cities-routing.module';
import { CitiesComponent } from './cities.component';


@NgModule({
  declarations: [
    CitiesComponent,
  ],
  imports: [
    CommonModule,
    CitiesRoutingModule,
    FormsModule
  ]
})
export class CitiesModule { }
