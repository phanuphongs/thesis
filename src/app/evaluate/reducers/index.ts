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

export interface State {
  question: fromQuestion.State;
  student: fromStudent.State;
}

export const reducers: ActionReducerMap<State> = {
  question: fromQuestion.reducer,
  student: fromStudent.reducer,
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



export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
