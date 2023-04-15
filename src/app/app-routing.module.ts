import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServicesListComponent } from './services-list/services-list.component';
import { CitiesComponent } from './cities/cities.component';
import { ServicesListModule } from './services-list/services-list.module';
const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'services-list',
    loadChildren: () => import('./services-list/services-list.module').then(m => m.ServicesListModule)
  },
  {
    path: 'cities',
    loadChildren: () => import('./cities/cities.module').then(m => m.CitiesModule)
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),ServicesListModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
