import React from 'react';
import { useTranslation } from 'react-i18next';
import { Field, Form, Formik } from 'formik';
import {
  Autocomplete,
  AutocompleteRenderInputParams,
} from 'formik-material-ui-lab';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftOutlinedIcon from '@material-ui/icons/ChevronLeftOutlined';
import { useProcessStore } from '../context';
import { createEmptyAction } from './utils';
import { ProcessDefinitionAction } from 'types';

type ProcessDefinitionStepDetailsActionFormProps = {
  onSubmit: (value: ProcessDefinitionAction) => void;
  onClose: () => void;
  initialValues?: ProcessDefinitionAction;
};

const useStyles = makeStyles(() => ({
  formControl: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '2rem',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  submit: {
    marginTop: '2rem',
  },
}));

const ProcessDefinitionStepDetailsActionForm: React.FC<ProcessDefinitionStepDetailsActionFormProps> = (
  props,
) => {
  const {
    onSubmit,
    onClose,
    initialValues = createEmptyAction(),
  } = props;
  const { t } = useTranslation();
  const { selectedActions } = useProcessStore();
  const classes = useStyles();

  if (!selectedActions) return <></>;

  const optionsElement = () => {
    return Object.keys(selectedActions);
  };

  const optionsToolTypes = (values: ProcessDefinitionAction) => {
    return Object.keys(selectedActions[values.Element] || {});
  };

  const optionsActionNames = (values: ProcessDefinitionAction) => {
    try {
      const value = selectedActions[values.Element][values.ToolType];
      return (
        //@ts-ignore
        value?.AvailableActions || []
      );
    } catch {
      return [];
    }
  };

  const optionsToolNames = (values: ProcessDefinitionAction) => {
    try {
      const value = selectedActions[values.Element][values.ToolType];
      return (
        //@ts-ignore
        value?.ToolNames || []
      );
    } catch {
      return [];
    }
  };

  return (
    <Box
      component={Card}
      margin="0 auto"
      minWidth="40rem"
      padding="2rem"
    >
      <CardHeader
        action={
          <IconButton aria-label="close" onClick={onClose}>
            <ChevronLeftOutlinedIcon fontSize="large" />
          </IconButton>
        }
        title={t('process.details.actionForm.title')}
      />
      <Formik onSubmit={onSubmit} initialValues={initialValues}>
        {({ values }) => (
          <Form data-testid="create-action-form">
            <FormControl className={classes.formControl}>
              <Field
                name="Element"
                component={Autocomplete}
                options={optionsElement()}
                getOptionLabel={(option: string) => option}
                renderInput={(
                  params: AutocompleteRenderInputParams,
                ) => (
                  <TextField
                    {...params}
                    label={t('process.details.actionForm.Element')}
                  />
                )}
              />
            </FormControl>
            <FormControl className={classes.formControl}>
              <Field
                name="ToolType"
                component={Autocomplete}
                options={optionsToolTypes(values)}
                getOptionLabel={(option: string) => option}
                renderInput={(
                  params: AutocompleteRenderInputParams,
                ) => (
                  <TextField
                    {...params}
                    label={t('process.details.actionForm.ToolType')}
                  />
                )}
              />
            </FormControl>
            <FormControl className={classes.formControl}>
              <Field
                name="ToolName"
                component={Autocomplete}
                options={optionsToolNames(values)}
                getOptionLabel={(option: string) => option}
                renderInput={(
                  params: AutocompleteRenderInputParams,
                ) => (
                  <TextField
                    {...params}
                    label={t('process.details.actionForm.ToolName')}
                  />
                )}
              />
            </FormControl>
            <FormControl className={classes.formControl}>
              <Field
                name="ActionName"
                component={Autocomplete}
                options={optionsActionNames(values)}
                getOptionLabel={(option: string) => option}
                renderInput={(
                  params: AutocompleteRenderInputParams,
                ) => (
                  <TextField
                    {...params}
                    label={t('process.details.actionForm.ActionName')}
                  />
                )}
              />
            </FormControl>
            <Button
              type="submit"
              className={classes.submit}
              color="primary"
              variant="contained"
            >
              {t('process.details.actionForm.Submit')}
            </Button>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default ProcessDefinitionStepDetailsActionForm;
