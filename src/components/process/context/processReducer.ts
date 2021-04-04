import produce from 'immer';
import { createEmptyStep } from '../details/utils';
import {
  ProcessAction,
  SET_PROCESS_PLACES,
  SET_CURRENT_PLACE,
  SET_CURRENT_PLACE_SELECT_OPTIONS,
  SET_CURRENT_PROCESS_DEFINITION,
  SET_CURRENT_PROCESS_DEFINITION_STEP,
  CREATE_NEW_PROCESS_DEFINITION,
  RESET_CURRENT_PROCESS_DEFINITION_STEP,
  SUBMIT_ACTION_FORM,
} from './processActions';
import { ProcessState } from './processContext';

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
    case SET_CURRENT_PLACE_SELECT_OPTIONS: {
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
        const selectedStep =
          draft.selectedProcessDefinition?.Branches[0].Steps[
            action.step
          ];
        if (selectedStep === undefined) return draft;

        draft.selectedProcessDefinitionItem = selectedStep;
      });
    }
    case CREATE_NEW_PROCESS_DEFINITION: {
      return produce(state, (draft) => {
        draft.selectedProcessDefinition?.Branches[0].Steps.push(
          createEmptyStep(),
        );
      });
    }
    case SUBMIT_ACTION_FORM: {
      return produce(state, (draft) => {
        const { index, value } = action;
        const steps =
          draft.selectedProcessDefinition?.Branches[0].Steps;
        if (steps === undefined) return draft;
        steps[index] = value;
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
