import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import { useTranslation } from 'react-i18next';

import { useStyles } from './utils';
import { CardSubmitPanelProps } from 'types';

const Alert = (props: AlertProps) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
};

export const CardSubmitPanel: React.FC<CardSubmitPanelProps> = (
  props,
) => {
  const { submit } = props;
  const [success, setSucces] = useState(false);
  const [error, setError] = useState(false);
  const { t } = useTranslation();
  const classes = useStyles();

  const handleSubmit = () => {
    submit()
      .then(() => setSucces(true))
      .catch(() => setError(true));
  };

  const handleClose = (
    event?: React.SyntheticEvent,
    reason?: string,
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    setSucces(false);
    setError(false);
  };

  return (
    <>
      <CardActions classes={{ root: classes.submitButtonContainer }}>
        <Button
          size="small"
          color="primary"
          variant="contained"
          onClick={handleSubmit}
          aria-label="accept-leaf"
        >
          {t('dashboard.dashboardTree.create')}
        </Button>
      </CardActions>
      <Snackbar
        open={success}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="success">
          {t(
            'dashboard.notification.dashboardTree.parameter.success',
          )}
        </Alert>
      </Snackbar>
      <Snackbar
        open={error}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="error">
          {t('dashboard.notification.dashboardTree.parameter.error')}
        </Alert>
      </Snackbar>
    </>
  );
};
