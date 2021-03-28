import {
  SET_SELECTED_LEAF,
  SET_TABLE,
  SET_TREE,
  REPLACE_LEAF_IN_TREE,
  APPEND_NEW_VALUES,
  DashboardAction,
} from './dashboardActions';

import { DashboardState, SelectedLeaf } from './dashboardContext';
import { HomeResponseTreeChildren } from 'types';

const replace = (
  nodes: HomeResponseTreeChildren,
  selectedLeaf: SelectedLeaf,
) => {
  if (nodes.Name === selectedLeaf.Name) {
    nodes.Parameters = selectedLeaf.Parameters;
  }

  Array.isArray(nodes.Children)
    ? nodes.Children.map((node: HomeResponseTreeChildren) =>
        replace(node, selectedLeaf),
      )
    : null;
};

export const dashboardReducer = (
  state: DashboardState,
  action: DashboardAction,
): DashboardState => {
  switch (action.type) {
    case SET_TREE: {
      return { ...state, tree: action.tree };
    }
    case APPEND_NEW_VALUES: {
      const newAvaliableValues = new Set([
        ...state.newAvaliableValues,
        ...action.newAvaliableValues,
      ]);
      newAvaliableValues.delete(action.removeFromAvaliableValues);

      return {
        ...state,
        newAvaliableValues: Array.from(newAvaliableValues),
      };
    }
    case SET_TABLE: {
      return { ...state, rows: action.rows };
    }
    case SET_SELECTED_LEAF: {
      return { ...state, selectedLeaf: action.selectedLeaf };
    }
    case REPLACE_LEAF_IN_TREE: {
      if (state.selectedLeaf === null) return state;

      const treeCopy = JSON.parse(JSON.stringify(state.tree));
      replace(treeCopy, state.selectedLeaf);
      return { ...state, tree: treeCopy };
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
