import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import RemoveIcon from '@material-ui/icons/Remove';
import IconButton from '@material-ui/core/IconButton';
import { useTranslation } from 'react-i18next';
import { useStyles } from './utils';

type ParameterArrayTableHeaderProps = {
  label: string;
  onRemove: () => void;
};

const ParameterArrayTableHeader: React.FC<ParameterArrayTableHeaderProps> = (
  props,
) => {
  const { label, onRemove } = props;
  const { t } = useTranslation();
  const classes = useStyles();

  return (
    <TableHead>
      <TableRow>
        <TableCell
          className={classes.cell}
          component="th"
          align="center"
        >
          {t('dashboard.dashboardTree.header.name')}
        </TableCell>
        <TableCell
          className={classes.cell}
          component="th"
          align="center"
        >
          {t('dashboard.dashboardTree.header.value')}
        </TableCell>
        <TableCell
          className={classes.cell}
          component="th"
          align="center"
        >
          <IconButton
            aria-label={label}
            color="primary"
            onClick={onRemove}
          >
            <RemoveIcon fontSize="large" />
          </IconButton>
        </TableCell>
      </TableRow>
    </TableHead>
  );
};

export default ParameterArrayTableHeader;
