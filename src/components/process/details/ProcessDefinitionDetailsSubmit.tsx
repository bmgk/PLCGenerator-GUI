import React from 'react';
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
      Submit
    </Button>
  );
};

export default ProcessDefinitionStepDetailsSubmit;
