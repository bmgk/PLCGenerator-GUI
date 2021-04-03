import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper/Paper';
import Tabs from '@material-ui/core/Tabs/Tabs';
import Tab from '@material-ui/core/Tab/Tab';
import { useTranslation } from 'react-i18next';

import useNotification from 'components/common/useNotification';
import RouteMenu from 'components/route/RouteMenu';
import {
  useDashboardDispatch,
  useDashboardStore,
  setTree,
} from 'components/dashboard/context';
import {
  handleSubmitStructure,
  handleSaveDraft,
  handleImportDraft,
  handleShowSettings,
} from './utils';
import { HomeFormTreeResponse } from 'types';

type RouteNavigationProps = {
  value: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
};

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

const RouteNavigation: React.FC<RouteNavigationProps> = (props) => {
  const { value, setValue } = props;
  const [openBackdrop, setOpenBackdrop] = useState(false);
  const {
    errorNotification,
    successNotification,
  } = useNotification();
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

  const handleSetTree = (newTree: HomeFormTreeResponse) => {
    dispatch(setTree(newTree));
  };

  const submitStructure = handleSubmitStructure(
    t,
    successNotification,
    errorNotification,
    setOpenBackdrop,
  );

  const saveDraft = handleSaveDraft(
    t,
    successNotification,
    errorNotification,
    tree,
  );

  const importDraft = handleImportDraft(
    t,
    successNotification,
    errorNotification,
    handleSetTree,
  );
  const showSettings = handleShowSettings(
    t,
    successNotification,
    errorNotification,
  );
  return (
    <>
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
            <Tab label={t('dashboard.navigation.tab.process')} />
          </Tabs>
          <Box display="flex" paddingRight="1rem">
            <RouteMenu
              submitStructure={submitStructure}
              saveDraft={saveDraft}
              importDraft={importDraft}
              showSettings={showSettings}
            />
          </Box>
        </Box>
      </Paper>
    </>
  );
};

export default RouteNavigation;
