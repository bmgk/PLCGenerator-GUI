import React from 'react';
import Box from '@material-ui/core/Box';
import ProcessDefinitionCreate from './ProcessDefinitionCreate';
import ProcessDefinitionSteps from './ProcessDefinitionSteps';
import ProcessDefinitionStepDetails from './ProcessDefinitionStepDetails';
import useProcessAction from './useProcess';

const ProcessDefinition = () => {
  const { isLoading, isError, isSelected, step } = useProcessAction();

  if (isLoading) return <>Loading...</>;
  if (isError) return <>Error...</>;
  if (isSelected) return <>Select item</>;

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      margin="2rem 5vw"
    >
      {step !== null ? (
        <ProcessDefinitionStepDetails key={step} />
      ) : null}
      {step === null ? <ProcessDefinitionSteps /> : null}
      {step === null ? <ProcessDefinitionCreate /> : null}
    </Box>
  );
};

export default ProcessDefinition;
