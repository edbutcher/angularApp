import { Routes } from '@angular/router';

import { AboutComponent } from '../about/about.component';


export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  // { path: 'products', component: AboutComponent },
  { path: 'about', component: AboutComponent }
];
