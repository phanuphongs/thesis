import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import * as fromQuestion from './question.reducer';
import * as fromStudent from './student.reducer';
import * as fromEvaluate from './evaluate.reducer';
import * as fromResult from './result.reducer';

export interface State {
  question: fromQuestion.State;
  student: fromStudent.State;
  evaluate: fromEvaluate.State;
  result: fromResult.State;
}

export const reducers: ActionReducerMap<State> = {
  question: fromQuestion.reducer,
  student: fromStudent.reducer,
  evaluate: fromEvaluate.reducer,
  result: fromResult.reducer,
};


export const getEvaluateState = createFeatureSelector<State>('evaluate');

export const studentEntitiesState = createSelector(
  getEvaluateState,
  state => state.student,
);

export const selectAllStudents = createSelector(
  studentEntitiesState,
  fromStudent.selectAll,
);

export const selectedStudent = createSelector(
  studentEntitiesState,
  fromStudent.getSelected,
);

export const questionEntitiesState = createSelector(
  getEvaluateState,
  state => state.question,
);

export const selectAllQuestions = createSelector(
  questionEntitiesState,
  fromQuestion.selectAll,
);

export const selectedQuestion = createSelector(
  questionEntitiesState,
  fromQuestion.getSelected,
);

export const evaluateEntitiesState = createSelector(
  getEvaluateState,
  state => state.evaluate,
);

export const selectAllModels = createSelector(
  evaluateEntitiesState,
  fromEvaluate.selectAll,
);

export const resultEntitiesState = createSelector(
  getEvaluateState,
  state => state.result,
);

export const selectAllResults = createSelector(
  resultEntitiesState,
  fromResult.selectAll,
);

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
