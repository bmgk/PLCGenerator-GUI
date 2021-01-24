import React, { useEffect, useReducer, useRef } from 'react';
import Paper from '@material-ui/core/Paper';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import RemoveIcon from '@material-ui/icons/Remove';
import IconButton from '@material-ui/core/IconButton';

import { useTranslation } from 'react-i18next';
import { SelectOption } from 'react-select-material-ui';

import { DashboardSelect } from './Inputs/DashboardSelect';
import { DashboardInput } from './Inputs/DashboardInput';
import { useDashboardDispatch, setLeaf } from '../context';
import {
  reducer,
  setInitialValues,
  setValues,
  useStyles,
} from './utils';

import {
  DashboardParameterArrayTableBodyBody,
  SelectedLeaf,
} from 'types';

export const ParameterArrayTableBody: React.FC<DashboardParameterArrayTableBodyBody> = (
  props,
) => {
  const { initialValues, carousele, index, selectedLeaf } = props;
  const { t } = useTranslation();
  const classes = useStyles();
  const timer = useRef<number | null>(null);
  const dispatch = useDashboardDispatch();
  const [values, reducerDispatch] = useReducer(
    reducer,
    initialValues,
  );

  useEffect(() => {
    if (JSON.stringify(values) !== JSON.stringify(initialValues)) {
      reducerDispatch(setInitialValues(initialValues));
    }
  }, [initialValues]);

  useEffect(() => {
    if (timer.current !== null) clearTimeout(timer.current);

    //@ts-ignore
    timer.current = setTimeout(() => {
      if (
        JSON.stringify(
          selectedLeaf.Parameters[carousele].Value[index],
        ) !== JSON.stringify(values)
      ) {
        const selectedLeafClone: SelectedLeaf = JSON.parse(
          JSON.stringify(selectedLeaf),
        );
        selectedLeafClone.Parameters[carousele].Value[index] = values;
        dispatch(setLeaf(selectedLeafClone));
      }
    }, 500);
  }, [values]);

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
      const selectedLeafClone: SelectedLeaf = JSON.parse(
        JSON.stringify(selectedLeaf),
      );

      selectedLeafClone.Parameters[
        carousele
      ].Value = selectedLeaf.Parameters[carousele].Value.filter(
        (arrValue: any) =>
          JSON.stringify(values) !== JSON.stringify(arrValue),
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
            <TableCell
              className={classes.cell}
              component="th"
              align="center"
            >
              <IconButton
                aria-label={`remove-${selectedLeaf.Name}-${index}`}
                color="primary"
                onClick={handleRemove}
              >
                <RemoveIcon fontSize="large" />
              </IconButton>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {selectedLeaf.Parameters[carousele].AvailableValues.map(
            (avaliableValues) => {
              return (
                <TableRow
                  key={`${avaliableValues.Name}-${index}`}
                  aria-label={`${avaliableValues.Name}-${index}`}
                >
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
              );
            },
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
