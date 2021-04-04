import React from 'react';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import { createNewStep, useProcessDispatch } from './context';

const ProcessDefinitionCreate: React.FC = () => {
  const dispatch = useProcessDispatch();
  const handleSubmit = () => {
    dispatch(createNewStep());
  };

  return (
    <Box display="flex" flexDirection="row-reverse">
      <IconButton
        aria-label="create-new-proces"
        color="primary"
        onClick={handleSubmit}
      >
        <AddIcon fontSize="large" />
      </IconButton>
    </Box>
  );
};

export default ProcessDefinitionCreate;
