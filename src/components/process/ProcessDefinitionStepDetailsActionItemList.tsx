import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

import { useStyles } from './utils';
import { ProcessDefinitionAction } from 'types';

type ProcessDefinitionStepDetailsTextInputRowProps = {
  action: ProcessDefinitionAction;
  label: string;
};

const ProcessDefinitionStepDetailsActionItemList: React.FC<ProcessDefinitionStepDetailsTextInputRowProps> = (
  props,
) => {
  const { action, label } = props;
  const classes = useStyles();

  const displayAction = () => {
    return `${action.Element} ${action.ToolType} ${action.ToolName} ${action.ActionName}`;
  };

  return (
    <TableRow>
      <TableCell
        className={classes.cell}
        align="center"
        component="td"
      >
        {label}
      </TableCell>
      <TableCell
        className={classes.cell}
        align="center"
        component="td"
      >
        {displayAction()}
      </TableCell>
    </TableRow>
  );
};

export default ProcessDefinitionStepDetailsActionItemList;
