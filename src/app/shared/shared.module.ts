import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './modules/material';
import { FlexLayoutModule, BREAKPOINT }  from '@angular/flex-layout';
import { FileDropModule } from 'ngx-file-drop';
import { NotFoundPageComponent } from './containers/not-found-page.component';
import {StudentFormComponent} from './components/student-form/student-form.component';
import {QuestionFormComponent} from './components/question-form/question-form.component';
import {QuestionFormPageComponent} from './containers/question-form-page/question-form-page.component';
import {StudentFormPageComponent} from './containers/student-form-page/student-form-page.component';
import {FormContainerComponent} from './components/form-container/form-container.component';
import {FileUploadComponent, UploadDialog} from './components/file-upload/file-upload.component';

const PRINT_BREAKPOINTS = [{
  alias: 'xs.print',
  suffix: 'XsPrint',
  mediaQuery: 'print and (max-width: 297px)',
  overlapping: false,
}];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule,
    FileDropModule,
  ],
  exports: [
    //modules
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule,
    FileDropModule,

    //components
    NotFoundPageComponent,
    QuestionFormComponent,
    StudentFormComponent,
    QuestionFormPageComponent,
    StudentFormPageComponent,
    FormContainerComponent,
    FileUploadComponent,
    UploadDialog,
  ],
  entryComponents: [
    UploadDialog,
  ],
  declarations: [
    NotFoundPageComponent,
    QuestionFormComponent,
    StudentFormComponent,
    QuestionFormPageComponent,
    StudentFormPageComponent,
    FormContainerComponent,
    FileUploadComponent,
    UploadDialog,
  ],
  providers: [{provide: BREAKPOINT, useValue: PRINT_BREAKPOINTS, multi: true}],
})
export class SharedModule { }
