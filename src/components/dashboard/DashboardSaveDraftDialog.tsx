import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';

import { useTranslation } from 'react-i18next';

type DashboardSaveDraftDialogProps = {
  open: boolean;
  onClose: () => void;
  onSubmit: () => void;
};

const DashboardSaveDraftDialog: React.FC<DashboardSaveDraftDialogProps> = (
  props,
) => {
  const { open, onClose, onSubmit } = props;
  const { t } = useTranslation();

  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="save-drat-confirmation"
      aria-describedby="save-drat-confirmation-details"
    >
      <DialogTitle id="alert-dialog-slide-title">
        {t('dashboard.menu.SAVE_DRAFT.confirmation.title')}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="save-drat-confirmation-details">
          {t('dashboard.menu.SAVE_DRAFT.confirmation.description')}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onSubmit} color="primary">
          {t('dashboard.menu.SAVE_DRAFT.confirmation.accept')}
        </Button>
        <Button onClick={onClose} color="primary">
          {t('dashboard.menu.SAVE_DRAFT.confirmation.reject')}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DashboardSaveDraftDialog;
