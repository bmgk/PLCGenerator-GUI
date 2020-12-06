import React from "react";
import { HomeFormTreeResponse, HomeFormReponse } from "types";
import {
  DashboardSetTreeAction,
  DashboardSetRowsAction,
  SelectedLeaf,
  DashboardSetLeaf,
} from ".";

export const SET_TREE = "SET_TREE";
export const SET_TABLE = "SET_TABLE";
export const SET_SELECTED_LEAFT = "SET_SELECTED_LEAFT";

export const setTree = (
  tree: HomeFormTreeResponse
): DashboardSetTreeAction => ({
  type: SET_TREE,
  tree,
});

export const setRows = (rows: HomeFormReponse): DashboardSetRowsAction => ({
  type: SET_TABLE,
  rows,
});

export const setLeaf = (
  selectedLeaf: SelectedLeaf | null
): DashboardSetLeaf => ({
  type: SET_SELECTED_LEAFT,
  selectedLeaf,
});
