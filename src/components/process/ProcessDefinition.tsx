import React from 'react';
import { useTranslation } from 'react-i18next';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
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
    onBack,
  } = useProcessAction();
  const { t } = useTranslation();
  if (isLoading)
    return (
      <Typography variant="h1" align="center">
        {t('process.definition.loading')}
      </Typography>
    );
  if (isError)
    return (
      <Typography variant="h1" align="center">
        {t('process.definition.error')}
      </Typography>
    );
  if (isSelected)
    return (
      <Typography variant="h1" align="center">
        {t('process.definition.selectItem')}
      </Typography>
    );

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
          onBack={onBack}
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
