import React, { useEffect, useReducer, useState } from 'react';
import Paper from '@material-ui/core/Paper';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';
import { useTranslation } from 'react-i18next';
import { SelectOption } from 'react-select-material-ui';

import { DashboardSelect } from './DashboardSelect';
import { DashboardInput } from './DashboardInput';
import { useDashboardDispatch, setLeaf } from '../context';
import {
  clearValues,
  initValues,
  reducer,
  setValues,
  useStyles,
} from './utils';

import {
  DashboardTreePanelCreateTableBody,
  SelectedLeaf,
} from 'types';

export const ParameterCreateTableBody: React.FC<DashboardTreePanelCreateTableBody> = (
  props,
) => {
  const { carousele, selectedLeaf } = props;
  const { t } = useTranslation();
  const classes = useStyles();
  const parameter = selectedLeaf.Parameters[carousele];
  const dispatch = useDashboardDispatch();
  const [disabled, setDisabled] = useState(true);
  const [values, reducerDispatch] = useReducer(
    reducer,
    initValues(parameter.AvailableValues),
  );

  useEffect(() => {
    const disabled = Object.keys(values).some(
      (el) =>
        values[el] === '' ||
        (Array.isArray(values[el]) && values[el].length === 0),
    );
    setDisabled(disabled);
  }, [values]);

  const handleSubmit = () => {
    const selectedLeafClone: SelectedLeaf = JSON.parse(
      JSON.stringify(selectedLeaf),
    );
    if (
      Array.isArray(selectedLeafClone.Parameters[carousele].Value)
    ) {
      selectedLeafClone.Parameters[carousele].Value.push(values);
    } else {
      selectedLeafClone.Parameters[carousele].Value = values;
    }
    dispatch(setLeaf(selectedLeafClone));
    reducerDispatch(clearValues());
    setDisabled(true);
  };

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

  return (
    <>
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
            {parameter.AvailableValues.map((el) => {
              return (
                <TableRow key={`${el.Name}-create`}>
                  <TableCell
                    className={classes.cell}
                    align="center"
                    component="td"
                  >
                    {el.Name}
                  </TableCell>
                  <TableCell
                    className={classes.cell}
                    align="center"
                    component="td"
                  >
                    {Array.isArray(el.Value) ? (
                      <DashboardSelect
                        key={disabled + ''}
                        testId={`${el.Name}-select-create`}
                        values={values}
                        el={el}
                        handleChange={handleChangeSelect(el.Name)}
                        isCreate
                      />
                    ) : (
                      <DashboardInput
                        testId={`${el.Name}-input-create`}
                        values={values}
                        el={el}
                        handleChange={handleChangeInput(el.Name)}
                        isCreate
                      />
                    )}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <div className={classes.createButtonContainer}>
        <IconButton
          disabled={disabled}
          aria-label="create"
          color="primary"
          onClick={handleSubmit}
        >
          <AddIcon fontSize="large" />
        </IconButton>
      </div>
    </>
  );
};
