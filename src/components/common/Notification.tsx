import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';

import { NotificationProps } from 'types';
import { makeStyles } from '@material-ui/core';

const Alert = (props: AlertProps) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
};

const useStyles = makeStyles((theme) => ({
  success: {
    backgroundColor: '#4caf50 !important',
    color: 'white !important',
  },
  error: {
    backgroundColor: '#f44336 !important',
    color: 'white !important',
  },
}));

export const SnackbarNotification: React.FC<NotificationProps> = (
  props,
) => {
  const { success, setSucces, error, setError } = props;
  const c = useStyles();

  const handleClose = (
    event?: React.SyntheticEvent,
    reason?: string,
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    setSucces('');
    setError('');
  };

  return (
    <>
      <Snackbar
        open={success !== ''}
        autoHideDuration={6000}
        onClose={handleClose}
        classes={{
          root: c.success,
        }}
      >
        <Alert
          onClose={handleClose}
          classes={{
            root: c.success,
          }}
        >
          {success}
        </Alert>
      </Snackbar>
      <Snackbar
        open={error !== ''}
        autoHideDuration={6000}
        onClose={handleClose}
        classes={{
          root: c.error,
        }}
      >
        <Alert
          onClose={handleClose}
          classes={{
            root: c.error,
          }}
        >
          {error}
        </Alert>
      </Snackbar>
    </>
  );
};
