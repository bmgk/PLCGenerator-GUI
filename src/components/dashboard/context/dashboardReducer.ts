import produce from 'immer';
import {
  SET_SELECTED_LEAF,
  SET_TABLE,
  SET_TREE,
  APPEND_NEW_VALUES,
  DashboardAction,
} from './dashboardActions';

import { DashboardState } from './dashboardContext';

export const dashboardReducer = (
  state: DashboardState,
  action: DashboardAction,
): DashboardState => {
  switch (action.type) {
    case SET_TREE: {
      return produce(state, (draft) => {
        draft.tree = action.tree;
      });
    }
    case APPEND_NEW_VALUES: {
      return produce(state, (draft) => {
        const newAvaliableValues = new Set([
          ...state.newAvaliableValues,
          ...action.newAvaliableValues,
        ]);
        newAvaliableValues.delete(action.removeFromAvaliableValues);
        draft.newAvaliableValues = Array.from(newAvaliableValues);
      });
    }
    case SET_TABLE: {
      return produce(state, (draft) => {
        draft.rows = action.rows;
      });
    }
    case SET_SELECTED_LEAF: {
      return produce(state, (draft) => {
        draft.selectedLeaf = action.selectedLeaf;
      });
    }
    default: {
      throw new Error(
        `Unhandled action type: ${JSON.stringify(
          action,
        )}, state: ${JSON.stringify(action)}`,
      );
    }
  }
};
