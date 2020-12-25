import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Snackbar } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import Box from '@material-ui/core/Box';
import { useTranslation } from 'react-i18next';

import { useStyles } from './utils';

import { RootPanelProps } from 'types';

export const RootTreePanel: React.FC<RootPanelProps> = (props) => {
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
    <div className={classes.treePanelContainer}>
      <Card
        className={`${classes.cardContainer} ${classes.cardInformation}`}
      >
        <Card className={classes.rootContainer}>
          <Typography align="center" variant="h3">
            {t('dashboard.dashboardTree.rootPanel')}
          </Typography>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            padding="2rem 0 1rem 0"
          >
            <Button
              color="primary"
              variant="contained"
              onClick={handleSubmit}
            >
              {t('dashboard.dashboardTree.submit')}
            </Button>
          </Box>
        </Card>
      </Card>
      <Snackbar
        open={success}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="success">
          {t(
            'dashboard.notification.dashboardTree.structure.success',
          )}
        </Alert>
      </Snackbar>
      <Snackbar
        open={error}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="error">
          {t('dashboard.notification.dashboardTree.structure.error')}
        </Alert>
      </Snackbar>
    </div>
  );
};
