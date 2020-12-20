import React from 'react';
import { HomeFormTreeResponse, HomeFormReponse } from 'types';
import {
  DashboardSetTreeAction,
  DashboardSetRowsAction,
  SelectedLeaf,
  DashboardSetLeaf,
  DashboardReplaceLeaf,
} from '.';

export const SET_TREE = 'SET_TREE';
export const SET_TABLE = 'SET_TABLE';
export const SET_SELECTED_LEAF = 'SET_SELECTED_LEAF';
export const SET_WORKING_TREE = 'SET_WORKING_TREE';
export const REPLACE_LEAF_IN_TREE = 'REPLACE_LEAF_IN_TREE';

export const setTree = (
  tree: HomeFormTreeResponse,
): DashboardSetTreeAction => ({
  type: SET_TREE,
  tree,
});

export const setRows = (
  rows: HomeFormReponse,
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
