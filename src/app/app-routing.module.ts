import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './Components/navbar/navbar.component';

const routes: Routes = [
  {
    path: '',
    component: NavbarComponent,
    children: [
      // {
      //   path: '',
      //   pathMatch: 'full',
      //   redirectTo: 'home',
      // },
      {
        path: '',
        loadChildren: () =>
          import('./Components/home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'privacy-policy',
        loadChildren: () =>
          import('./Components/privacy-policy/privacy-policy.module').then(
            (m) => m.PrivacyPolicyModule
          ),
      },
      {
        path: 'not-found',
        loadChildren: () =>
          import('./Components/not-found/not-found.module').then(
            (m) => m.NotFoundModule
          ),
      },
      { path: '**', redirectTo: 'not-found' },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
