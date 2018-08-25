import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Student } from '../models/student.model';
import { ResultActions, ResultActionTypes } from '../actions/result.action';
import { EvaluateActions, EvaluateActionTypes } from '../actions/evaluate.action';
import { Question } from '../models/question.model';

export interface State extends EntityState<Student> {
  // additional entities state properties
  selected: number | null;
}

export const adapter: EntityAdapter<Student> = createEntityAdapter<Student>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
  selected: null,
});

export function reducer(
  state = initialState,
  action: ResultActions | EvaluateActions,
): State {
  switch (action.type) {
    case EvaluateActionTypes.PredictSuccess: {
      return adapter.addAll(action.payload, state);
    }

    case ResultActionTypes.InitialResult: {
      if (adapter.getSelectors().selectTotal(state)) {
        return state;
      }
      const student: Student = {
        id: 1,
        studentId: '',
        answers: {},
      };
      return {
        ...adapter.addOne(student, state),
        selected: 1,
      };
    }

    case ResultActionTypes.AddResult: {
      const entities = adapter.getSelectors().selectAll(state);
      const student: Student = {
        id:  entities[entities.length - 1].id + 1,
        studentId: '',
        answers: {},
      };
      return adapter.addOne(student, state);
    }

    case ResultActionTypes.UpsertResult: {
      return adapter.upsertOne(action.payload.student, state);
    }

    case ResultActionTypes.AddResults: {
      return adapter.addMany(action.payload.students, state);
    }

    case ResultActionTypes.UpsertResults: {
      return adapter.upsertMany(action.payload.students, state);
    }

    case ResultActionTypes.UpdateResult: {
      return adapter.updateOne(action.payload.student, state);
    }

    case ResultActionTypes.UpdateResults: {
      return adapter.updateMany(action.payload.students, state);
    }

    case ResultActionTypes.DeleteResult: {
      return adapter.removeOne(action.payload.id, state);
    }

    case ResultActionTypes.DeleteResults: {
      return adapter.removeMany(action.payload.ids, state);
    }

    case ResultActionTypes.LoadResults: {
      return state;
    }

    case ResultActionTypes.ClearResults: {
      return adapter.removeAll(state);
    }

    case ResultActionTypes.SelectResult: {
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
