import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './modules/material';
import { FlexLayoutModule, BREAKPOINT }  from '@angular/flex-layout';
import { NotFoundPageComponent } from './containers/not-found-page.component';

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
  ],
  exports: [
    //modules
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule,

    //components
    NotFoundPageComponent,
  ],
  declarations: [
    NotFoundPageComponent,
  ],
  providers: [{provide: BREAKPOINT, useValue: PRINT_BREAKPOINTS, multi: true}],
})
export class SharedModule { }
