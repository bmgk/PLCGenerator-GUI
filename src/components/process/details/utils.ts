import { makeStyles, Theme } from '@material-ui/core/styles';
import produce from 'immer';
import {
  ProcessDefinictionStep,
  ProcessDefinitionAction,
} from 'types';

export const SET_PROCESS_DEFFINITION_VALUE =
  'SET_PROCESS_DEFFINITION_VALUE';
export const APPEND_PROCESS_DEFFINITION_VALUE =
  'APPEND_PROCESS_DEFFINITION_VALUE';
export const EDIT_PROCESS_DEFFINITION_VALUE =
  'EDIT_PROCESS_DEFFINITION_VALUE';
export const DELETE_PROCESS_DEFFINITION_VALUE =
  'DELETE_PROCESS_DEFFINITION_VALUE';

export type ProcessDefinitionTable = ProcessDefinictionStep;

type ProcessDefinitionSetValueAction = {
  type: typeof SET_PROCESS_DEFFINITION_VALUE;
  name: keyof Omit<ProcessDefinitionTable, 'Actions'>;
  value: string;
};

type ProcessDefinitionAppendActionAction = {
  type: typeof APPEND_PROCESS_DEFFINITION_VALUE;
  value: ProcessDefinitionAction;
};

type ProcessDefinitionEditActionAction = {
  type: typeof EDIT_PROCESS_DEFFINITION_VALUE;
  index: number;
  value: ProcessDefinitionAction;
};
type ProcessDefinitionDeleteActionAction = {
  type: typeof DELETE_PROCESS_DEFFINITION_VALUE;
  index: number;
};

type ProcessDefinictionActions =
  | ProcessDefinitionSetValueAction
  | ProcessDefinitionAppendActionAction
  | ProcessDefinitionEditActionAction
  | ProcessDefinitionDeleteActionAction;

export const setValue = (
  name: keyof Omit<ProcessDefinitionTable, 'Actions'>,
  value: string,
): ProcessDefinitionSetValueAction => ({
  type: SET_PROCESS_DEFFINITION_VALUE,
  name,
  value,
});

export const appendAction = (
  value: ProcessDefinitionAction,
): ProcessDefinitionAppendActionAction => ({
  type: APPEND_PROCESS_DEFFINITION_VALUE,
  value,
});

export const editAction = (
  index: number,
  value: ProcessDefinitionAction,
): ProcessDefinitionEditActionAction => ({
  type: EDIT_PROCESS_DEFFINITION_VALUE,
  index,
  value,
});

export const deleteAction = (
  index: number,
): ProcessDefinitionDeleteActionAction => ({
  type: DELETE_PROCESS_DEFFINITION_VALUE,
  index,
});

export const createEmptyStep = (): ProcessDefinictionStep => ({
  ShortcutName: '',
  Comment: '',
  Actions: [],
});

export const createEmptyAction = (): ProcessDefinitionAction => ({
  Element: '',
  ToolType: '',
  ActionName: '',
  ToolName: '',
  TypeConditions: null,
});

export const useStyles = makeStyles((theme: Theme) => ({
  displayAction: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
  },
  cell: { width: '50%' },
  actionCell: {
    width: '100% !important',
    display: 'flex !important',
  },
  icon: {
    cursor: 'pointer',
    lineHeight: 0,
  },
}));

export const reducer = (
  state: ProcessDefinitionTable,
  action: ProcessDefinictionActions,
): ProcessDefinitionTable => {
  switch (action.type) {
    case SET_PROCESS_DEFFINITION_VALUE: {
      return produce(state, (draft) => {
        draft[action.name] = action.value;
      });
    }
    case APPEND_PROCESS_DEFFINITION_VALUE: {
      return produce(state, (draft) => {
        draft.Actions.push(action.value);
      });
    }
    case EDIT_PROCESS_DEFFINITION_VALUE: {
      return produce(state, (draft) => {
        draft.Actions[action.index] = action.value;
      });
    }
    case DELETE_PROCESS_DEFFINITION_VALUE: {
      return produce(state, (draft) => {
        draft.Actions.splice(action.index, 1);
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
