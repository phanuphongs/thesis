import { NgModule } from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import { FlowPageComponent } from './containers/flow-page/flow-page.component';
import {RouterModule} from '@angular/router';
import { QuestionFormComponent } from './components/question-form/question-form.component';
import { ModelPageComponent } from './containers/model-page/model-page.component';
import { ModelListComponent } from './components/model-list/model-list.component';


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

    QuestionFormComponent,

    ModelPageComponent,

    ModelListComponent,
  ],
})
export class EvaluateModule { }
