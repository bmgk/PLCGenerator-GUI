import React from 'react';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import {
  createNewSingleProcessDefinition,
  useProcessDispatch,
  useProcessStore,
} from './context';

const ProcessDefinitionCreateNewProcessDefinitionStep: React.FC = () => {
  const { selectedProcessDefinition } = useProcessStore();
  const dispatch = useProcessDispatch();
  const handleSubmit = () => {
    dispatch(createNewSingleProcessDefinition());
  };

  const isDisabled = () => {
    const steps = selectedProcessDefinition?.Branches[0].Steps;
    const length = steps?.length || 0;
    if (length === 0 || steps === undefined) return false;
    const lastItem = steps[length - 1];
    return lastItem.Comment === '' || lastItem.ShortcutName === '';
  };

  return (
    <Box display="flex" flexDirection="row-reverse">
      <IconButton
        aria-label="create-new-proces"
        color="primary"
        onClick={handleSubmit}
        disabled={isDisabled()}
      >
        <AddIcon fontSize="large" />
      </IconButton>
    </Box>
  );
};

export default ProcessDefinitionCreateNewProcessDefinitionStep;
