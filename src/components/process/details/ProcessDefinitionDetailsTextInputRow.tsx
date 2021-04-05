import React from 'react';
import CommonTableRow from 'components/common/table/CommonTableRow';
import ProcessInput from '../inputs/ProcessInput';
import { ProcessDefinitionTable } from './utils';

type ProcessDefinitionStepDetailsTextInputRowProps = {
  value: string;
  name: keyof Omit<ProcessDefinitionTable, 'Actions'>;
  label: string;
  onChangeInput: (
    name: keyof Omit<ProcessDefinitionTable, 'Actions'>,
  ) => (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => void;
};

const ProcessDefinitionStepDetailsTextInputRow: React.FC<ProcessDefinitionStepDetailsTextInputRowProps> = (
  props,
) => {
  const { value, name, label, onChangeInput } = props;

  return (
    <CommonTableRow
      label="process-definition-text-input-row"
      name={label}
    >
      <ProcessInput
        value={value}
        name={name}
        label={label}
        handleChange={onChangeInput(name)}
      />
    </CommonTableRow>
  );
};

export default ProcessDefinitionStepDetailsTextInputRow;
