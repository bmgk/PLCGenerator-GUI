import React from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';

import { useStyles } from '../utils';
import { DashboardSelectProps } from 'types';

export const DashboardSelect: React.FC<DashboardSelectProps> = (
  props,
) => {
  const {
    values,
    avaliableValues,
    handleChange,
    testId = avaliableValues.Name,
  } = props;
  const classes = useStyles();

  const optionsSelect = avaliableValues.Value.map(
    (el: string | number) => el + '',
  );
  const value = Array.isArray(values[avaliableValues.Name])
    ? values[avaliableValues.Name].map(
        (singleValue: string | number) => singleValue + '',
      )
    : values[avaliableValues.Name] + '';

  const multiple = Array.isArray(values[avaliableValues.Name]);

  return (
    <Box className={classes.formControl}>
      <Autocomplete
        multiple={multiple}
        id={testId}
        options={optionsSelect}
        value={value}
        onChange={handleChange}
        getOptionLabel={(option: string) => option}
        renderInput={(params) => (
          <TextField
            {...params}
            InputLabelProps={{ htmlFor: avaliableValues.Name }}
            label={avaliableValues.Name}
          />
        )}
      />
    </Box>
  );
};
