import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper/Paper';
import Tabs from '@material-ui/core/Tabs/Tabs';
import Tab from '@material-ui/core/Tab/Tab';
import { useTranslation } from 'react-i18next';

import { DashboardMenu } from './DashboardMenu';
import {
  useDashboardDispatch,
  useDashboardStore,
  setTree,
} from './context';
import { SnackbarNotification } from '../common';

import {
  generateStructure,
  importDraft,
  submitHomeFormTree,
} from '../../api';
import {
  pickDraftJSON,
  pickFolder,
  saveDraft,
  extractErrorRequest,
  invokeProjectImporterLoop,
} from '../../services';

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
  const dispatch = useDashboardDispatch();
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
        invokeProjectImporterLoop(res);
        setSucces(
          t('dashboard.notification.menu.generateStructure.success'),
        );
      })
      .catch((error) => setError(extractErrorRequest(error)))
      .finally(() => setOpenBackdrop(false));
  };

  const handleSaveDraft = () => {
    saveDraft(tree)
      .then(() =>
        setSucces(t('dashboard.notification.menu.saveDraft.success')),
      )
      .catch((error) => setError(extractErrorRequest(error)));
  };

  const handleImportDraft = () => {
    pickDraftJSON()
      .then(importDraft)
      .then(submitHomeFormTree)
      .then((res) => {
        dispatch(setTree(res));
        return Promise.resolve();
      })
      .then(() =>
        setSucces(
          t('dashboard.notification.menu.importDraft.success'),
        ),
      )
      .catch((error) => setError(extractErrorRequest(error)));
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
              importDraft={handleImportDraft}
              showSettings={showSettings}
            />
          </Box>
        </Box>
      </Paper>
    </>
  );
};
