import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import ProcessInput from './Inputs/ProcessInput';
import { ProcessDefinitionTable, useStyles } from './utils';

type ProcessDefinitionStepDetailsTextInputRowProps = {
  value: string;
  name: keyof Omit<ProcessDefinitionTable, 'Actions'>;
  label: string;
  onChangeInput: (
    name: keyof Omit<ProcessDefinitionTable, 'Actions'>,
  ) => (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => void;
};

const ProcessDefinitionStepDetailsTextInputRow: React.FC<ProcessDefinitionStepDetailsTextInputRowProps> = (
  props,
) => {
  const { value, name, label, onChangeInput } = props;
  const classes = useStyles();

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
        <ProcessInput
          value={value}
          name={name}
          label={label}
          handleChange={onChangeInput(name)}
        />
      </TableCell>
    </TableRow>
  );
};

export default ProcessDefinitionStepDetailsTextInputRow;
