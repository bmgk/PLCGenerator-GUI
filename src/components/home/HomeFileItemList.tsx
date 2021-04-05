import React from 'react';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

import { FileItem } from 'types';

type HomeFileItemListProps = {
  value: FileItem;
  label: string;
  onClick: () => void;
};

const HomeFileItemList: React.FC<HomeFileItemListProps> = (props) => {
  const { value, label, onClick } = props;

  return (
    <ListItem disableGutters>
      <ListItemText primary={value.name} />
      <ListItemSecondaryAction>
        <IconButton edge="end" aria-label={label} onClick={onClick}>
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default HomeFileItemList;
