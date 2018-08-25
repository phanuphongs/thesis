import { Injectable } from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import { EvaluateService } from '../../shared/services/evaluate.service';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import {
  TrainSuccess,
  EvaluateActionTypes,
  PredictSuccess,
  Fail,
  Train,
  Predict,
  SelectModel,
  LoadModelSuccess,
} from '../actions/evaluate.action';
import {catchError, map, mergeMap, switchMap} from 'rxjs/internal/operators';
import {Router} from '@angular/router';


@Injectable()
export class EvaluateEffects {

  constructor(
    private actions$: Actions,
    private evaluateService: EvaluateService,
    private rotuer: Router,
  ) {}

  @Effect()
  train$: Observable<Action> = this.actions$.pipe(
    ofType(EvaluateActionTypes.Train),
    map((action: Train) => action.payload),
    mergeMap(
      (data) => {
        const questions = data.questions.filter(
          (ele) => {
            return ele.key !== '';
          },
        );
        let students = data.students.filter(
          (student) => {
            return Object.keys(student.answers).length;
          },
        );
        students = students.map(
          (student) => {
            const temp = {};
            const newStudent = Object.assign({}, student);
            Object.keys(student.answers).forEach(
              (ele) => {
                temp[student.answers[ele].question.key] = student.answers[ele];
              },
            );
            newStudent.answers = temp;
            return newStudent;
          },
        );
        return this.evaluateService.uploadDatasetFile(
          data.title,
          questions,
          students,
          data.questionFile,
          data.studentFile,
        ).pipe(
          map(() => {
            this.rotuer.navigate(['/evaluate']);
            return new TrainSuccess();
          }),
          catchError(error => of(new Fail(error))),
        );
      },
    ),
  );

  @Effect()
  predict$: Observable<Action> = this.actions$.pipe(
    ofType(EvaluateActionTypes.Predict),
    map((action: Predict) => action.payload),
    mergeMap(
      (data) => {
        const questions = data.questions.filter(
          (ele) => {
            return ele.key !== '';
          },
        );
        let students = data.students.filter(
          (student) => {
            return Object.keys(student).length;
          },
        );
        students = students.map(
          (student) => {
            const temp = {};
            const newStudent = Object.assign({}, student);
            Object.keys(student.answers).forEach(
              (ele) => {
                temp[student.answers[ele].question.key] = student.answers[ele];
              },
            );
            newStudent.answers = temp;
            return newStudent;
          },
        );
        return this.evaluateService.uploadTestFile(
          data.model,
          questions,
          students,
          data.questionFile,
          data.studentFile,
        ).pipe(
          map((data) => new PredictSuccess(data)),
          catchError(error => of(new Fail(error))),
        );
      },
    ),
  );

  @Effect()
  loadModel$: Observable<Action> = this.actions$.pipe(
    ofType(EvaluateActionTypes.LoadModel),
    switchMap(
      () => {
        return this.evaluateService.loadModel().pipe(
          map(data => new LoadModelSuccess(data)),
          catchError(err => of(new Fail(err))),
        );
      },
    ),
  );

  @Effect()
  selectModel$: Observable<Action> = this.actions$.pipe(
    ofType(EvaluateActionTypes.SelectModel),
    map((action: SelectModel) => action.payload),
    switchMap(
      (id) => {
        return this.evaluateService.selectModel(id).pipe(
          map(data => new PredictSuccess(data)),
          catchError(err => of(new Fail(err))),
        );
      },
    ),
  );
}
