import React from 'react';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import { useTranslation } from 'react-i18next';
import { extractErrorRequest400 } from '../../../services/errorHandling/request';
import useNotification from '../../common/useNotification';

import { useStyles } from './utils';
import { GenericErrorResponse400 } from 'types';

type CardSubmitPanelProps = {
  submit: () => Promise<void | GenericErrorResponse400>;
};

const CardSubmitPanel: React.FC<CardSubmitPanelProps> = (props) => {
  const { submit } = props;
  const {
    errorNotification,
    successNotification,
  } = useNotification();
  const { t } = useTranslation();
  const classes = useStyles();

  const handleSubmit = () => {
    submit()
      .then(() =>
        successNotification(
          t('dashboard.notification.dashboardTree.parameter.success'),
        ),
      )
      .catch((error) =>
        errorNotification(extractErrorRequest400(error)),
      );
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
    </>
  );
};

export default CardSubmitPanel;
