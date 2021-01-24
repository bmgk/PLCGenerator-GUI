import React, { useMemo } from 'react';

import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';

import { useDashboardDispatch, setLeaf } from '../context';
import { initValues, useStyles } from './utils';

import { ParameterCreateProps, SelectedLeaf } from 'types';

export const ParameterCreate: React.FC<ParameterCreateProps> = (
  props,
) => {
  const { carousele, selectedLeaf } = props;
  const classes = useStyles();
  const dispatch = useDashboardDispatch();
  const values = useMemo(
    () =>
      initValues(selectedLeaf.Parameters[carousele].AvailableValues),
    [selectedLeaf, carousele],
  );

  const handleSubmit = () => {
    const selectedLeafClone: SelectedLeaf = JSON.parse(
      JSON.stringify(selectedLeaf),
    );
    if (
      Array.isArray(selectedLeafClone.Parameters[carousele].Value)
    ) {
      selectedLeafClone.Parameters[carousele].Value.push(values);
    }
    dispatch(setLeaf(selectedLeafClone));
  };

  return (
    <div className={classes.createButtonContainer}>
      <IconButton
        aria-label="create"
        color="primary"
        onClick={handleSubmit}
      >
        <AddIcon fontSize="large" />
      </IconButton>
    </div>
  );
};
