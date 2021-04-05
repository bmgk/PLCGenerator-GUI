import React, { useReducer } from 'react';
import { useTranslation } from 'react-i18next';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';

import ProcessDefinitionBack from '../ProcessDefinitionBack';
import ProcessDefinitionStepDetailsHeader from './ProcessDefinitionDetailsHeader';
import ProcessDefinitionStepDetailsTextInputRow from './ProcessDefinitionDetailsTextInputRow';
import ProcessDefinitionStepDetailsNewAction from './ProcessDefinitionDetailsNewAction';
import ProcessDefinitionStepDetailsActionList from './ProcessDefinitionDetailsActionList';
import ProcessDefinitionStepDetailsSubmit from './ProcessDefinitionDetailsSubmit';
import {
  appendAction,
  createEmptyStep,
  ProcessDefinitionTable,
  reducer,
  setValue,
  deleteAction,
  editAction,
} from './utils';
import {
  ProcessDefinictionStep,
  ProcessDefinitionAction,
} from 'types';

type ProcessDefinitionDetailsProps = {
  onSubmit: (value: ProcessDefinictionStep) => void;
  onBack: () => void;
  initialValues: ProcessDefinictionStep | null;
};

const ProcessDefinitionDetails: React.FC<ProcessDefinitionDetailsProps> = (
  props,
) => {
  const { onSubmit, onBack, initialValues } = props;
  const { t } = useTranslation();
  const [state, dispatch] = useReducer(
    reducer,
    initialValues ? initialValues : createEmptyStep(),
  );

  const handleChangeInput = (
    name: keyof Omit<ProcessDefinitionTable, 'Actions'>,
  ) => (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => {
    dispatch(setValue(name, event.target.value));
  };

  const handleAppendNewAction = (value: ProcessDefinitionAction) => {
    dispatch(appendAction(value));
  };

  const handleEdit = (index: number) => (
    value: ProcessDefinitionAction,
  ) => {
    dispatch(editAction(index, value));
  };

  const handleDelete = (index: number) => () => {
    dispatch(deleteAction(index));
  };

  const handleSubmit = () => {
    onSubmit(state);
  };

  const isDisabled =
    state.Comment === '' || state.ShortcutName === '';

  return (
    <>
      <ProcessDefinitionBack onBack={onBack} />
      <TableContainer component={Paper}>
        <Table aria-label="process-definition-details">
          <ProcessDefinitionStepDetailsHeader />
          <TableBody>
            <ProcessDefinitionStepDetailsTextInputRow
              name="ShortcutName"
              value={state.ShortcutName}
              onChangeInput={handleChangeInput}
              label={t('process.details.ShortcutName')}
            />
            <ProcessDefinitionStepDetailsTextInputRow
              name="Comment"
              value={state.Comment}
              onChangeInput={handleChangeInput}
              label={t('process.details.Comment')}
            />
            <ProcessDefinitionStepDetailsActionList
              actions={state.Actions}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
            <ProcessDefinitionStepDetailsNewAction
              label={t('process.details.NewAction')}
              onSubmit={handleAppendNewAction}
            />
          </TableBody>
        </Table>
        <ProcessDefinitionStepDetailsSubmit
          onSubmit={handleSubmit}
          disabled={isDisabled}
        />
      </TableContainer>
    </>
  );
};

export default ProcessDefinitionDetails;
