import { SelectedLeaf } from './dashboardContext';
import { HomeFormTreeResponse, HomeFormReponseWithId } from 'types';

export const SET_TREE = 'SET_TREE';
export const APPEND_NEW_VALUES = 'APPEND_NEW_VALUES';
export const SET_TABLE = 'SET_TABLE';
export const SET_SELECTED_LEAF = 'SET_SELECTED_LEAF';
export const SET_WORKING_TREE = 'SET_WORKING_TREE';
export const REPLACE_LEAF_IN_TREE = 'REPLACE_LEAF_IN_TREE';

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

export const setTree = (
  tree: HomeFormTreeResponse,
): DashboardSetTreeAction => ({
  type: SET_TREE,
  tree,
});

export const appendNewAvaliableValues = (
  newAvaliableValues: string[],
  removeFromAvaliableValues: string,
): DashboardAppendNewAvaliableValuesAction => ({
  type: APPEND_NEW_VALUES,
  newAvaliableValues,
  removeFromAvaliableValues,
});

export const setRows = (
  rows: HomeFormReponseWithId,
): DashboardSetRowsAction => ({
  type: SET_TABLE,
  rows,
});

export const setLeaf = (
  selectedLeaf: SelectedLeaf | null,
): DashboardSetLeaf => ({
  type: SET_SELECTED_LEAF,
  selectedLeaf,
});

export const replaceLeafInTree = (): DashboardReplaceLeaf => ({
  type: REPLACE_LEAF_IN_TREE,
});
