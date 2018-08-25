import {Component, OnDestroy, OnInit} from '@angular/core';
import * as fromEvaluate from '../../../evaluator/reducers';
import {select, Store} from '@ngrx/store';
import * as StudentActions from '../../../evaluator/actions/student.actions';
import * as QuestionActions from '../../../evaluator/actions/question.actions';
import * as EvaluateActions from '../../../evaluator/actions/evaluate.action';
import { Question } from '../../../evaluator/models/question.model';
import { Student } from '../../../evaluator/models/student.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-flow-page',
  templateUrl: './flow-page.component.html',
  styleUrls: ['./flow-page.component.scss'],
})
export class FlowPageComponent implements OnInit, OnDestroy {
  name: string;
  questions: Question[];
  students: Student[];
  questions$: Subscription;
  students$: Subscription;
  files;

  constructor(private store: Store<fromEvaluate.State>) { }

  ngOnInit() {
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

  create() {
    this.store.dispatch(new EvaluateActions.Train({
      title: this.name,
      questions: this.questions,
      students: this.students,
      questionFile: this.files.questionFile,
      studentFile: this.files.studentFile,
    }));
  }

  reset() {
    this.store.dispatch(new StudentActions.ClearStudents());
    this.store.dispatch(new QuestionActions.ClearQuestions());
  }

  selectFile(files) {
    if (files) {
      this.files = files;
    }

  }

}
