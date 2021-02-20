import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { FormikHelpers } from 'formik';
import {
  setRows,
  setTree,
  useDashboardDispatch,
} from '../components/dashboard/context';
import { SnackbarNotification } from '../components/common/Notification';
import { HomeForm } from '../components/home';
import {
  submitHomeFormEplanTags,
  submitHomeFormSPSMatrix,
  submitHomeFormTree,
} from '../api/home';
import { extractErrorRequest500 } from '../services/errorHandling/request';

import { HomeFormValues } from '../types';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    marginTop: '10vh',
  },
}));

export const Home: React.FC = () => {
  const [success, setSucces] = useState('');
  const [error, setError] = useState('');
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDashboardDispatch();

  const handleSubmit = (
    values: HomeFormValues,
    formikHelpers: FormikHelpers<HomeFormValues>,
  ) => {
    submitHomeFormEplanTags(values)
      .then((rows) =>
        Promise.all([rows, submitHomeFormSPSMatrix(values)]),
      )
      .then(([rows]) => Promise.all([rows, submitHomeFormTree()]))
      .then(([rows, tree]) => {
        dispatch(setTree(tree));
        dispatch(setRows(rows));
        history.push('/dashboard');
      })
      .catch((error) => {
        setError(extractErrorRequest500(error));
        formikHelpers.resetForm();
      });
  };

  return (
    <div className={classes.container}>
      <SnackbarNotification
        success={success}
        setSucces={setSucces}
        error={error}
        setError={setError}
      />
      <HomeForm handleSubmit={handleSubmit} />
    </div>
  );
};

export default Home;
