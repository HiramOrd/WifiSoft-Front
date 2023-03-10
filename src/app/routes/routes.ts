import { Routes } from '@angular/router';
import { LayoutComponent } from 'src/app/layouts/layout.component';
import { AboutComponent } from 'src/app/pages/about/about.component';
import { HomeComponent } from 'src/app/pages/home/home.component';
import { AuthenticationGuard } from '../_guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      {
        path: 'about',
        component: AboutComponent,
        canActivate: [AuthenticationGuard],
      },
    ],
  },

  // Not found
  { path: '**', redirectTo: 'home' },
];
