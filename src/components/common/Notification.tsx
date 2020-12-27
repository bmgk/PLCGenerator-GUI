import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import { useTranslation } from 'react-i18next';

import { NotificationProps } from 'types';

const Alert = (props: AlertProps) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
};

export const SnackbarNotification: React.FC<NotificationProps> = (
  props,
) => {
  const { success, setSucces, error, setError } = props;
  const { t } = useTranslation();

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
      >
        <Alert onClose={handleClose} severity="success">
          {t(success)}
        </Alert>
      </Snackbar>
      <Snackbar
        open={error !== ''}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="error">
          {t(error)}
        </Alert>
      </Snackbar>
    </>
  );
};
