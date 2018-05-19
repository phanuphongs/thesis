import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Student } from '../models/student.model';
import { StudentActions, StudentActionTypes } from '../actions/student.actions';
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
  action: StudentActions,
): State {
  switch (action.type) {
    case StudentActionTypes.InitialStudent: {
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

    case StudentActionTypes.AddStudent: {
      const entities = adapter.getSelectors().selectAll(state);
      const student: Student = {
        id:  entities[entities.length - 1].id + 1,
        studentId: '',
        answers: {},
      };
      return adapter.addOne(student, state);
    }

    case StudentActionTypes.UpsertStudent: {
      return adapter.upsertOne(action.payload.student, state);
    }

    case StudentActionTypes.AddStudents: {
      return adapter.addMany(action.payload.students, state);
    }

    case StudentActionTypes.UpsertStudents: {
      return adapter.upsertMany(action.payload.students, state);
    }

    case StudentActionTypes.UpdateStudent: {
      return adapter.updateOne(action.payload.student, state);
    }

    case StudentActionTypes.UpdateStudents: {
      return adapter.updateMany(action.payload.students, state);
    }

    case StudentActionTypes.DeleteStudent: {
      return adapter.removeOne(action.payload.id, state);
    }

    case StudentActionTypes.DeleteStudents: {
      return adapter.removeMany(action.payload.ids, state);
    }

    case StudentActionTypes.LoadStudents: {
      return state;
    }

    case StudentActionTypes.ClearStudents: {
      return adapter.removeAll(state);
    }

    case StudentActionTypes.SelectStudent: {
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
