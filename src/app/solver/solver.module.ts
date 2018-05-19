import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { SolverComponent } from './containers/solver/solver.component';

const routes = [
  { path: '', component: SolverComponent },
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    SolverComponent,
  ],
})
export class SolverModule { }
