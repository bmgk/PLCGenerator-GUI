import React from 'react';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftOutlinedIcon from '@material-ui/icons/ChevronLeftOutlined';
import {
  resetCurrentProcessDefinitionStep,
  useProcessDispatch,
} from './context';

const ProcessDefinitionBack: React.FC = () => {
  const dispatch = useProcessDispatch();
  const handleSubmit = () => {
    dispatch(resetCurrentProcessDefinitionStep());
  };

  return (
    <Box
      display="flex"
      flexDirection="row"
      flex="1"
      minWidth="90vw"
      justifyContent="flex-start"
    >
      <IconButton
        aria-label="back"
        color="primary"
        onClick={handleSubmit}
      >
        <ChevronLeftOutlinedIcon fontSize="large" />
      </IconButton>
    </Box>
  );
};

export default ProcessDefinitionBack;
