import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import { FormikHelpers } from 'formik';

import useNotification from 'components/common/useNotification';
import HomeForm from 'components/home/HomeForm';
import {
  setRows,
  setTree,
  useDashboardDispatch,
} from 'components/dashboard/context';
import {
  setProcessPlaces,
  useProcessDispatch,
} from 'components/process/context';
import { extractErrorRequest500 } from 'services/errorHandling/request';
import {
  submitHomeFormEplanTags,
  submitHomeFormSPSMatrix,
  submitHomeFormTree,
} from 'api/home';
import { getPlaces } from 'api/process/getPlaces';

import { HomeFormValues } from 'types';

const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    marginTop: '10vh',
  },
}));

const Home: React.FC = () => {
  const {
    errorNotification,
    successNotification,
  } = useNotification();
  const classes = useStyles();
  const history = useHistory();
  const dashboardDispatch = useDashboardDispatch();
  const processDispatch = useProcessDispatch();

  const handleSubmit = (
    values: HomeFormValues,
    formikHelpers: FormikHelpers<HomeFormValues>,
  ) => {
    submitHomeFormEplanTags(values)
      .then((rows) =>
        Promise.all([rows, submitHomeFormSPSMatrix(values)]),
      )
      .then(([rows]) =>
        Promise.all([rows, submitHomeFormTree(), getPlaces()]),
      )
      .then(([rows, tree, places]) => {
        dashboardDispatch(setTree(tree));
        dashboardDispatch(setRows(rows));
        processDispatch(setProcessPlaces(places));
        history.push('/dashboard');
        successNotification();
      })
      .catch((error) => {
        errorNotification(extractErrorRequest500(error));
        formikHelpers.resetForm();
      });
  };

  return (
    <div className={classes.container}>
      <HomeForm handleSubmit={handleSubmit} />
    </div>
  );
};

export default Home;
