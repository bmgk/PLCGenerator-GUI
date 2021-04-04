import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';

import { isDeepEqual } from 'utils/objectUtils';
import {
  setCurrentPlace,
  useProcessDispatch,
  useProcessStore,
} from './context';
import { ProcessPlaceSingle } from 'types';

const useStyles = makeStyles(() => ({
  list: {
    display: 'flex',
    flexFlow: 'row wrap',
    margin: '0 auto',
    justifyContent: 'space-evenly',
  },
  place: {
    flex: `0 1 calc(20% - 2rem)`,
    margin: '1rem',
    border: '1px black solid',
    minWidth: '20rem',
    height: '4rem',
    listStyleType: 'none',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
}));

const ProcessPlacesList = () => {
  const classes = useStyles();
  const { places, selectedPlace } = useProcessStore();
  const dispatch = useProcessDispatch();

  const handleSelectItem = (place: ProcessPlaceSingle) => {
    dispatch(setCurrentPlace(place));
  };

  return (
    <List className={classes.list}>
      {places.map((el) => (
        <ListItem
          key={el.Name}
          selected={isDeepEqual(el, selectedPlace)}
          button
          className={classes.place}
          onClick={() => handleSelectItem(el)}
        >
          {el.Name}
        </ListItem>
      ))}
    </List>
  );
};

export default ProcessPlacesList;
