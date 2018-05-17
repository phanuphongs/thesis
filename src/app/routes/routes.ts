import { Routes } from '@angular/router';
import { NotFoundPageComponent } from '../shared/containers/not-found-page.component';

export const routes: Routes = [
  { path: '', redirectTo: '/evaluate', pathMatch: 'full' },
  {
    path: 'evaluate',
    loadChildren: './evaluate/evaluate.module#EvaluateModule',
  },
  { path: '**', component: NotFoundPageComponent },
];
