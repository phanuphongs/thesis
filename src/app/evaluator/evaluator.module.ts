import { NgModule } from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import { FlowPageComponent } from './containers/flow-page/flow-page.component';
import {RouterModule} from '@angular/router';
import { ModelPageComponent } from './containers/model-page/model-page.component';
import { ModelCardComponent } from './components/model-card/model-card.component';
import { StoreModule } from '@ngrx/store';
import * as fromReducers from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { StudentEffects } from './effects/student.effects';
import { ResultPageComponent } from './containers/result-page/result-page.component';
import { ResultCardComponent } from './components/result-card/result-card.component';
import { ResultDetailComponent } from './components/result-detail/result-detail.component';


const routes = [
  { path: '', component: FlowPageComponent },
];


@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
  ],
  exports: [

  ],
  declarations: [

    FlowPageComponent,

    ModelPageComponent,

    ModelCardComponent,

    ResultPageComponent,

    ResultCardComponent,

    ResultDetailComponent,
  ],
})
export class EvaluatorModule { }

@NgModule({
  imports: [
    StoreModule.forFeature(
      'evaluate',
      fromReducers.reducers,
      { metaReducers: fromReducers.metaReducers },
    ),
    EffectsModule.forFeature([StudentEffects]),
  ],
})
export class EvaluatorRootModule {}
