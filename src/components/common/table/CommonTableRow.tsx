import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TableCell, {
  TableCellClassKey,
} from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { ClassNameMap } from '@material-ui/core/styles/withStyles';

type CommonTableRowProps = {
  label: string;
  name: string;
  classes2?: Partial<ClassNameMap<TableCellClassKey>> | undefined;
};

const useStyles = makeStyles((theme) => ({
  cell: { width: '50%' },
}));

const CommonTableRow: React.FC<CommonTableRowProps> = (props) => {
  const { children, name, label, classes2 } = props;
  const classes = useStyles();

  return (
    <TableRow aria-label={label}>
      <TableCell
        className={classes.cell}
        align="center"
        component="td"
      >
        {name}
      </TableCell>
      <TableCell
        className={classes.cell}
        align="center"
        component="td"
        classes={classes2}
      >
        {children}
      </TableCell>
    </TableRow>
  );
};

export default CommonTableRow;
