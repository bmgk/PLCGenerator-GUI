import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';

import { useTranslation } from 'react-i18next';

import { useStyles } from './utils';
import { DashboardInputProps } from 'types';

const useStylesLabel = makeStyles(() => ({
  input: { margin: '0 0 0.5rem 0' },
}));

export const DashboardInput: React.FC<DashboardInputProps> = (
  props,
) => {
  const {
    values,
    el,
    handleChange,
    testId = el.Name,
    isCreate = false,
  } = props;
  const { t } = useTranslation();
  const c = useStyles();
  const classes = useStylesLabel();
  const label = !isCreate
    ? el.Name
    : `${el.Name}-${t(`dashboard.select.create`)}`;

  return (
    <FormControl className={c.formControl}>
      <TextField
        value={values[el.Name]}
        name={el.Name}
        onChange={handleChange}
        InputLabelProps={{ htmlFor: el.Name }}
        label={label}
        className={classes.input}
        inputProps={{
          id: el.Name,
          'data-testid': testId,
        }}
      />
    </FormControl>
  );
};
