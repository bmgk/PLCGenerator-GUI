import React from 'react';
import { useTranslation } from 'react-i18next';
import ProcessDefinitionStepDetailsActionItemList from './ProcessDefinitionDetailsActionItemList';
import { ProcessDefinitionAction } from 'types';

type ProcessDefinitionStepDetailsActionListProps = {
  actions: ProcessDefinitionAction[];
  onEdit: (index: number) => (value: ProcessDefinitionAction) => void;
  onDelete: (index: number) => () => void;
};

const ProcessDefinitionStepDetailsActionList: React.FC<ProcessDefinitionStepDetailsActionListProps> = (
  props,
) => {
  const { actions, onEdit, onDelete } = props;
  const { t } = useTranslation();
  return (
    <>
      {actions.map((action, index) => (
        <ProcessDefinitionStepDetailsActionItemList
          key={action.Element}
          action={action}
          label={`${t('process.details.action.preffix')}[${index}]`}
          onEdit={onEdit(index)}
          onDelete={onDelete(index)}
        />
      ))}
    </>
  );
};

export default ProcessDefinitionStepDetailsActionList;
