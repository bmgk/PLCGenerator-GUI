import React from "react";
import {
  HomeFormTreeResponse,
  HomeFormReponse,
  HomeResponseTreeParameters,
} from "types";
import { SET_TREE, SET_TABLE, SET_SELECTED_LEAFT } from "..";

export * from "./dashboardActions";
export * from "./dashboardReducer";
export * from "./dashboardContext";

export type DashboardSetTreeAction = {
  type: typeof SET_TREE;
  tree: HomeFormTreeResponse;
};
export type DashboardSetRowsAction = {
  type: typeof SET_TABLE;
  rows: HomeFormReponse;
};
export type DashboardSetLeaf = {
  type: typeof SET_SELECTED_LEAFT;
  selectedLeaf: SelectedLeaf | null;
};

export type DashboardAction =
  | DashboardSetTreeAction
  | DashboardSetRowsAction
  | DashboardSetLeaf;

export type DashboardDispatch = (action: DashboardAction) => void;
export type DashboardState = {
  tree: HomeFormTreeResponse;
  rows: HomeFormReponse;
  selectedLeaf: SelectedLeaf | null;
};
export type DashboardProviderProps = { children: React.ReactNode };

export type SelectedLeaf = {
  parameters: HomeResponseTreeParameters[];
  name: string;
};
