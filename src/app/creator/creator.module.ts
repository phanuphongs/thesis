import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { FlowPageComponent } from './containers/flow-page/flow-page.component';

const routes = [
  { path: '', component: FlowPageComponent },
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    FlowPageComponent,
  ],
})
export class CreatorModule { }
