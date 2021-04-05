import React from 'react';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftOutlinedIcon from '@material-ui/icons/ChevronLeftOutlined';

type ProcessDefinitionBackProps = {
  onBack: () => void;
};

const ProcessDefinitionBack: React.FC<ProcessDefinitionBackProps> = (
  props,
) => {
  const { onBack } = props;

  return (
    <Box
      display="flex"
      flexDirection="row"
      flex="1"
      minWidth="90vw"
      justifyContent="flex-start"
    >
      <IconButton aria-label="back" color="primary" onClick={onBack}>
        <ChevronLeftOutlinedIcon fontSize="large" />
      </IconButton>
    </Box>
  );
};

export default ProcessDefinitionBack;
