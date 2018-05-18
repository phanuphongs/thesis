import { Action } from '@ngrx/store';

export enum StudentActionTypes {
  LoadStudents = '[Student] Load Students'
}

export class Student implements Action {
  readonly type = StudentActionTypes.LoadStudents;
}

export type StudentActions = LoadStudents;
