import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core';

import { useStyles } from '../utils';
import { DashboardInputProps } from 'types';

const useStylesLabel = makeStyles(() => ({
  input: { margin: '0 0 0.5rem 0' },
}));

export const DashboardInput: React.FC<DashboardInputProps> = (
  props,
) => {
  const {
    values,
    avaliableValues,
    handleChange,
    testId = avaliableValues.Name,
  } = props;
  const c = useStyles();
  const classes = useStylesLabel();
  const label = avaliableValues.Name;

  return (
    <FormControl className={c.formControl}>
      <TextField
        value={values[avaliableValues.Name]}
        name={avaliableValues.Name}
        onChange={handleChange}
        InputLabelProps={{ htmlFor: avaliableValues.Name }}
        label={label}
        className={classes.input}
        inputProps={{
          id: avaliableValues.Name,
          'data-testid': testId,
        }}
      />
    </FormControl>
  );
};
