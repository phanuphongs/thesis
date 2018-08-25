import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Evaluate } from '../models/evaluate.model';
import { EvaluateActions, EvaluateActionTypes } from '../actions/evaluate.action';

export interface State extends EntityState<Evaluate> {
  // additional entities state properties
}

export const adapter: EntityAdapter<Evaluate> = createEntityAdapter<Evaluate>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
});

export function reducer(
  state = initialState,
  action: EvaluateActions,
): State {
  switch (action.type) {
    // case EvaluateActionTypes.AddEvaluate: {
    //   return adapter.addOne(action.payload.evaluate, state);
    // }
    //
    // case EvaluateActionTypes.UpsertEvaluate: {
    //   return adapter.upsertOne(action.payload.evaluate, state);
    // }
    //
    // case EvaluateActionTypes.AddEvaluates: {
    //   return adapter.addMany(action.payload.evaluates, state);
    // }
    //
    // case EvaluateActionTypes.UpsertEvaluates: {
    //   return adapter.upsertMany(action.payload.evaluates, state);
    // }
    //
    // case EvaluateActionTypes.UpdateEvaluate: {
    //   return adapter.updateOne(action.payload.evaluate, state);
    // }
    //
    // case EvaluateActionTypes.UpdateEvaluates: {
    //   return adapter.updateMany(action.payload.evaluates, state);
    // }
    //
    // case EvaluateActionTypes.DeleteEvaluate: {
    //   return adapter.removeOne(action.payload.id, state);
    // }
    //
    // case EvaluateActionTypes.DeleteEvaluates: {
    //   return adapter.removeMany(action.payload.ids, state);
    // }
    //
    // case EvaluateActionTypes.LoadEvaluates: {
    //   return adapter.addAll(action.payload.evaluates, state);
    // }

    case EvaluateActionTypes.LoadModelSuccess: {
      return adapter.addAll(action.payload, state);
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
