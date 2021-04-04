import React from 'react';
import { processReducer } from './processReducer';
import { ProcessDispatch } from './processActions';

import {
  ProcessActionSelectOptions,
  ProcessDefinictionResponse,
  ProcessDefinictionStep,
  ProcessPlaceSingle,
  ProcessPlacesResoponse,
} from 'types';

export type ProcessState = {
  places: ProcessPlacesResoponse;
  selectedPlace: ProcessPlaceSingle | null;
  selectedProcessDefinition: ProcessDefinictionResponse | null;
  selectedProcessDefinitionStep: number | null;
  selectedProcessDefinitionItem: ProcessDefinictionStep | null;
  selectedActions: ProcessActionSelectOptions | null;
};

export type ProcessProviderProps = {
  children: React.ReactNode;
  initial?: ProcessState;
};

const ProcessStateContext = React.createContext<
  ProcessState | undefined
>(undefined);
const ProcessDispatchContext = React.createContext<
  ProcessDispatch | undefined
>(undefined);

const initialDefault: ProcessState = {
  places: [],
  selectedPlace: null,
  selectedProcessDefinition: null,
  selectedProcessDefinitionStep: null,
  selectedProcessDefinitionItem: null,
  selectedActions: null,
};

const useProcessStore = () => {
  const context = React.useContext(ProcessStateContext);
  if (context === undefined) {
    throw new Error(
      'useProcessStore must be used within a ProcessStateContext',
    );
  }
  return context;
};

const useProcessDispatch = () => {
  const context = React.useContext(ProcessDispatchContext);
  if (context === undefined) {
    throw new Error(
      'useProcessDispatch must be used within a ProcessDispatchContext',
    );
  }
  return context;
};

const ProcessProvider = ({
  children,
  initial = initialDefault,
}: ProcessProviderProps) => {
  const [state, dispatch] = React.useReducer(processReducer, initial);

  return (
    <ProcessStateContext.Provider value={state}>
      <ProcessDispatchContext.Provider value={dispatch}>
        {children}
      </ProcessDispatchContext.Provider>
    </ProcessStateContext.Provider>
  );
};

export { ProcessProvider, useProcessStore, useProcessDispatch };
