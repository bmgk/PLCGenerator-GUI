import React from 'react';
import {
  SET_TREE,
  SET_TABLE,
  SET_SELECTED_LEAF,
  REPLACE_LEAF_IN_TREE,
} from '..';

import {
  HomeFormTreeResponse,
  HomeFormReponse,
  HomeResponseTreeParameters,
} from 'types';

export * from './dashboardActions';
export * from './dashboardReducer';
export * from './dashboardContext';

export type DashboardSetTreeAction = {
  type: typeof SET_TREE;
  tree: HomeFormTreeResponse;
};

export type DashboardSetRowsAction = {
  type: typeof SET_TABLE;
  rows: HomeFormReponse;
};

export type DashboardSetLeaf = {
  type: typeof SET_SELECTED_LEAF;
  selectedLeaf: SelectedLeaf | null;
};

export type DashboardReplaceLeaf = {
  type: typeof REPLACE_LEAF_IN_TREE;
};

export type DashboardAction =
  | DashboardSetTreeAction
  | DashboardSetRowsAction
  | DashboardSetLeaf
  | DashboardReplaceLeaf;

export type DashboardDispatch = (action: DashboardAction) => void;
export type DashboardState = {
  tree: HomeFormTreeResponse;
  rows: HomeFormReponse;
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
