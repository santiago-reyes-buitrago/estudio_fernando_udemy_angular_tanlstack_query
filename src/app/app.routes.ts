import { Routes } from '@angular/router';

export const routes: Routes = [
  {path: 'issues', loadComponent: () => import('./modules/issues/pages/issues-list-page/issues-list-page')},
  {path: 'issues/:id', loadComponent: () => import('./modules/issues/pages/issues/issues')},
  {path: '**', redirectTo: 'issues'},
];
