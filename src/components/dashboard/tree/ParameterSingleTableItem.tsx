import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import DashboardSelect from './Inputs/DashboardSelect';
import DashboardInput from './Inputs/DashboardInput';
import { useStyles } from './utils';

import { HomeResponseTreeAvailableValues } from 'types';

type ParameterSingleTableItemProps = {
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

const ParameterSingleTableItem: React.FC<ParameterSingleTableItemProps> = (
  props,
) => {
  const {
    values,
    avaliableValues,
    onChangeSelect,
    onChangeInput,
  } = props;
  const classes = useStyles();

  return (
    <TableRow key={`${avaliableValues.Name}`}>
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

export default ParameterSingleTableItem;
