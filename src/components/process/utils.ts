import { makeStyles } from '@material-ui/core/styles';
import produce from 'immer';
import {
  ProcessDefinictionStep,
  ProcessDefinitionAction,
} from 'types';

export const SET_PROCESS_DEFFINITION_VALUE =
  'SET_PROCESS_DEFFINITION_VALUE';
export const APPEND_PROCESS_DEFFINITION_VALUE =
  'APPEND_PROCESS_DEFFINITION_VALUE';

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

type ProcessDefinictionActions =
  | ProcessDefinitionSetValueAction
  | ProcessDefinitionAppendActionAction;

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

export const useStyles = makeStyles(() => ({
  cell: { width: '50%' },
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
    default: {
      throw new Error(
        `Unhandled action type: ${JSON.stringify(
          action,
        )}, state: ${JSON.stringify(action)}`,
      );
    }
  }
};
