import React from 'react';
import Modal from '@material-ui/core/Modal';

type ProcessDefinitionStepDetailsActionModalProps = {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const ProcessDefinitionStepDetailsActionModal: React.FC<ProcessDefinitionStepDetailsActionModalProps> = (
  props,
) => {
  const { open, onClose, children } = props;

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="create-action-form"
      aria-describedby="create-action-form"
      disableBackdropClick
    >
      <>{children}</>
    </Modal>
  );
};

export default ProcessDefinitionStepDetailsActionModal;
