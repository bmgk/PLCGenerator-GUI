import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';

import ProcessDefinitionStepDetailsActionForm from './ProcessDefinitionDetailsActionForm';
import ProcessDefinitionStepDetailsActionModal from './ProcessDefinitionDetailsActionModal';
import ProcessDefinitionStepDetailsDeleteDialog from './ProcessDefinitionDetailsDeleteDialog';

import { useStyles } from './utils';
import { ProcessDefinitionAction } from 'types';

type ProcessDefinitionStepDetailsTextInputRowProps = {
  action: ProcessDefinitionAction;
  label: string;
  onEdit: (value: ProcessDefinitionAction) => void;
  onDelete: () => void;
};

const ProcessDefinitionStepDetailsActionItemList: React.FC<ProcessDefinitionStepDetailsTextInputRowProps> = (
  props,
) => {
  const { action, label, onEdit, onDelete } = props;
  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const classes = useStyles();

  const handleCloseEdit = () => setOpenEdit(false);
  const handleOpenEdit = () => setOpenEdit(true);
  const handleCloseDelete = () => setOpenDelete(false);
  const handleOpenDelete = () => setOpenDelete(true);

  const handleSubmit = (value: ProcessDefinitionAction) => {
    handleCloseEdit();
    onEdit(value);
  };

  const handleDelete = () => {
    handleCloseDelete();
    onDelete();
  };

  const displayAction = () => {
    return `${action.Element}-${action.ToolType}-${action.ToolName}-${action.ActionName}`;
  };

  return (
    <>
      <ProcessDefinitionStepDetailsActionModal
        open={openEdit}
        onClose={handleCloseEdit}
      >
        <ProcessDefinitionStepDetailsActionForm
          onClose={handleCloseEdit}
          onSubmit={handleSubmit}
          initialValues={action}
        />
      </ProcessDefinitionStepDetailsActionModal>
      <ProcessDefinitionStepDetailsDeleteDialog
        open={openDelete}
        onClose={handleCloseDelete}
        onSubmit={handleDelete}
      />
      <TableRow>
        <TableCell
          align="center"
          component="td"
          className={classes.cell}
        >
          {label}
        </TableCell>
        <TableCell
          align="center"
          component="td"
          className={classes.cell}
          classes={{
            root: classes.actionCell,
          }}
        >
          <Typography
            align="center"
            component="span"
            className={classes.displayAction}
          >
            {displayAction()}
          </Typography>
          <Box display="flex" flex="1" justifyContent="flex-end">
            <IconButton
              aria-label={`edit-${label}`}
              className={classes.icon}
              color="primary"
              onClick={handleOpenEdit}
            >
              <EditIcon fontSize="large" />
            </IconButton>
            <IconButton
              aria-label={`delete-${label}`}
              className={classes.icon}
              color="primary"
              onClick={handleOpenDelete}
            >
              <DeleteIcon fontSize="large" />
            </IconButton>
          </Box>
        </TableCell>
      </TableRow>
    </>
  );
};

export default ProcessDefinitionStepDetailsActionItemList;
