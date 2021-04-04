import React, { useReducer } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';

import ProcessDefinitionBack from './ProcessDefinitionBack';
import ProcessDefinitionStepDetailsHeader from './ProcessDefinitionStepDetailsHeader';
import ProcessDefinitionStepDetailsTextInputRow from './ProcessDefinitionStepDetailsTextInputRow';
import ProcessDefinitionStepDetailsNewAction from './ProcessDefinitionStepDetailsNewAction';
import ProcessDefinitionStepDetailsActionList from './ProcessDefinitionStepDetailsActionList';
import ProcessDefinitionStepDetailsSubmit from './ProcessDefinitionStepDetailsSubmit';
import {
  appendAction,
  createEmptyStep,
  ProcessDefinitionTable,
  reducer,
  setValue,
} from './utils';
import { ProcessDefinitionAction } from 'types';

const useStyles = makeStyles(() => ({
  tableContainer: {
    minHeight: '40rem',
  },
}));

const ProcessDefinitionStepDetails = () => {
  const [state, dispatch] = useReducer(reducer, createEmptyStep());
  const classes = useStyles();

  const handleChangeInput = (
    name: keyof Omit<ProcessDefinitionTable, 'Actions'>,
  ) => (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => {
    dispatch(setValue(name, event.target.value));
  };

  const handleAppendNewAction = (value: ProcessDefinitionAction) => {
    dispatch(appendAction(value));
  };

  const handleSubmit = () => {
    console.log(state);
  };

  return (
    <>
      <ProcessDefinitionBack />
      <TableContainer
        className={classes.tableContainer}
        component={Paper}
      >
        <Table aria-label="process-definition-details">
          <ProcessDefinitionStepDetailsHeader />
          <TableBody>
            <ProcessDefinitionStepDetailsTextInputRow
              name="ShortcutName"
              value={state.ShortcutName}
              onChangeInput={handleChangeInput}
              label="ShortcutName"
            />
            <ProcessDefinitionStepDetailsTextInputRow
              name="Comment"
              value={state.Comment}
              onChangeInput={handleChangeInput}
              label="Comment"
            />
            <ProcessDefinitionStepDetailsActionList
              actions={state.Actions}
            />
            <ProcessDefinitionStepDetailsNewAction
              label="New Action"
              onSubmit={handleAppendNewAction}
            />
          </TableBody>
        </Table>
        <ProcessDefinitionStepDetailsSubmit onSubmit={handleSubmit} />
      </TableContainer>
    </>
  );
};

export default ProcessDefinitionStepDetails;
