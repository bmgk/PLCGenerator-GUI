import { DashboardState, DashboardAction } from ".";
import { SET_SELECTED_LEAF, SET_TABLE, SET_TREE } from "./dashboardActions";

export const dashboardReducer = (
  state: DashboardState,
  action: DashboardAction
): DashboardState => {
  switch (action.type) {
    case SET_TREE: {
      return { ...state, tree: action.tree, workingTree: action.tree };
    }
    case SET_TABLE: {
      return { ...state, rows: action.rows };
    }
    case SET_SELECTED_LEAF: {
      return { ...state, selectedLeaf: action.selectedLeaf };
    }
    default: {
      throw new Error(
        `Unhandled action type: ${JSON.stringify(
          action
        )}, state: ${JSON.stringify(action)}`
      );
    }
  }
};
