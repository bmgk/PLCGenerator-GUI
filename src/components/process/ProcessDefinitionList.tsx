import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import {
  useProcessDispatch,
  useProcessStore,
  setCurrentProcessDefinitionStep,
} from './context';

const useStyles = makeStyles(() => ({
  list: {
    display: 'flex',
    flexDirection: 'column',
    margin: '0 auto',
  },
  place: {
    margin: '1rem',
    border: '1px black solid',
    minWidth: '30rem',
    minHeight: '3rem',
    listStyleType: 'none',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  root: {
    width: 'auto',
  },
}));

const ProcessDefinitionSteps = () => {
  const classes = useStyles();
  const { selectedProcessDefinition } = useProcessStore();
  const dispatch = useProcessDispatch();

  const handleSelectStep = (stepIndex: number) => {
    dispatch(setCurrentProcessDefinitionStep(stepIndex));
  };

  return (
    <List className={classes.list}>
      {selectedProcessDefinition?.Branches[0].Steps.map(
        (stepItem, stepIndex) => (
          <ListItem
            key={stepItem.ShortcutName}
            button
            className={classes.place}
            onClick={() => handleSelectStep(stepIndex)}
            classes={{
              root: classes.root,
            }}
          >
            {`${stepItem.ShortcutName}: ${stepItem.Comment}`}
          </ListItem>
        ),
      )}
    </List>
  );
};

export default ProcessDefinitionSteps;
