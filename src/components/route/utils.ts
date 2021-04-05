import { TFunction } from 'i18next';
import {
  generateStructure,
  importDraft,
  submitHomeFormTree,
} from 'api';
import {
  invokeProjectImporterLoop,
  pickFolder,
  saveDraft,
  pickDraftJSON,
} from 'services/electron/dashboard';
import { extractErrorRequest400 } from 'services/errorHandling/request';
import { HomeFormTreeResponse } from 'types';

export const handleSubmitStructure = (
  t: TFunction,
  successNotification: (notification: string) => void,
  errorNotification: (notification: string) => void,
  setOpenBackdrop: React.Dispatch<React.SetStateAction<boolean>>,
) => () => {
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

export const handleSaveDraft = (
  t: TFunction,
  successNotification: (notification: string) => void,
  errorNotification: (notification: string) => void,
  tree: HomeFormTreeResponse,
) => () => {
  const handleError = (error: string) => {
    if (error === 'FILE_ERROR') {
      errorNotification(t('dashboard.menu.SAVE_DRAFT.error.saving'));
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

export const handleImportDraft = (
  t: TFunction,
  successNotification: (notification: string) => void,
  errorNotification: (notification: string) => void,
  setTree: (tree: HomeFormTreeResponse) => void,
) => () => {
  const handleSetTree = (res: HomeFormTreeResponse) => {
    setTree(res);
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

export const handleShowSettings = (
  t: TFunction,
  successNotification: (notification: string) => void,
  errorNotification: (notification: string) => void,
) => () => {};
