import { DashboardState, DashboardAction } from ".";
import { SET_SELECTED_LEAFT, SET_TABLE, SET_TREE } from "./dashboardActions";

export const dashboardReducer = (
  state: DashboardState,
  action: DashboardAction
) => {
  switch (action.type) {
    case SET_TREE: {
      return { ...state, tree: action.tree };
    }
    case SET_TABLE: {
      return { ...state, rows: action.rows };
    }
    case SET_SELECTED_LEAFT: {
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
