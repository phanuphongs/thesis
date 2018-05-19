import { Routes } from '@angular/router';
import { NotFoundPageComponent } from '../shared/containers/not-found-page.component';

export const routes: Routes = [
  { path: '', redirectTo: '/evaluate', pathMatch: 'full' },
  {
    path: 'evaluate',
    loadChildren: '../evaluator/evaluator.module#EvaluatorModule',
  },
  {
    path: 'create',
    loadChildren: '../creator/creator.module#CreatorModule',
  },
  {
    path: 'solve',
    loadChildren: '../solver/solver.module#SolverModule',
  },
  { path: '**', component: NotFoundPageComponent },
];
