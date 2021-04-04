import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { useProcessStore } from './context';
import { createPlace } from 'api/process/createStep';

const useStyles = makeStyles(() => ({
  submit: {
    marginTop: '2rem',
  },
}));

const ProcessDefinitionSubmit = () => {
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
      );
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
      Submit
    </Button>
  );
};

export default ProcessDefinitionSubmit;
