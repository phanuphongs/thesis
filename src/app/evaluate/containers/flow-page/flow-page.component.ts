import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { MatStepper } from '@angular/material';

import * as fromEvaluate from '../../reducers';
import * as StudentActions from '../../actions/student.actions';

@Component({
  selector: 'app-flow-page',
  templateUrl: './flow-page.component.html',
  styleUrls: ['./flow-page.component.scss'],
})
export class FlowPageComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private store: Store<fromEvaluate.State>,
  ) {}

  ngOnInit() {
    this.firstFormGroup = this.formBuilder.group({
      model: ['', Validators.required],
    });
    this.secondFormGroup = this.formBuilder.group({
      secondCtrl: ['', Validators.required],
    });
  }

  selectModel(id: number, stepper: MatStepper): void {
    this.firstFormGroup.controls['model'].setValue(id);
    stepper.next();
  }

}
