import produce from 'immer';
import {
  ProcessAction,
  SET_PROCESS_PLACES,
  SET_CURRENT_PLACE,
  SET_CURRENT_ACTIONS,
  SET_CURRENT_PROCESS_DEFINITION,
  SET_CURRENT_PROCESS_DEFINITION_STEP,
  CREATE_NEW_STEP,
  RESET_CURRENT_PROCESS_DEFINITION_STEP,
} from './processActions';
import { ProcessState } from './processContext';
import { createEmptyStep } from './utils';

export const processReducer = (
  state: ProcessState,
  action: ProcessAction,
): ProcessState => {
  switch (action.type) {
    case SET_PROCESS_PLACES: {
      return produce(state, (draft) => {
        draft.places = action.places;
      });
    }
    case SET_CURRENT_PLACE: {
      return produce(state, (draft) => {
        draft.selectedPlace = action.place;
        draft.selectedProcessDefinitionStep = null;
      });
    }
    case SET_CURRENT_ACTIONS: {
      return produce(state, (draft) => {
        draft.selectedActions = action.actions;
      });
    }
    case SET_CURRENT_PROCESS_DEFINITION: {
      return produce(state, (draft) => {
        draft.selectedProcessDefinition = action.process;
        if (action.process.Branches === null) {
          draft.selectedProcessDefinition.Branches = [{ Steps: [] }];
        }
      });
    }
    case RESET_CURRENT_PROCESS_DEFINITION_STEP: {
      return produce(state, (draft) => {
        draft.selectedProcessDefinitionStep = null;
      });
    }
    case SET_CURRENT_PROCESS_DEFINITION_STEP: {
      return produce(state, (draft) => {
        draft.selectedProcessDefinitionStep = action.step;
      });
    }
    case CREATE_NEW_STEP: {
      return produce(state, (draft) => {
        draft.selectedProcessDefinition?.Branches[0].Steps.push(
          createEmptyStep(),
        );
      });
    }
    default: {
      throw new Error(
        `Unhandled action type: ${JSON.stringify(
          action,
        )}, state: ${JSON.stringify(action)}`,
      );
    }
  }
};
