import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Question } from '../models/question.model';
import { QuestionActions, QuestionActionTypes } from '../actions/question.actions';

export interface State extends EntityState<Question> {
  // additional entities state properties
  selected: number | null;
}

export const adapter: EntityAdapter<Question> = createEntityAdapter<Question>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
  selected: null,
});

export function reducer(
  state = initialState,
  action: QuestionActions,
): State {
  switch (action.type) {
    case QuestionActionTypes.InitialQuestion: {
      if (adapter.getSelectors().selectTotal(state)) {
        return state;
      }
      const question: Question = {
        id: 1,
        key: '',
        question: '',
        score: 5,
        variables: '',
      };
      return {
        ...adapter.addOne(question, state),
        selected: 1,
      };
    }

    case QuestionActionTypes.AddQuestion: {
      const entities = adapter.getSelectors().selectAll(state);
      const question: Question = {
        id: entities[entities.length - 1].id + 1,
        key: '',
        question: '',
        score: 5,
        variables: '',
      };
      return adapter.addOne(question, state);
    }

    case QuestionActionTypes.UpsertQuestion: {
      return adapter.upsertOne(action.payload.question, state);
    }

    case QuestionActionTypes.AddQuestions: {
      return adapter.addMany(action.payload.questions, state);
    }

    case QuestionActionTypes.UpsertQuestions: {
      return adapter.upsertMany(action.payload.questions, state);
    }

    case QuestionActionTypes.UpdateQuestion: {
      return adapter.updateOne(action.payload.question, state);
    }

    case QuestionActionTypes.UpdateQuestions: {
      return adapter.updateMany(action.payload.questions, state);
    }

    case QuestionActionTypes.DeleteQuestion: {
      return adapter.removeOne(action.payload.id, state);
    }

    case QuestionActionTypes.DeleteQuestions: {
      return adapter.removeMany(action.payload.ids, state);
    }

    case QuestionActionTypes.LoadQuestions: {
      return state;
    }

    case QuestionActionTypes.ClearQuestions: {
      return adapter.removeAll(state);
    }

    case QuestionActionTypes.SelectQuestion: {
      return {
        ...state,
        selected: action.payload.id,
      };
    }

    default: {
      return state;
    }
  }
}

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();

export const getSelected = (state: State) => state.selected;
