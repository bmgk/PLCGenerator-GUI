import React from 'react';
import ProcessDefinitionStepDetailsActionItemList from './ProcessDefinitionStepDetailsActionItemList';
import { ProcessDefinitionAction } from 'types';

type ProcessDefinitionStepDetailsActionListProps = {
  actions: ProcessDefinitionAction[];
};

const ProcessDefinitionStepDetailsActionList: React.FC<ProcessDefinitionStepDetailsActionListProps> = (
  props,
) => {
  const { actions } = props;

  return (
    <>
      {actions.map((action, index) => (
        <ProcessDefinitionStepDetailsActionItemList
          key={action.Element}
          action={action}
          label={`Action[${index}]`}
        />
      ))}
    </>
  );
};

export default ProcessDefinitionStepDetailsActionList;
