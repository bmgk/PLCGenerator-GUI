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
      <DialogTitle id="delete-action-confirmation">123</DialogTitle>
      <DialogContent>
        <DialogContentText id="delete-action-confirmation">
          456
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onSubmit} color="primary">
          tak
        </Button>
        <Button onClick={onClose} color="primary">
          nie
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ProcessDefinitionStepDetailsDeleteDialog;
