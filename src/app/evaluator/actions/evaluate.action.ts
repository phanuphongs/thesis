import { Action } from '@ngrx/store';
import {Question} from '../models/question.model';
import {Student} from '../models/student.model';
import {Evaluate} from '../models/evaluate.model';

export enum EvaluateActionTypes {
  Train = '[Train] Train Model Evaluate',
  Predict = '[Predict] Predict Model Evaluate',
  TrainSuccess = '[TrainSuccess] Train Success Evaluate',
  PredictSuccess = '[PredictSuccess] Predict Success Evaluate',
  Fail = '[Fail] Fail Evaluate',
  LoadModel = '[LoadModel] Load ModelEvaluate',
  LoadModelSuccess = '[LoadModelSuccess] Load Success Model Evaluate',
  SelectModel = '[Select] Select Model',
  SelectModelSuccess = '[SelectSuccess] Select Success Model',
};

export class Train implements Action {
  readonly type = EvaluateActionTypes.Train;

  constructor(public payload: {
    title: string,
    questions: Question[],
    students: Student[],
    questionFile: any,
    studentFile: any,
  }) {}
}

export class Predict implements Action {
  readonly type = EvaluateActionTypes.Predict;

  constructor(public payload: {
    model: number,
    questions: Question[],
    students: Student[],
    questionFile: File,
    studentFile: File,
  }) {}
}

export class TrainSuccess implements Action {
  readonly type = EvaluateActionTypes.TrainSuccess;

}

export class PredictSuccess implements Action {
  readonly type = EvaluateActionTypes.PredictSuccess;

  constructor(public payload: any) {}

}

export class Fail implements Action {
  readonly type = EvaluateActionTypes.Fail;

  constructor(public payload: any) {}
}

export class LoadModel implements Action {
  readonly type = EvaluateActionTypes.LoadModel;
}

export class LoadModelSuccess implements Action {
  readonly type = EvaluateActionTypes.LoadModelSuccess;

  constructor(public payload: Evaluate[]) {}
}

export class SelectModel implements Action {
  readonly type = EvaluateActionTypes.SelectModel;

  constructor(public payload: any) {}
}

export class SelectModelSuccess implements Action {
  readonly type = EvaluateActionTypes.SelectModelSuccess;

  constructor(public payload: any) {}
}


export type EvaluateActions =
  | Train
  | Predict
  | TrainSuccess
  | PredictSuccess
  | LoadModel
  | LoadModelSuccess
  | Fail
  | SelectModel
  | SelectModelSuccess;
