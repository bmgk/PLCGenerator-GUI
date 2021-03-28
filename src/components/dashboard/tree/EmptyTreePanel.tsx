import React from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { useTranslation } from 'react-i18next';

import { useStyles } from './utils';

const EmptyParametersPanel = () => {
  const { t } = useTranslation();
  const classes = useStyles();

  return (
    <div className={classes.treePanelContainer}>
      <Card
        className={`${classes.cardContainer} ${classes.cardInformation}`}
      >
        <Typography align="center" variant="h3">
          {t('dashboard.dashboardTree.emptyPanel')}
        </Typography>
      </Card>
    </div>
  );
};

export default EmptyParametersPanel;
