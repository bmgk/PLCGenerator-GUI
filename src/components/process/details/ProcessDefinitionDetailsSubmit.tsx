import React from 'react';
import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

type ProcessDefinitionStepDetailsSubmitProps = {
  onSubmit: () => void;
  disabled: boolean;
};

const useStyles = makeStyles(() => ({
  submit: {
    marginTop: '2rem',
  },
}));

const ProcessDefinitionStepDetailsSubmit: React.FC<ProcessDefinitionStepDetailsSubmitProps> = (
  props,
) => {
  const { onSubmit, disabled } = props;
  const { t } = useTranslation();
  const classes = useStyles();

  return (
    <Button
      type="submit"
      aria-label="submit"
      className={classes.submit}
      color="primary"
      variant="contained"
      onClick={onSubmit}
      disabled={disabled}
    >
      {t('process.details.actionForm.Submit')}
    </Button>
  );
};

export default ProcessDefinitionStepDetailsSubmit;
