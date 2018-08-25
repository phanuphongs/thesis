import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Student } from '../models/student.model';
import {Question} from '../models/question.model';

export enum ResultActionTypes {
  InitialResult = '[Result] Initial Result',
  LoadResults = '[Result] Load Results',
  AddResult = '[Result] Add Result',
  UpsertResult = '[Result] Upsert Result',
  AddResults = '[Result] Add Results',
  UpsertResults = '[Result] Upsert Results',
  UpdateResult = '[Result] Update Result',
  UpdateResults = '[Result] Update Results',
  DeleteResult = '[Result] Delete Result',
  DeleteResults = '[Result] Delete Results',
  ClearResults = '[Result] Clear Results',
  SelectResult = '[Question] Select Result',
}

export class InitialResult implements Action {
  readonly type = ResultActionTypes.InitialResult;

}

export class LoadResults implements Action {
  readonly type = ResultActionTypes.LoadResults;

}

export class AddResult implements Action {
  readonly type = ResultActionTypes.AddResult;

}

export class UpsertResult implements Action {
  readonly type = ResultActionTypes.UpsertResult;

  constructor(public payload: { student: Student }) {}
}

export class AddResults implements Action {
  readonly type = ResultActionTypes.AddResults;

  constructor(public payload: { students: Student[] }) {}
}

export class UpsertResults implements Action {
  readonly type = ResultActionTypes.UpsertResults;

  constructor(public payload: { students: Student[] }) {}
}

export class UpdateResult implements Action {
  readonly type = ResultActionTypes.UpdateResult;

  constructor(public payload: { student: Update<Student> }) {}
}

export class UpdateResults implements Action {
  readonly type = ResultActionTypes.UpdateResults;

  constructor(public payload: { students: Update<Student>[] }) {}
}

export class DeleteResult implements Action {
  readonly type = ResultActionTypes.DeleteResult;

  constructor(public payload: { id: number }) {}
}

export class DeleteResults implements Action {
  readonly type = ResultActionTypes.DeleteResults;

  constructor(public payload: { ids: number[] }) {}
}

export class ClearResults implements Action {
  readonly type = ResultActionTypes.ClearResults;
}

export class SelectResult implements Action {
  readonly type = ResultActionTypes.SelectResult;

  constructor(public payload: { id: number }) {}
}

export type ResultActions =
  | InitialResult
  | LoadResults
  | AddResult
  | UpsertResult
  | AddResults
  | UpsertResults
  | UpdateResult
  | UpdateResults
  | DeleteResult
  | DeleteResults
  | ClearResults
  | SelectResult;
