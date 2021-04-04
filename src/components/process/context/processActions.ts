import {
  ProcessPlacesResoponse,
  ProcessPlaceSingle,
  ProcessActionSingle,
  ProcessDefinictionResponse,
} from 'types';

export const SET_PROCESS_PLACES = 'SET_PROCESS_PLACES';
export const SET_CURRENT_PLACE = 'SET_CURRENT_PLACE';
export const SET_CURRENT_ACTIONS = 'SET_CURRENT_ACTIONS';
export const RESET_CURRENT_PROCESS_DEFINITION_STEP =
  'RESET_CURRENT_PROCESS_DEFINITION_STEP';
export const SET_CURRENT_PROCESS_DEFINITION =
  'SET_CURRENT_PROCESS_DEFINITION';
export const SET_CURRENT_PROCESS_DEFINITION_STEP =
  'SET_CURRENT_PROCESS_DEFINITION_STEP';
export const CREATE_NEW_STEP = 'CREATE_NEW_STEP';

export type ProcessSetProcessPlacesAction = {
  type: typeof SET_PROCESS_PLACES;
  places: ProcessPlacesResoponse;
};

export type ProcessSetCurrentPlaceAction = {
  type: typeof SET_CURRENT_PLACE;
  place: ProcessPlaceSingle;
};

export type ProcessSetCurrentPlaceActionsAction = {
  type: typeof SET_CURRENT_ACTIONS;
  actions: ProcessActionSingle;
};

export type ProcessSetCurrentProcessDefinitionAction = {
  type: typeof SET_CURRENT_PROCESS_DEFINITION;
  process: ProcessDefinictionResponse;
};

export type ProcessCreateNewStepAction = {
  type: typeof CREATE_NEW_STEP;
};

export type ProcessResetCurrentProcessDefinitionStepAction = {
  type: typeof RESET_CURRENT_PROCESS_DEFINITION_STEP;
};

export type ProcessSetCurrentProcessDefinitionStepAction = {
  type: typeof SET_CURRENT_PROCESS_DEFINITION_STEP;
  step: number;
};

export type ProcessAction =
  | ProcessSetProcessPlacesAction
  | ProcessSetCurrentPlaceAction
  | ProcessSetCurrentPlaceActionsAction
  | ProcessSetCurrentProcessDefinitionAction
  | ProcessSetCurrentProcessDefinitionStepAction
  | ProcessResetCurrentProcessDefinitionStepAction
  | ProcessCreateNewStepAction;

export type ProcessDispatch = (action: ProcessAction) => void;

export const setProcessPlaces = (
  places: ProcessPlacesResoponse,
): ProcessSetProcessPlacesAction => ({
  type: SET_PROCESS_PLACES,
  places,
});

export const setCurrentPlace = (
  place: ProcessPlaceSingle,
): ProcessSetCurrentPlaceAction => ({
  type: SET_CURRENT_PLACE,
  place,
});

export const setCurrentActions = (
  actions: ProcessActionSingle,
): ProcessSetCurrentPlaceActionsAction => ({
  type: SET_CURRENT_ACTIONS,
  actions,
});

export const setCurrentProcessDefinition = (
  process: ProcessDefinictionResponse,
): ProcessSetCurrentProcessDefinitionAction => ({
  type: SET_CURRENT_PROCESS_DEFINITION,
  process,
});

export const createNewStep = (): ProcessCreateNewStepAction => ({
  type: CREATE_NEW_STEP,
});

export const resetCurrentProcessDefinitionStep = (): ProcessResetCurrentProcessDefinitionStepAction => ({
  type: RESET_CURRENT_PROCESS_DEFINITION_STEP,
});

export const setCurrentProcessDefinitionStep = (
  step: number,
): ProcessSetCurrentProcessDefinitionStepAction => ({
  type: SET_CURRENT_PROCESS_DEFINITION_STEP,
  step,
});
