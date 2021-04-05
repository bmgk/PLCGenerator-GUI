import React from 'react';
import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { createPlace } from 'api/process/createStep';
import { useProcessStore } from './context';
import useNotification from 'components/common/useNotification';
import { extractErrorRequest500 } from 'services/errorHandling/request';

const useStyles = makeStyles(() => ({
  submit: {
    marginTop: '2rem',
  },
}));

const ProcessDefinitionSubmit = () => {
  const { t } = useTranslation();
  const {
    errorNotification,
    successNotification,
  } = useNotification();

  const classes = useStyles();
  const {
    selectedProcessDefinition,
    selectedPlace,
  } = useProcessStore();

  const handleSubmit = () => {
    if (
      selectedPlace !== null &&
      selectedProcessDefinition !== null
    ) {
      createPlace(
        selectedPlace,
        selectedProcessDefinition.Branches[0].Steps,
      )
        .then(() => {
          successNotification();
        })
        .catch(() => {
          errorNotification();
        });
    }
  };

  return (
    <Button
      type="submit"
      className={classes.submit}
      color="primary"
      variant="contained"
      onClick={handleSubmit}
    >
      {t('process.details.actionForm.Submit')}
    </Button>
  );
};

export default ProcessDefinitionSubmit;
