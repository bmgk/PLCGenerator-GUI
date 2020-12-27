import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper/Paper';
import Tabs from '@material-ui/core/Tabs/Tabs';
import Tab from '@material-ui/core/Tab/Tab';
import { useTranslation } from 'react-i18next';

import { generateStructure } from '../../api/dashboard';
import {
  invokeProjectImporter,
  pickFolder,
  saveDraft,
} from '../../services/electron';
import { SnackbarNotification } from '../common';
import { DashboardMenu } from './DashboardMenu';
import { useDashboardStore } from './context';

import { DashboardNavigationProps } from 'types';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  tabsRoot: {
    display: 'flex',
    overflow: 'hidden',
    minHeight: '48px',
    flex: 1,
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

export const DashboardNavigation: React.FC<DashboardNavigationProps> = (
  props,
) => {
  const { value, setValue } = props;
  const [openBackdrop, setOpenBackdrop] = useState(false);
  const [success, setSucces] = useState('');
  const [error, setError] = useState('');
  const { t } = useTranslation();
  const { tree } = useDashboardStore();
  const classes = useStyles();

  const handleChange = (
    event: React.ChangeEvent<{}>,
    newValue: number,
  ) => {
    setValue(newValue);
  };

  const handleSubmitStructure = () => {
    pickFolder()
      .then((res) => {
        setOpenBackdrop(true);
        return generateStructure(res);
      })
      .then((res) => {
        invokeProjectImporter(res[0]);
        setSucces(
          'dashboard.notification.menu.generateStructure.success',
        );
      })
      .catch(() =>
        setError(
          'dashboard.notification.menu.generateStructure.error',
        ),
      )
      .finally(() => setOpenBackdrop(false));
  };

  const handleSaveDraft = () => {
    saveDraft(tree)
      .then(() =>
        setSucces('dashboard.notification.menu.saveDraft.success'),
      )
      .catch(() =>
        setError('dashboard.notification.menu.saveDraft.error'),
      );
  };

  const showSettings = () => {};

  return (
    <>
      <SnackbarNotification
        success={success}
        setSucces={setSucces}
        error={error}
        setError={setError}
      />
      <Backdrop
        className={classes.backdrop}
        open={openBackdrop}
        data-testid="spinner"
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <Paper className={classes.root}>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Tabs
            classes={{
              root: classes.tabsRoot,
            }}
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <Tab label={t('dashboard.navigation.tab.table')} />
            <Tab label={t('dashboard.navigation.tab.tree')} />
          </Tabs>
          <Box display="flex" paddingRight="1rem">
            <DashboardMenu
              submitStructure={handleSubmitStructure}
              saveDraft={handleSaveDraft}
              showSettings={showSettings}
            />
          </Box>
        </Box>
      </Paper>
    </>
  );
};
