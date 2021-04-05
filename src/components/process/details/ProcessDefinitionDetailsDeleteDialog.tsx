import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';

import { useTranslation } from 'react-i18next';

type ProcessDefinitionStepDetailsDeleteDialogProps = {
  open: boolean;
  onClose: () => void;
  onSubmit: () => void;
};

const ProcessDefinitionStepDetailsDeleteDialog: React.FC<ProcessDefinitionStepDetailsDeleteDialogProps> = (
  props,
) => {
  const { open, onClose, onSubmit } = props;
  const { t } = useTranslation();

  return (
    <Dialog
      open={open}
      onClose={onClose}
      role="dialog"
      aria-label="delete-action-confirmation"
      aria-labelledby="delete-action-confirmation"
      aria-describedby="delete-action-confirmation"
    >
      <DialogTitle id="delete-action-confirmation">
        {t('process.details.deleteDialog.title')}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="delete-action-confirmation">
          {t('process.details.deleteDialog.content')}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onSubmit} color="primary">
          {t('process.details.deleteDialog.accept')}
        </Button>
        <Button onClick={onClose} color="secondary">
          {t('process.details.deleteDialog.reject')}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ProcessDefinitionStepDetailsDeleteDialog;
