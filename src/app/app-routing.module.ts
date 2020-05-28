import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './Components/navbar/navbar.component';

const routes: Routes = [
  {
    path: '',
    component: NavbarComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./Components/home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'page-not-found',
        pathMatch: 'full',
        loadChildren: () =>
          import('./Components/not-found/not-found.module').then(
            (m) => m.NotFoundModule
          ),
      },
      { path: '**', redirectTo: 'page-not-found' },
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
