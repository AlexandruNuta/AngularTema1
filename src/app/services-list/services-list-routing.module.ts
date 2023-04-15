import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicesListComponent } from './services-list.component';
import { CitiesComponent } from '../cities/cities.component';
const routes: Routes = [
  { path: 'services-list', component: ServicesListComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesListRoutingModule { }
