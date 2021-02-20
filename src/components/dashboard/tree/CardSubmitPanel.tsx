import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import { useTranslation } from 'react-i18next';
import { SnackbarNotification } from '../../common';
import { extractErrorRequest400 } from '../../../services';
import { useStyles } from './utils';

import { CardSubmitPanelProps } from 'types';

export const CardSubmitPanel: React.FC<CardSubmitPanelProps> = (
  props,
) => {
  const { submit } = props;
  const [success, setSucces] = useState('');
  const [error, setError] = useState('');
  const { t } = useTranslation();
  const classes = useStyles();

  const handleSubmit = () => {
    submit()
      .then(() =>
        setSucces(
          t('dashboard.notification.dashboardTree.parameter.success'),
        ),
      )
      .catch((error) => setError(extractErrorRequest400(error)));
  };

  return (
    <>
      <SnackbarNotification
        success={success}
        setSucces={setSucces}
        error={error}
        setError={setError}
      />
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
    </>
  );
};
