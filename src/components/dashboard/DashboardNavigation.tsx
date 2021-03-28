import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper/Paper';
import Tabs from '@material-ui/core/Tabs/Tabs';
import Tab from '@material-ui/core/Tab/Tab';
import { useTranslation } from 'react-i18next';

import useNotification from '../common/useNotification';
import DashboardMenu from './DashboardMenu';
import {
  useDashboardDispatch,
  useDashboardStore,
  setTree,
} from './context';

import {
  generateStructure,
  importDraft,
  submitHomeFormTree,
} from '../../api';
import {
  invokeProjectImporterLoop,
  pickFolder,
  saveDraft,
  pickDraftJSON,
} from '../../services/electron/dashboard';
import { extractErrorRequest400 } from '../../services/errorHandling/request';

import { HomeFormTreeResponse } from 'types';

type DashboardNavigationProps = {
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

const DashboardNavigation: React.FC<DashboardNavigationProps> = (
  props,
) => {
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

  const handleSubmitStructure = () => {
    const handleError = (error: string | any) => {
      if (error === 'FILE_ERROR') {
        errorNotification(
          t('dashboard.menu.SUBMIT_STRUCTURE.error.noFile'),
        );
      } else {
        errorNotification(extractErrorRequest400(error));
      }
    };

    const handleSelectedFolder = (folder: string) => {
      const handleGenerationLoop = (paths: string[]) => {
        invokeProjectImporterLoop(paths);
        successNotification(
          t('dashboard.notification.menu.generateStructure.success'),
        );
      };

      if (folder === undefined) {
        handleError('FILE_ERROR');
        return Promise.resolve();
      } else {
        setOpenBackdrop(true);
        return generateStructure(folder).then(handleGenerationLoop);
      }
    };

    pickFolder()
      .then(handleSelectedFolder)
      .catch(handleError)
      .finally(() => setOpenBackdrop(false));
  };

  const handleSaveDraft = () => {
    const handleError = (error: string) => {
      if (error === 'FILE_ERROR') {
        errorNotification(
          t('dashboard.menu.SAVE_DRAFT.error.saving'),
        );
      }
    };

    saveDraft(tree)
      .then(() =>
        successNotification(
          t('dashboard.notification.menu.saveDraft.success'),
        ),
      )
      .catch(handleError);
  };

  const handleImportDraft = () => {
    const handleSetTree = (res: HomeFormTreeResponse) => {
      dispatch(setTree(res));
      return Promise.resolve();
    };

    const handleError = (error: string | any) => {
      if (error === 'FILE_ERROR') {
        errorNotification(
          t('dashboard.menu.IMPORT_DRAFT.error.noFile'),
        );
      } else {
        errorNotification(extractErrorRequest400(error));
      }
    };

    pickDraftJSON()
      .then(importDraft)
      .then(submitHomeFormTree)
      .then(handleSetTree)
      .then(() =>
        successNotification(
          t('dashboard.notification.menu.importDraft.success'),
        ),
      )
      .catch(handleError);
  };

  const showSettings = () => {};

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

export default DashboardNavigation;
