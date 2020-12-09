import React from "react";
import { dashboardReducer } from "./dashboardReducer";
import { DashboardDispatch, DashboardState, DashboardProviderProps } from "./";

const DashboardStateContext = React.createContext<DashboardState | undefined>(
  undefined
);
const DashboardDispatchContext = React.createContext<
  DashboardDispatch | undefined
>(undefined);

const initialDefault: DashboardState = {
  tree: { name: "", children: [] },
  rows: [],
  selectedLeaf: null,
};

const DashboardProvider = ({ children, initial = initialDefault }: DashboardProviderProps) => {
  const [state, dispatch] = React.useReducer(dashboardReducer, initial);

  return (
    <DashboardStateContext.Provider value={state}>
      <DashboardDispatchContext.Provider value={dispatch}>
        {children}
      </DashboardDispatchContext.Provider>
    </DashboardStateContext.Provider>
  );
};

const useDashboardStore = () => {
  const context = React.useContext(DashboardStateContext);
  if (context === undefined) {
    throw new Error(
      "useDashboardStore must be used within a DashboardStateContext"
    );
  }
  return context;
};

const useDashboardDispatch = () => {
  const context = React.useContext(DashboardDispatchContext);
  if (context === undefined) {
    throw new Error(
      "useDashboardDispatch must be used within a DashboardDispatchContext"
    );
  }
  return context;
};

export { DashboardProvider, useDashboardStore, useDashboardDispatch };
