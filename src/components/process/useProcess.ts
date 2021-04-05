import { useEffect, useState } from 'react';
import { getActions } from 'api/process/getActions';
import { getProcessDefinition } from 'api/process/getPlace';
import {
  setCurrentPlaceSelectOptions,
  useProcessDispatch,
  useProcessStore,
  setCurrentProcessDefinition,
  submitActionForm,
  resetCurrentProcessDefinitionStep,
} from './context';
import { ProcessDefinictionStep } from 'types';

const useProcess = () => {
  const {
    selectedPlace,
    selectedProcessDefinitionStep,
    selectedProcessDefinitionItem,
  } = useProcessStore();
  const dispatch = useProcessDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSetProcessDefinition = (index: number) => (
    value: ProcessDefinictionStep,
  ) => {
    dispatch(resetCurrentProcessDefinitionStep());
    dispatch(submitActionForm(index, value));
  };

  const handleBack = () => {
    dispatch(resetCurrentProcessDefinitionStep());
  };

  useEffect(() => {
    if (!selectedPlace) return;

    setIsLoading(true);
    Promise.all([
      getActions(selectedPlace),
      getProcessDefinition(selectedPlace),
    ])
      .then(([actions, proces]) => {
        dispatch(
          setCurrentPlaceSelectOptions(actions.AvailableActions),
        );
        dispatch(setCurrentProcessDefinition(proces));
      })
      .catch(() => {
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [selectedPlace]);

  return {
    selectedProcessDefinitionItem,
    setProcessDefinition: handleSetProcessDefinition,
    onBack: handleBack,
    step: selectedProcessDefinitionStep,
    isSelected: !selectedPlace,
    isLoading,
    isError,
  };
};

export default useProcess;
