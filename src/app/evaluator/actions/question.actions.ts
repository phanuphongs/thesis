import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Question } from '../models/question.model';

export enum QuestionActionTypes {
  InitialQuestion = '[Question] Initial Question',
  LoadQuestions = '[Question] Load Questions',
  AddQuestion = '[Question] Add Question',
  UpsertQuestion = '[Question] Upsert Question',
  AddQuestions = '[Question] Add Questions',
  UpsertQuestions = '[Question] Upsert Questions',
  UpdateQuestion = '[Question] Update Question',
  UpdateQuestions = '[Question] Update Questions',
  DeleteQuestion = '[Question] Delete Question',
  DeleteQuestions = '[Question] Delete Questions',
  ClearQuestions = '[Question] Clear Questions',
  SelectQuestion = '[Question] Select Question',
}

export class InitialQuestion implements Action {
  readonly type = QuestionActionTypes.InitialQuestion;

}

export class LoadQuestions implements Action {
  readonly type = QuestionActionTypes.LoadQuestions;

}

export class AddQuestion implements Action {
  readonly type = QuestionActionTypes.AddQuestion;

}

export class UpsertQuestion implements Action {
  readonly type = QuestionActionTypes.UpsertQuestion;

  constructor(public payload: { question: Question }) {}
}

export class AddQuestions implements Action {
  readonly type = QuestionActionTypes.AddQuestions;

  constructor(public payload: { questions: Question[] }) {}
}

export class UpsertQuestions implements Action {
  readonly type = QuestionActionTypes.UpsertQuestions;

  constructor(public payload: { questions: Question[] }) {}
}

export class UpdateQuestion implements Action {
  readonly type = QuestionActionTypes.UpdateQuestion;

  constructor(public payload: { question: Update<Question> }) {}
}

export class UpdateQuestions implements Action {
  readonly type = QuestionActionTypes.UpdateQuestions;

  constructor(public payload: { questions: Update<Question>[] }) {}
}

export class DeleteQuestion implements Action {
  readonly type = QuestionActionTypes.DeleteQuestion;

  constructor(public payload: { id: number }) {}
}

export class DeleteQuestions implements Action {
  readonly type = QuestionActionTypes.DeleteQuestions;

  constructor(public payload: { ids: string[] }) {}
}

export class ClearQuestions implements Action {
  readonly type = QuestionActionTypes.ClearQuestions;
}

export class SelectQuestion implements Action {
  readonly type = QuestionActionTypes.SelectQuestion;

  constructor(public payload: { id: number }) {}
}

export type QuestionActions =
  | InitialQuestion
  | LoadQuestions
  | AddQuestion
  | UpsertQuestion
  | AddQuestions
  | UpsertQuestions
  | UpdateQuestion
  | UpdateQuestions
  | DeleteQuestion
  | DeleteQuestions
  | ClearQuestions
  | SelectQuestion;
