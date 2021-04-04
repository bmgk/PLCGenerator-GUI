import React from 'react';

import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

import DashboardSelect from './Inputs/DashboardSelect';
import DashboardInput from './Inputs/DashboardInput';
import { useStyles } from './utils';

import { HomeResponseTreeAvailableValues } from 'types';

type ParameterArrayTableItemProps = {
  label: string;
  values: any;
  avaliableValues: HomeResponseTreeAvailableValues;
  onChangeSelect: (
    name: string,
  ) => (event: any, value: string | string[] | null) => void;
  onChangeInput: (
    name: string,
  ) => (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => void;
};

const ParemeterArrayTableItem: React.FC<ParameterArrayTableItemProps> = (
  props,
) => {
  const {
    values,
    label,
    avaliableValues,
    onChangeSelect,
    onChangeInput,
  } = props;
  const classes = useStyles();

  return (
    <TableRow aria-label={label}>
      <TableCell
        className={classes.cell}
        align="center"
        component="td"
      >
        {avaliableValues.Name}
      </TableCell>
      <TableCell
        className={classes.cell}
        align="center"
        component="td"
      >
        {Array.isArray(avaliableValues.Value) ? (
          <DashboardSelect
            key={JSON.stringify(values)}
            values={values}
            avaliableValues={avaliableValues}
            handleChange={onChangeSelect(avaliableValues.Name)}
          />
        ) : (
          <DashboardInput
            values={values}
            avaliableValues={avaliableValues}
            handleChange={onChangeInput(avaliableValues.Name)}
          />
        )}
      </TableCell>
    </TableRow>
  );
};

export default ParemeterArrayTableItem;
