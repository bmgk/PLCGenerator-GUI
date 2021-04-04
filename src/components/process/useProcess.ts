import { useEffect, useState } from 'react';
import { getActions } from 'api/process/getActions';
import { getProcessDefinition } from 'api/process/getPlace';
import {
  setCurrentActions,
  useProcessDispatch,
  useProcessStore,
  setCurrentProcessDefinition,
} from './context';

const useProcess = () => {
  const {
    selectedPlace,
    selectedProcessDefinitionStep,
  } = useProcessStore();
  const dispatch = useProcessDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (!selectedPlace) return;

    setIsLoading(true);
    Promise.all([
      getActions(selectedPlace),
      getProcessDefinition(selectedPlace),
    ])
      .then(([actions, proces]) => {
        dispatch(setCurrentActions(actions.AvailableActions));
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
    step: selectedProcessDefinitionStep,
    isSelected: !selectedPlace,
    isLoading,
    isError,
  };
};

export default useProcess;
