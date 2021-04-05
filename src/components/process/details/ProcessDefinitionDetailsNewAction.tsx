import React, { useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import CommonTableRow from 'components/common/table/CommonTableRow';
import ProcessDefinitionStepDetailsActionModal from './ProcessDefinitionDetailsActionModal';
import ProcessDefinitionStepDetailsActionForm from './ProcessDefinitionDetailsActionForm';
import { ProcessDefinitionAction } from 'types';

type ProcessDefinitionStepDetailsNewActionProps = {
  label: string;
  onSubmit: (value: ProcessDefinitionAction) => void;
};

const ProcessDefinitionStepDetailsNewAction: React.FC<ProcessDefinitionStepDetailsNewActionProps> = (
  props,
) => {
  const { label, onSubmit } = props;
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  const handleClick = () => {
    handleOpen();
  };

  const handleSubmit = (value: ProcessDefinitionAction) => {
    handleClose();
    onSubmit(value);
  };

  return (
    <>
      <ProcessDefinitionStepDetailsActionModal
        open={open}
        onClose={handleClose}
      >
        <ProcessDefinitionStepDetailsActionForm
          onClose={handleClose}
          onSubmit={handleSubmit}
        />
      </ProcessDefinitionStepDetailsActionModal>
      <CommonTableRow
        label="process-definition-details-new-action"
        name={label}
      >
        <IconButton
          aria-label="create"
          color="primary"
          onClick={handleClick}
        >
          <AddIcon fontSize="large" />
        </IconButton>
      </CommonTableRow>
    </>
  );
};

export default ProcessDefinitionStepDetailsNewAction;
