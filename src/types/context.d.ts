import React from 'react';
import {
  SET_TREE,
  SET_TABLE,
  SET_SELECTED_LEAF,
  REPLACE_LEAF_IN_TREE,
  APPEND_NEW_VALUES,
} from 'components/dashboard';

import {
  HomeFormReponseWithId,
  HomeFormTreeResponse,
  HomeResponseTreeParameters,
} from 'types';

export type DashboardSetTreeAction = {
  type: typeof SET_TREE;
  tree: HomeFormTreeResponse;
};
export type DashboardAppendNewAvaliableValuesAction = {
  type: typeof APPEND_NEW_VALUES;
  newAvaliableValues: string[];
  removeFromAvaliableValues: string;
};
export type DashboardSetRowsAction = {
  type: typeof SET_TABLE;
  rows: HomeFormReponseWithId;
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
  | DashboardAppendNewAvaliableValuesAction
  | DashboardSetRowsAction
  | DashboardSetLeaf
  | DashboardReplaceLeaf;

export type DashboardDispatch = (action: DashboardAction) => void;

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
