import {Component, OnDestroy, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {select, Store} from '@ngrx/store';
import { MatStepper } from '@angular/material';

import * as fromEvaluate from '../../reducers';
import * as StudentActions from '../../actions/student.actions';
import * as QuestionActions from '../../actions/question.actions';
import {Subscription} from 'rxjs';
import {Question} from '../../models/question.model';
import {Student} from '../../models/student.model';
import * as EvaluateActions from '../../actions/evaluate.action';

@Component({
  selector: 'app-flow-page',
  templateUrl: './flow-page.component.html',
  styleUrls: ['./flow-page.component.scss'],
})
export class FlowPageComponent implements OnInit, OnDestroy {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  questions: Question[];
  students: Student[];
  questions$: Subscription;
  students$: Subscription;
  files;

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
    this.store.dispatch(
      new QuestionActions.ClearQuestions(),
    );
    this.store.dispatch(
      new StudentActions.ClearStudents(),
    );
    this.students$ = this.store.pipe(select(fromEvaluate.selectAllStudents)).subscribe(
      (data) => {
        this.students = data;
      },
    );
    this.questions$ = this.store.pipe(select(fromEvaluate.selectAllQuestions)).subscribe(
      (data) => {
        this.questions = data;
      },
    );
    this.files = {
      questionFile: null,
      studentFile: null,
    };
  }

  ngOnDestroy(): void {
    this.students$.unsubscribe();
    this.questions$.unsubscribe();
  }

  selectModel(id: number, stepper: MatStepper): void {
    this.firstFormGroup.controls['model'].setValue(id);
    stepper.next();
  }

  selectFile(files) {
    if (files) {
      this.files = files;
    }
  }

  import() {
    this.store.dispatch(new EvaluateActions.Predict({
      model: this.firstFormGroup.value.model,
      questions: this.questions,
      students: this.students,
      questionFile: this.files.questionFile,
      studentFile: this.files.studentFile,
    }));
  }

}
