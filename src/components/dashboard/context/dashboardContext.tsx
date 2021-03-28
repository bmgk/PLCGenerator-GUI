import React from 'react';
import { dashboardReducer } from './dashboardReducer';
import { DashboardDispatch } from './dashboardActions';
import {
  HomeFormTreeResponse,
  HomeFormReponseWithId,
  HomeResponseTreeParameters,
} from 'types';

export type DashboardState = {
  newAvaliableValues: string[];
  tree: HomeFormTreeResponse;
  rows: HomeFormReponseWithId;
  selectedLeaf: SelectedLeaf | null;
};

export type DashboardProviderProps = {
  children: React.ReactNode;
  initial?: DashboardState;
};

export type SelectedLeaf = {
  Parameters: HomeResponseTreeParameters[];
  Name: string;
};

const DashboardStateContext = React.createContext<
  DashboardState | undefined
>(undefined);
const DashboardDispatchContext = React.createContext<
  DashboardDispatch | undefined
>(undefined);

const initialDefault: DashboardState = {
  tree: { Name: '', Children: [] },
  newAvaliableValues: [],
  rows: [],
  selectedLeaf: null,
};

const useDashboardStore = () => {
  const context = React.useContext(DashboardStateContext);
  if (context === undefined) {
    throw new Error(
      'useDashboardStore must be used within a DashboardStateContext',
    );
  }
  return context;
};

const useDashboardDispatch = () => {
  const context = React.useContext(DashboardDispatchContext);
  if (context === undefined) {
    throw new Error(
      'useDashboardDispatch must be used within a DashboardDispatchContext',
    );
  }
  return context;
};

const DashboardProvider = ({
  children,
  initial = initialDefault,
}: DashboardProviderProps) => {
  const [state, dispatch] = React.useReducer(
    dashboardReducer,
    initial,
  );

  return (
    <DashboardStateContext.Provider value={state}>
      <DashboardDispatchContext.Provider value={dispatch}>
        {children}
      </DashboardDispatchContext.Provider>
    </DashboardStateContext.Provider>
  );
};

export { DashboardProvider, useDashboardStore, useDashboardDispatch };
