import React, { useEffect, useReducer, useRef } from 'react';
import Paper from '@material-ui/core/Paper';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';

import { cloneDeep, isDeepEqual } from 'utils/objectUtils';
import ParemeterArrayTableItem from './ParameterArrayTableItem';
import ParameterArrayTableHeader from './ParameterArrayTableHeader';
import {
  useDashboardDispatch,
  setLeaf,
  SelectedLeaf,
} from '../context';
import {
  reducer,
  setInitialValues,
  setValues,
  useStyles,
} from './utils';

import { HomeResponseTreeAvailableValues } from 'types';

type DashboardParameterArrayTableProps = {
  initialValues: any;
  carousele: number;
  index: number;
  selectedLeaf: SelectedLeaf;
};

const ParameterArrayTable: React.FC<DashboardParameterArrayTableProps> = (
  props,
) => {
  const { initialValues, carousele, index, selectedLeaf } = props;
  const classes = useStyles();
  const timer = useRef<number | null>(null);
  const dispatch = useDashboardDispatch();
  const [values, reducerDispatch] = useReducer(
    reducer,
    initialValues,
  );

  useEffect(() => {
    if (!isDeepEqual(values, initialValues)) {
      reducerDispatch(setInitialValues(initialValues));
    }
  }, [initialValues]);

  useEffect(() => {
    if (timer.current !== null) clearTimeout(timer.current);

    //@ts-ignore
    timer.current = setTimeout(() => {
      if (
        !isDeepEqual(
          selectedLeaf.Parameters[carousele].Value[index],
          values,
        )
      ) {
        const selectedLeafClone = cloneDeep(selectedLeaf);
        selectedLeafClone.Parameters[carousele].Value[index] = values;
        dispatch(setLeaf(selectedLeafClone));
      }
    }, 500);
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

  const handleRemove = () => {
    if (Array.isArray(selectedLeaf.Parameters[carousele].Value)) {
      const selectedLeafClone = cloneDeep(selectedLeaf);
      selectedLeafClone.Parameters[
        carousele
      ].Value = selectedLeaf.Parameters[carousele].Value.filter(
        (arrValue: any, currentIndex: number) =>
          index !== currentIndex,
      );
      dispatch(setLeaf(selectedLeafClone));
    }
  };

  return (
    <TableContainer
      className={classes.tableContainer}
      component={Paper}
    >
      <Table aria-label="parameter-table">
        <ParameterArrayTableHeader
          label={`remove-${selectedLeaf.Name}-${index}`}
          onRemove={handleRemove}
        />
        <TableBody>
          {selectedLeaf.Parameters[carousele].AvailableValues.map(
            (avaliableValues: HomeResponseTreeAvailableValues) => (
              <ParemeterArrayTableItem
                key={`${avaliableValues.Name}-${index}`}
                values={values}
                label={`${avaliableValues.Name}-${index}`}
                avaliableValues={avaliableValues}
                onChangeSelect={handleChangeSelect}
                onChangeInput={handleChangeInput}
              />
            ),
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ParameterArrayTable;
