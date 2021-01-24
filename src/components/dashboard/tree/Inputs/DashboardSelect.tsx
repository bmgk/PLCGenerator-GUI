import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import ReactSelectMaterialUi from 'react-select-material-ui';
import { StylesConfig } from 'react-select';

import { useStyles } from '../utils';
import { DashboardSelectProps } from 'types';

const styles: StylesConfig = {
  menu: (base: any) => ({
    ...base,
    position: '',
  }),
};

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

  const label = avaliableValues.Name;

  const optionsSelect = avaliableValues.Value.map(
    (el: string | number) => el + '',
  );
  const selectValue = Array.isArray(values[avaliableValues.Name])
    ? values[avaliableValues.Name].map(
        (el: string | number) => avaliableValues + '',
      )
    : values[avaliableValues.Name] + '';

  return (
    <FormControl className={classes.formControl}>
      <ReactSelectMaterialUi
        data-testid={testId}
        id={testId}
        label={label}
        options={optionsSelect}
        value={selectValue}
        values={selectValue}
        fullWidth
        SelectProps={{
          isClearable: true,
          isMulti: avaliableValues.MultiSelect,
          styles,
        }}
        onChange={handleChange}
      />
    </FormControl>
  );
};
