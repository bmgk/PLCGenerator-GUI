import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { HomeResponseTreeAvailableValues } from 'types';

export const SET_VALUES = 'SET_VALUES';
export const CLEAR_VALUES = 'CLEAR_VALUES';
export const SET_ALL_VALUES = 'SET_ALL_VALUES';

export const useStyles = makeStyles((theme) => ({
  treePanelContainer: {
    display: 'flex',
    height: '90vh',
    flex: 3,
  },
  cardContainer: {
    minWidth: '100%',
    overflowY: 'scroll',
    padding: '0 auto',
  },
  headerAction: {
    flex: '0 0 auto',
    alignSelf: 'flex-start',
    margin: 0,
  },
  headerRoot: { alignItems: 'flex-start' },
  headerTitle: {
    textAlign: 'center',
    fontSize: '3rem',
  },
  formControl: {
    margin: theme.spacing(1),
    width: '100%',
    '& label': { width: '100%' },
  },
  selectEmpty: { marginTop: theme.spacing(2) },
  cell: { width: '50%' },
  tableContainer: { margin: '2rem 0' },
  createButtonContainer: {
    display: 'flex',
    flexDirection: 'row-reverse',
  },
  submitButtonContainer: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 0 2rem 2rem',
  },
  cardInformation: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rootContainer: {
    margin: '0 auto',
    minWidth: '20rem',
    maxHeight: '30rem',
    padding: '2rem',
  },
}));

export const initValues = (
  availableValues: HomeResponseTreeAvailableValues[],
) => {
  return availableValues.reduce(
    (acc: any, el: HomeResponseTreeAvailableValues) => {
      //@ts-ignore
      acc[el.Name] = el.MultiSelect ? [] : '';
      return acc;
    },
    {},
  );
};

export const setValues = (name: string, value: any) => ({
  type: SET_VALUES,
  name,
  value,
});

export const setInitialValues = (initialValues: any) => ({
  type: SET_ALL_VALUES,
  initialValues,
});

export const reducer = (state: any, action: any): any => {
  console.log(state, action);
  switch (action.type) {
    case SET_ALL_VALUES: {
      const { initialValues } = action;

      return { ...initialValues };
    }
    case SET_VALUES: {
      const { name, value } = action;

      return { ...state, [name]: value };
    }
    case CLEAR_VALUES: {
      return Object.keys(state).reduce((acc, el) => {
        //@ts-ignore
        acc[el] = Array.isArray(state[el]) ? [] : '';
        return acc;
      }, {});
    }

    default: {
      throw new Error(
        `Unhandled action type: ${JSON.stringify(
          action,
        )}, state: ${JSON.stringify(action)}`,
      );
    }
  }
};
