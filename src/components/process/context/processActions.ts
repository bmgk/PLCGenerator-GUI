import {
  ProcessPlacesResoponse,
  ProcessPlaceSingle,
  ProcessActionSelectOptions,
  ProcessDefinictionResponse,
  ProcessDefinictionStep,
} from 'types';

export const SET_PROCESS_PLACES = 'SET_PROCESS_PLACES';
export const SET_CURRENT_PLACE = 'SET_CURRENT_PLACE';
export const SET_CURRENT_PLACE_SELECT_OPTIONS =
  'SET_CURRENT_PLACE_SELECT_OPTIONS';
export const RESET_CURRENT_PROCESS_DEFINITION_STEP =
  'RESET_CURRENT_PROCESS_DEFINITION_STEP';
export const SET_CURRENT_PROCESS_DEFINITION =
  'SET_CURRENT_PROCESS_DEFINITION';
export const SET_CURRENT_PROCESS_DEFINITION_STEP =
  'SET_CURRENT_PROCESS_DEFINITION_STEP';
export const CREATE_NEW_PROCESS_DEFINITION = 'CREATE_NEW_STEP';
export const SUBMIT_ACTION_FORM = 'SUBMIT_ACTION_FORM';

export type ProcessSetProcessPlacesAction = {
  type: typeof SET_PROCESS_PLACES;
  places: ProcessPlacesResoponse;
};

export type ProcessSetCurrentPlaceAction = {
  type: typeof SET_CURRENT_PLACE;
  place: ProcessPlaceSingle;
};

export type ProcessSetCurrentPlaceSelectOptionsAction = {
  type: typeof SET_CURRENT_PLACE_SELECT_OPTIONS;
  actions: ProcessActionSelectOptions;
};

export type ProcessSetCurrentProcessDefinitionAction = {
  type: typeof SET_CURRENT_PROCESS_DEFINITION;
  process: ProcessDefinictionResponse;
};

export type ProcessResetCurrentProcessDefinitionStepAction = {
  type: typeof RESET_CURRENT_PROCESS_DEFINITION_STEP;
};

export type ProcessSetCurrentProcessDefinitionStepAction = {
  type: typeof SET_CURRENT_PROCESS_DEFINITION_STEP;
  step: number;
};

export type ProcessCreateNewSingleProcessDefinitionAction = {
  type: typeof CREATE_NEW_PROCESS_DEFINITION;
};

export type ProcessSubmitActionFormAction = {
  type: typeof SUBMIT_ACTION_FORM;
  index: number;
  value: ProcessDefinictionStep;
};

export type ProcessAction =
  | ProcessSetProcessPlacesAction
  | ProcessSetCurrentPlaceAction
  | ProcessSetCurrentPlaceSelectOptionsAction
  | ProcessSetCurrentProcessDefinitionAction
  | ProcessSetCurrentProcessDefinitionStepAction
  | ProcessResetCurrentProcessDefinitionStepAction
  | ProcessCreateNewSingleProcessDefinitionAction
  | ProcessSubmitActionFormAction;

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

export const setCurrentPlaceSelectOptions = (
  actions: ProcessActionSelectOptions,
): ProcessSetCurrentPlaceSelectOptionsAction => ({
  type: SET_CURRENT_PLACE_SELECT_OPTIONS,
  actions,
});

export const setCurrentProcessDefinition = (
  process: ProcessDefinictionResponse,
): ProcessSetCurrentProcessDefinitionAction => ({
  type: SET_CURRENT_PROCESS_DEFINITION,
  process,
});

export const createNewSingleProcessDefinition = (): ProcessCreateNewSingleProcessDefinitionAction => ({
  type: CREATE_NEW_PROCESS_DEFINITION,
});

export const submitActionForm = (
  index: number,
  value: ProcessDefinictionStep,
): ProcessSubmitActionFormAction => ({
  type: SUBMIT_ACTION_FORM,
  index,
  value,
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
