import { NgModule } from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import { FlowPageComponent } from './containers/flow-page/flow-page.component';
import {RouterModule} from '@angular/router';
import { QuestionFormComponent } from './components/question-form/question-form.component';
import { ModelPageComponent } from './containers/model-page/model-page.component';
import { QuestionFormPageComponent } from './containers/question-form-page/question-form-page.component';
import { ModelCardComponent } from './components/model-card/model-card.component';
import { FormContainerComponent } from './components/form-container/form-container.component';
import { StudentFormPageComponent } from './containers/student-form-page/student-form-page.component';
import { StudentFormComponent } from './components/student-form/student-form.component';


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

    QuestionFormPageComponent,

    ModelCardComponent,

    FormContainerComponent,

    StudentFormPageComponent,

    StudentFormComponent,
  ],
})
export class EvaluateModule { }
