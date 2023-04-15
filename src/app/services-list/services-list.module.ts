import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ServicesListRoutingModule } from './services-list-routing.module';
import { ServicesListComponent } from './services-list.component';
import { CitiesComponent } from '../cities/cities.component';

@NgModule({
  declarations: [
    ServicesListComponent,
  ],
  imports: [
    CommonModule,
    ServicesListRoutingModule,
    FormsModule
  ]
})
export class ServicesListModule { }
