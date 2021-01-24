import React, { useEffect, useReducer } from 'react';
import Paper from '@material-ui/core/Paper';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import { useTranslation } from 'react-i18next';
import { SelectOption } from 'react-select-material-ui';

import { useDashboardDispatch, setLeaf } from '../context';
import { DashboardSelect } from './Inputs/DashboardSelect';
import { DashboardInput } from './Inputs/DashboardInput';
import { reducer, setValues, useStyles } from './utils';

import {
  DashboardParameterSingleTableBodyBody,
  SelectedLeaf,
} from 'types';

export const ParameterSingleTableBody: React.FC<DashboardParameterSingleTableBodyBody> = (
  props,
) => {
  const { initialValues, carousele, selectedLeaf } = props;
  const { t } = useTranslation();
  const classes = useStyles();
  const dispatch = useDashboardDispatch();
  const [values, reducerDispatch] = useReducer(
    reducer,
    initialValues,
  );

  useEffect(() => {
    if (
      JSON.stringify(selectedLeaf.Parameters[carousele].Value) !==
      JSON.stringify(values)
    ) {
      const selectedLeafClone: SelectedLeaf = JSON.parse(
        JSON.stringify(selectedLeaf),
      );
      selectedLeafClone.Parameters[carousele].Value = values;
      dispatch(setLeaf(selectedLeafClone));
    }
  }, [values]);

  const handleChangeSelect = (name: string) => (
    value: string | string[],
    option?: SelectOption | SelectOption[],
  ) => {
    reducerDispatch(setValues(name, value));
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
        <TableHead>
          <TableRow>
            <TableCell
              className={classes.cell}
              component="th"
              align="center"
            >
              {t('dashboard.dashboardTree.header.name')}
            </TableCell>
            <TableCell
              className={classes.cell}
              component="th"
              align="center"
            >
              {t('dashboard.dashboardTree.header.value')}
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
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
                  handleChange={handleChangeSelect(
                    avaliableValues.Name,
                  )}
                />
              ) : (
                <DashboardInput
                  values={values}
                  avaliableValues={avaliableValues}
                  handleChange={handleChangeInput(
                    avaliableValues.Name,
                  )}
                />
              )}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};
