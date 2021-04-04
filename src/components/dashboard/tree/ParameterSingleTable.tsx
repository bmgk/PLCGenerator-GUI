import React, { useEffect, useReducer } from 'react';
import Paper from '@material-ui/core/Paper';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';

import { cloneDeep, isDeepEqual } from 'utils/objectUtils';
import ParameterSingleTableHeader from './ParameterSingleTableHeader';
import ParameterSingleTableItem from './ParameterSingleTableItemProps';
import {
  useDashboardDispatch,
  setLeaf,
  SelectedLeaf,
} from '../context';
import { reducer, setValues, useStyles } from './utils';

type DashboardParameterSingleTableProps = {
  initialValues: any;
  carousele: number;
  selectedLeaf: SelectedLeaf;
};

const ParameterSingleTable: React.FC<DashboardParameterSingleTableProps> = (
  props,
) => {
  const { initialValues, carousele, selectedLeaf } = props;
  const classes = useStyles();
  const dispatch = useDashboardDispatch();
  const [values, reducerDispatch] = useReducer(
    reducer,
    initialValues,
  );

  useEffect(() => {
    if (
      !isDeepEqual(selectedLeaf.Parameters[carousele].Value, values)
    ) {
      const selectedLeafClone = cloneDeep(selectedLeaf);
      selectedLeafClone.Parameters[carousele].Value = values;
      dispatch(setLeaf(selectedLeafClone));
    }
  }, [selectedLeaf, values]);

  const handleChangeSelect = (name: string) => (
    event: any,
    value: string | string[] | null,
  ) => {
    if (value === null) {
      reducerDispatch(setValues(name, ''));
    } else {
      reducerDispatch(setValues(name, value));
    }
  };

  const handleChangeInput = (name: string) => (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => {
    reducerDispatch(setValues(name, event.target.value));
  };

  const avaliableValues =
    selectedLeaf.Parameters[carousele].AvailableValues[0];

  return (
    <TableContainer
      className={classes.tableContainer}
      component={Paper}
    >
      <Table aria-label="parameter-table">
        <ParameterSingleTableHeader />
        <TableBody>
          <ParameterSingleTableItem
            values={values}
            avaliableValues={avaliableValues}
            onChangeSelect={handleChangeSelect}
            onChangeInput={handleChangeInput}
          />
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ParameterSingleTable;
