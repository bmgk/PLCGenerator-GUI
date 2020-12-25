import React from 'react';
import { makeStyles } from '@material-ui/core';
import Paper from '@material-ui/core/Paper/Paper';
import Tabs from '@material-ui/core/Tabs/Tabs';
import Tab from '@material-ui/core/Tab/Tab';
import { useTranslation } from 'react-i18next';

import {
  DashboardTable,
  DashboardTree,
} from '../components/dashboard';

const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
  root: {
    flexGrow: 1,
  },
}));

const Dashboard: React.FC = () => {
  const { t } = useTranslation();
  const [value, setValue] = React.useState(0);
  const classes = useStyles();

  const handleChange = (
    event: React.ChangeEvent<{}>,
    newValue: number,
  ) => {
    setValue(newValue);
  };

  return (
    <div className={classes.container}>
      <Paper className={classes.root}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label={t('dashboard.navigation.tab.table')} />
          <Tab label={t('dashboard.navigation.tab.tree')} />
        </Tabs>
      </Paper>
      {value === 0 ? <DashboardTable /> : null}
      {value === 1 ? <DashboardTree /> : null}
    </div>
  );
};

export default Dashboard;
