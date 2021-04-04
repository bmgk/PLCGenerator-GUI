import React from 'react';
import Box from '@material-ui/core/Box';
import ProcessDefinitionDetails from './details/ProcessDefinitionDetails';
import ProcessDefinitionCreateNewProcessDefinitionStep from './ProcessDefinitionCreateNewStep';
import ProcessDefinitionStepsList from './ProcessDefinitionList';
import useProcessAction from './useProcess';
import ProcessDefinitionSubmit from './ProcessDefinitionSubmit';

const ProcessDefinition = () => {
  const {
    isLoading,
    isError,
    isSelected,
    step,
    setProcessDefinition,
    selectedProcessDefinitionItem,
  } = useProcessAction();

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
        <ProcessDefinitionDetails
          key={step}
          initialValues={selectedProcessDefinitionItem}
          onSubmit={setProcessDefinition(step)}
        />
      ) : (
        <>
          <ProcessDefinitionStepsList />
          <ProcessDefinitionCreateNewProcessDefinitionStep />
          <ProcessDefinitionSubmit />
        </>
      )}
    </Box>
  );
};

export default ProcessDefinition;
