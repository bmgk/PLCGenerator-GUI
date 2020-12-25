import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import ReactSelectMaterialUi from 'react-select-material-ui';
import { StylesConfig } from 'react-select';
import { useTranslation } from 'react-i18next';

import { useStyles } from './utils';
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
    el,
    handleChange,
    testId = el.Name,
    isCreate = false,
  } = props;
  const { t } = useTranslation();
  const classes = useStyles();

  const label = !isCreate
    ? el.Name
    : `${el.Name}-${t(`dashboard.select.create`)}`;

  const optionsSelect = el.Value.map(
    (el: string | number) => el + '',
  );
  const selectValue = Array.isArray(values[el.Name])
    ? values[el.Name].map((el: string | number) => el + '')
    : values[el.Name] + '';

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
          isMulti: el.MultiSelect,
          styles,
        }}
        onChange={handleChange}
      />
    </FormControl>
  );
};
