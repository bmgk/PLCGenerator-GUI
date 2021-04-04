import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';

const useStyles = makeStyles(() => ({
  cell: { width: '50%' },
}));

const ProcessDefinitionStepDetailsHeader = () => {
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
      </TableRow>
    </TableHead>
  );
};

export default ProcessDefinitionStepDetailsHeader;
