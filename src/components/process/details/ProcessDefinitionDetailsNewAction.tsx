import React, { useState } from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import ProcessDefinitionStepDetailsActionModal from './ProcessDefinitionDetailsActionModal';
import ProcessDefinitionStepDetailsActionForm from './ProcessDefinitionDetailsActionForm';
import { useStyles } from './utils';
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
  const classes = useStyles();

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
      <TableRow>
        <TableCell
          className={classes.cell}
          align="center"
          component="td"
        >
          {label}
        </TableCell>
        <TableCell
          className={classes.cell}
          align="center"
          component="td"
        >
          <IconButton
            aria-label="create"
            color="primary"
            onClick={handleClick}
          >
            <AddIcon fontSize="large" />
          </IconButton>
        </TableCell>
      </TableRow>
    </>
  );
};

export default ProcessDefinitionStepDetailsNewAction;
